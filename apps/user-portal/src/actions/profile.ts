/**
 * Copyright (c) 2019, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import axios from "axios";
import log from "log";
import { ServiceResourcesEndpoint } from "../configs";
import { createEmptyProfile } from "../models/profile";
import { getLoginSession, isLoggedSession } from "./session";

export const getProfileInfo = async () => {
    const profileDetails = createEmptyProfile();

    if (isLoggedSession()) {
        const authUrl = ServiceResourcesEndpoint.me;
        const token = getLoginSession("access_token");
        const header = {
            headers: {
                "Accept": "application/json",
                "Access-Control-Allow-Origin": CLIENT_HOST,
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/scim+json"
            }
        };

        await axios.get(authUrl, header)
            .then((endpointResponse) => {
                if (endpointResponse.status === 200) {
                    profileDetails.displayName = endpointResponse.data.name.givenName || "";
                    profileDetails.username = endpointResponse.data.userName || "";
                    profileDetails.emails = endpointResponse.data.emails || [];
                    profileDetails.lastName = endpointResponse.data.name.familyName || "";
                    profileDetails.phoneNumbers = endpointResponse.data.phoneNumbers || [];
                    profileDetails.organisation = endpointResponse.data.EnterpriseUser.organization || "";
                    profileDetails.roles = endpointResponse.data.roles || [];
                    profileDetails.proUrl = endpointResponse.data.profileUrl || "";
                }
            })
            .catch((error) => {
                log.error(error);
            });
    }

    return profileDetails;
};