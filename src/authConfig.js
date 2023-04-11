import { LogLevel } from "@azure/msal-browser";

export const msalConfig = {
    auth: {
        clientId: "4a13f50e-0dea-4413-8de3-05fcdbe445f6",
        authority: "https://login.microsoftonline.com/648dda55-1b6e-4611-916c-2a724f746fcc",
        redirectUri: "http://localhost:3000"
    },
    cache: {
        cacheLocation: 'sessionStorage',
        storeAuthStateInCookie: false
    },
    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }
            }
        }
    }
};

export const loginRequest = {
    scopes: ["User.Read"]
};

export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
}