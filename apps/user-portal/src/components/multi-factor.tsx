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

import * as React from "react";
import { useTranslation } from "react-i18next";
import { Divider, List } from "semantic-ui-react";
import { Fido } from "./multi-factor-fido";
import { SmsOtp } from "./multi-factor-smsotp";
import { SettingsSection } from "./settings-section";

export const MultiFactor = (): JSX.Element => {
    const {t} = useTranslation();
    return (
        <SettingsSection
            header={ t("views:securityPage.multiFactor.title") }
            description={ t("views:securityPage.multiFactor.subTitle") }>
            <Divider hidden/>
            <List divided relaxed="very">
                <List.Item>
                    <SmsOtp/>
                </List.Item>
                <List.Item>
                    <Fido/>
                </List.Item>
            </List>
        </SettingsSection>
    );
}
