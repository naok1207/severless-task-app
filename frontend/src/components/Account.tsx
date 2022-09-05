import React, { createContext, ReactNode } from 'react';
import { CognitoUser, AuthenticationDetails, CognitoUserSession, CognitoUserAttribute } from "amazon-cognito-identity-js";
import Pool from 'src/UserPool';

type ContextType = {
  authenticate: (Username: string, Password: string) => Promise<CognitoUserSession>;
  getSession: () => Promise<CognitoUserSession>;
  logout: () => void;
}

type Props = {
  children: ReactNode;
}

const AccountContext = createContext<ContextType | undefined>(undefined);

const Account = ({ children }: Props) => {
  const getSession = async () => {
    return await new Promise<unknown>((resolve, reject) => {
      const user = Pool.getCurrentUser();
      if (user) {
        user.getSession(async (err: any, session: CognitoUserSession) => {
          if (err) {
            reject(err);
          } else {
            const attributes = await new Promise((resolve, reject) => {
              user.getUserAttributes((err, attributes: CognitoUserAttribute[]) => {
                if (err) {
                  reject(err);
                } else {
                  const results = {};

                  for (let attribute of attributes) {
                    const { Name, Value } = attribute;
                    // @ts-ignore
                    results[Name] = Value;
                  }
                  resolve(results)
                }
              })
            })
            // @ts-ignore
            resolve({ user, ...session, ...attributes });
          }
        })
      } else {
        reject("Need Login");
      }
    })
  }

  const authenticate = async (Username: string, Password: string) => {
    return await new Promise<CognitoUserSession>((resolve, reject) => {
      const user = new CognitoUser({ Username, Pool })

      const authDetails = new AuthenticationDetails({ Username,Password })

      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          console.log("onSuccess: ", data);
          resolve(data);
        },
        onFailure: (err) => {
          console.log("onFailure: ", err);
          reject(err);
        },
        newPasswordRequired: (data) => {
          console.log("newPasswordRequired: ", data);
        }
      })
    })
  }

  const logout = () => {
    const user = Pool.getCurrentUser();
    if (user) {
      user.signOut();
    }
  }

  return (
    <AccountContext.Provider value={{ authenticate, getSession, logout }}>
      {children}
    </AccountContext.Provider>
  )
}

export { Account, AccountContext };
