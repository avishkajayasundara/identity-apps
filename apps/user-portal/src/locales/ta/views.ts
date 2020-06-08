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

import { Views } from "../../models";

/* eslint-disable @typescript-eslint/camelcase */
export const views: Views = {
    components: {
        accountRecovery: {
            codeRecovery: {
                descriptions: {
                    add: "குறியீட்டு மீட்பு விருப்புகளை சேர்க்க மற்றும் புதுப்பிக்க"
                },
                heading: "குறியீட்டு மீட்பு"
            },
            emailRecovery: {
                descriptions: {
                    add: "மீட்பு மின்னஞ்சல் முகவரிய சேர்க்க",
                    update: "மீட்பு மின்னஞ்சல் முகவரியை புதுப்பிக்க ({{email}})"
                },
                forms: {
                    emailResetForm: {
                        inputs: {
                            email: {
                                label: "மின்னஞ்சல் முகவரி",
                                placeholder: "மீட்பு மின்னஞ்சல் முகவரியினை உள்ளிடுக",
                                validations: {
                                    empty: "மின்னஞ்சல் முகவரியினை உள்ளிடுக",
                                    invalidFormat: "மின்னஞ்சல் முகவரி சரியான வடிவத்தில் இல்லை"
                                }
                            }
                        }
                    }
                },
                heading: "மின்னஞ்சல் மீட்பு",
                notifications: {
                    updateEmail: {
                        error: {
                            description: "{{description}}",
                            message: "மீட்பு மின்னஞ்சல் முகவரியினை புதுப்பிக்கும் பொழுது தவறேற்பட்டுவிட்டது"
                        },
                        genericError: {
                            description: "மீட்பு மின்னஞ்சல் முகவரியினை புதுப்பிக்கும் பொழுது தவறேற்பட்டுவிட்டது",
                            message: "ஏதோ தவறேற்பட்டுவிட்டது"
                        },
                        success: {
                            description: "பயனர் விபரக்கோவையில் உள்ள மின்னஞ்சல் முகவரி புதுப்பிக்கப்பட்டுவிட்டது.",
                            message: "மின்னஞ்சல் புதுப்பிக்கப்பட்டுவிட்டது"
                        }
                    }
                }
            },
            questionRecovery: {
                descriptions: {
                    add: "கணக்கு மீட்பு சவால் வினாக்களை சேர்க்க மற்றும் புதுப்பிக்க"
                },
                forms: {
                    securityQuestionsForm: {
                        inputs: {
                            answer: {
                                label: "பதில்",
                                placeholder: "பதிலினை உள்ளிடுக",
                                validations: {
                                    empty: "பதில் கட்டாய களமாகும்"
                                }
                            },
                            question: {
                                label: "வினா",
                                placeholder: "வினாவொன்றிணை தேர்வு செய்க",
                                validations: {
                                    empty: "வினாவினை தேர்ந்தெடுத்தல் கட்டாயம்"
                                }
                            }
                        }
                    }
                },
                heading: "பாதுகாப்பு வினாக்கள்",
                notifications: {
                    addQuestions: {
                        error: {
                            description: "{{description}}",
                            message: "பாதுகாப்பு வினாக்களை கட்டமைக்கும் பொழுது தவறேற்பட்டுவிட்டது"
                        },
                        genericError: {
                            description: "சவால் வினாக்களை சேர்க்கும் பொழுது தவறேற்பட்டுவிட்டது",
                            message: "ஏதோ தவறேற்பட்டுவிட்டது"
                        },
                        success: {
                            description: "பாதுகாப்பு வினாக்கள் வெற்றிகரமாக சேர்க்கப்பட்டுவிட்டன",
                            message: "பாதுகாப்பு வினாக்கள் சேர்க்கப்பட்டுவிட்டன"
                        }
                    },
                    updateQuestions: {
                        error: {
                            description: "{{description}}",
                            message: "பாதுகாப்பு வினாக்களை புதுப்பிககும் பொழுது தவறேற்பட்டுவிட்டது"
                        },
                        genericError: {
                            description: "பாதுகாப்பு வினாக்களை புதுப்பிககும் பொழுது தவறேற்பட்டுவிட்டது",
                            message: "ஏதோ தவறேற்பட்டுவிட்டது !!!"
                        },
                        success: {
                            description: "பாதுகாப்பு வினாக்கள் வெற்றிகரமாக புதுப்பிக்கப்பட்டுவிட்டன",
                            message: "பாதுகாப்பு வினாக்கள் புதுப்பிக்கப்பட்டுவிட்டன"
                        }
                    }
                }
            }
        },
        applications: {
            all: {
                heading: "அனைத்து செயலிகளும்"
            },
            favourite: {
                heading: "பிடித்தவை"
            },
            notifications: {
                fetchApplications: {
                    error: {
                        description: "{{description}}",
                        message: "செயலிகளை பெறுவதில் தவறேற்பட்டுவிட்டது"
                    },
                    genericError: {
                        description: "செயலிகளை பெறமுடியவில்லை",
                        message: "ஏதோ தவறேற்பட்டுவிட்டது"
                    },
                    success: {
                        description: "செயலிகள் வெற்றிகராமாக பெறப்பட்டுவிட்டன.",
                        message: "செயலிகள் பெறப்பட்டுவிட்டன"
                    }
                }
            },
            placeholders: {
                emptyList: {
                    action: "பட்டியலைப் புதுப்பிக்கவும்",
                    subtitles: {
                        0: "செயலிகளின் பட்டியல் வெறுமையாக உள்ளது.",
                        1: "இது கண்டறியப்படக்கூடிய செயலிகள் ஏதும் இல்லாமையின் காரணமாக இருக்கலாம்.",
                        2: "தயவு செய்து இயக்க நிர்வாகி ஒருவரிடம் செயலிகளின் கண்டுபிடிப்புத்தன்மையை செயற்படுத்துமாறு விண்ணப்பியுங்கள்."
                    },
                    title: "செயலிகள் ஏதுமில்லை"
                }
            },
            recent: {
                heading: "அண்மையில் பயன்படுத்தப்பட்ட செயலிகள்"
            },
            search: {
                forms: {
                    searchForm: {
                        inputs: {
                            filerAttribute: {
                                label: "வடிகட்டும் பண்பு",
                                placeholder: "எ.கா.: பெயர், விவரம் போன்றவை",
                                validations: {
                                    empty: "வடிகட்டல் பண்பு ஒரு கட்டாய களமாகும்"
                                }
                            },
                            filterCondition: {
                                label: "வடிகட்டும் நிபந்தனை",
                                placeholder: "எ.கா.: தொடங்குவது",
                                validations: {
                                    empty: "வடிகட்டும் நிபந்தனை ஒரு கட்டாய களமாகும்"
                                }
                            },
                            filterValue: {
                                label: "வடிகட்டும் மதிப்பு",
                                placeholder: "எ.கா.: facebook, slack போன்றவை",
                                validations: {
                                    empty: "வடிகட்டும் மதிப்பு ஒரு கட்டாய களமாகும்"
                                }
                            }
                        }
                    }
                },
                hints: {
                    querySearch: {
                        actionKeys: "Shift + Enter",
                        label: "கேள்வியின் மூலம் தேடுவதற்கு"
                    }
                },
                options: {
                    header: "மேம்பட்ட தேடல்"
                },
                placeholder: "பெயரைக் கொண்டு தேடு",
                popups: {
                    clear: "தேடலை அழி",
                    dropdown: "தேர்வுகளை காண்பி"
                },
                resultsIndicator: '"{{query}}" இற்கான பெறுபேறுகள்'
            }
        },
        approvals: {
            notifications: {
                fetchApprovalDetails: {
                    error: {
                        description: "{{description}}",
                        message: "ஒப்புதல்களை பெறுவதில் தவறேற்பட்டுவிட்டது"
                    },
                    genericError: {
                        description: "ஒப்புதல்களை புதுப்பிக்க இயலவில்லை",
                        message: "ஏதோ தவறேற்பட்டுவிட்டது"
                    },
                    success: {
                        description: "ஒப்புதல் விவரங்கள் வெற்றிகரமாக பெறப்பட்டுவிட்டன",
                        message: "ஒப்புதல் விவரங்கள் பெறப்பட்டுவிட்டன"
                    }
                },
                fetchPendingApprovals: {
                    error: {
                        description: "{{description}}",
                        message: "முடிவெடுக்கப்படாத ஒப்புதல்களை பெறுவதில் தவறு"
                    },
                    genericError: {
                        description: "முடிவெடுக்கப்படாத ஒப்புதல்களை பெறுவதில் தவறேற்பட்டுவிட்டது",
                        message: "ஏதோ தவறேற்பட்டுவிட்டது"
                    },
                    success: {
                        description: "முடிவெடுக்கப்படாத ஒப்புதல்களை வெற்றிகரமாக பெறப்பட்டுவிட்டன",
                        message: "முடிவெடுக்கப்படாத ஒப்புதல்களை பெறப்பட்டுவிட்டன"
                    }
                },
                updatePendingApprovals: {
                    error: {
                        description: "{{description}}",
                        message: "ஒப்புதல் புதுப்பிக்கப்பட்டுவிட்டது"
                    },
                    genericError: {
                        description: "ஒப்புதலை புதுப்பிக்க இயலவில்லை",
                        message: "ஏதோ தவறேற்பட்டுவிட்டது"
                    },
                    success: {
                        description: "ஒப்புதல் வெற்றிகரமாக புதுப்பிக்கப்பட்டுவிட்டது",
                        message: "புதுப்பித்தல் வெற்றி"
                    }
                }
            }
        },
        changePassword: {
            forms: {
                passwordResetForm: {
                    inputs: {
                        confirmPassword: {
                            label: "கடவுச்சொல் உறுதிப்பாடு",
                            placeholder: "புதிய கடவுச்சொல்லை மீண்டும் உள்ளிடுங்கள்",
                            validations: {
                                empty: "கடவுச்சொல் உறுதிப்பாடு கட்டாயாமன களமாகும்.",
                                mismatch: "உங்கள் புதிய கடவுச்சொல்லும் கடவுச்சொல் உறுதிப்பாடும் பொருந்தவில்லை."
                            }
                        },
                        currentPassword: {
                            label: "நிகழ்கால கடவுச்சொல்",
                            placeholder: "உங்களின் நிகழ்கால கடவுச்சொல்லை உள்ளிடுங்கள்",
                            validations: {
                                empty: "நிகழ்கால கடவுச்சொல் கட்டாயமான களமாகும்.",
                                invalid: "நீங்கள் அளித்த நிகழ்கால கடவுச்சொல் தவறானது"
                            }
                        },
                        newPassword: {
                            label: "புதிய கடவுச்சொல்",
                            placeholder: "புதிய கடவுச்சொல்லை உள்ளிடுங்கள்",
                            validations: {
                                empty: "புதிய கடவுச்சொல் கட்டாயமான களமாகும்"
                            }
                        }
                    },
                    validations: {
                        genericError: {
                            description: "ஏதோ தவறேற்பட்டுவிட்டது. மீண்டும் முயற்சி செய்க.",
                            message: "கடவுச்சொல் பிழையை மாற்றவும்"
                        },
                        invalidCurrentPassword: {
                            description: "நீங்கள் அளித்த தற்போதைய கடவுச்சொல் தவறானது. மீண்டும் முயற்சி செய்க.",
                            message: "கடவுச்சொல் பிழையை மாற்றவும்"
                        },
                        submitError: {
                            description: "{{description}}",
                            message: "கடவுச்சொல் பிழையை மாற்றவும்"
                        },
                        submitSuccess: {
                            description: "உங்கள் கடவுச்சொல் வெற்றிகரமாக மாற்றப்பட்டது விட்டது",
                            message: "கடவுச்சொல்லை மீட்டலில் வெற்றி"
                        }
                    }
                }
            },
            modals: {
                confirmationModal: {
                    heading: "உறுதிப்படுத்தல்",
                    message:
                        "கடவுச்சொல்லை மாற்றுவது உங்களது நிகழ்கால அமர்வை முடிவுக்குக்கொண்டுவரும்." +
                        " நீங்கள் உங்கள் புதிய கடவுச்சொல்லை பயன் படுத்தி மீண்டும் உள்நுழைய வேண்டும்." +
                        " மேலும் தொடர விரும்புகிறீர்களா?"
                }
            }
        },
        consentManagement: {
            editConsent: {
                collectionMethod: "அறவிடும் முறை",
                dangerZones: {
                    revoke: {
                        actionTitle: "அகற்றுவதில்",
                        header: "சம்மதத்தை ரத்துசெய்",
                        subheader: "இந்த பயன்பாட்டிற்கான ஒப்புதலை நீங்கள் மீண்டும் வழங்க வேண்டும்."
                    }
                },
                description: "விபரம்",
                piiCategoryHeading:
                    "உங்கள் தனிப்பட்ட தகவல்களை பயன்பாட்டுடன் சேகரிப்பதற்கும் பகிர்வதற்கும் சம்மதத்தை நிர்வகிக்கவும். " +
                    "மாற்றங்களைச் சேமிக்க நீங்கள் திரும்பப்பெற வேண்டிய பண்புகளைத் தேர்வுசெய்து புதுப்பிப்பு பொத்தானை அழுத்தவும் " +
                    "அல்லது அனைத்து பண்புகளுக்கான ஒப்புதலை நீக்க திரும்பப்பெறு பொத்தானை அழுத்தவும்.",
                state: "நிலை",
                version: "பதிப்பு"
            },
            modals: {
                consentRevokeModal: {
                    heading: "நீ சொல்வது உறுதியா?",
                    message:
                        "இந்த செயல்பாடு மீளக்கூடியதல்ல. இது அனைத்து பண்புகளுக்கான ஒப்புதலை நிரந்தரமாக ரத்து " +
                        "செய்யும். நீங்கள் நிச்சயமாக தொடர விரும்புகிறீர்களா?",
                    warning: "உள்நுழைவு ஒப்புதல் பக்கத்திற்கு நீங்கள் திருப்பி விடப்படுவீர்கள் என்பதை நினைவில் கொள்க"
                }
            },
            notifications: {
                consentReceiptFetch: {
                    error: {
                        description: "{{description}}",
                        message: "ஏதோ தவறேற்பட்டுவிட்டது"
                    },
                    genericError: {
                        description: "தேர்வு செய்யப்பட்ட செயலி பற்றிய தகவலை பெற முடியவில்லை",
                        message: "ஏதோ தவறேற்பட்டுவிட்டது"
                    },
                    success: {
                        description: "அனுமதி பற்றுசீட்டு வெற்றிகரமாக பெறப்பட்டுவிட்டது",
                        message: "அனுமதி பற்றுசீட்டு பெறப்பட்டுவிட்டது"
                    }
                },
                consentedAppsFetch: {
                    error: {
                        description: "{{description}}",
                        message: "ஏதோ தவறேற்பட்டுவிட்டது"
                    },
                    genericError: {
                        description: "அனுமதியளிக்கப்பட்ட செயலிகளின் பட்டியலை பெற முடியவில்லை",
                        message: "ஏதோ தவறேற்பட்டுவிட்டது"
                    },
                    success: {
                        description: "அனுமதியளிக்கபட்ட செயலிகளின் பட்டியல் வெற்றிகரமாக பெறப்பட்டுவிட்டது",
                        message: "அனுமதியளிக்கபட்ட செயலிகளின் பட்டியல் பெறப்பட்டுவிட்டது"
                    }
                },
                revokeConsentedApp: {
                    error: {
                        description: "{{description}}",
                        message: "அனுமதி நீக்கலில் தவறு"
                    },
                    genericError: {
                        description: "செயலியின் அனுமதியினை நீக்க இயலவில்லை",
                        message: "ஏதோ தவறேற்பட்டுவிட்டது"
                    },
                    success: {
                        description: "செயலியின் அனுமதி வெற்றிகராமக நீக்கப்பட்டுவிட்டது.",
                        message: "அனுமதி நீக்கலில் வெற்றி"
                    }
                },
                updateConsentedClaims: {
                    error: {
                        description: "{{description}}",
                        message: "ஏதோ தவறேற்பட்டுவிட்டது"
                    },
                    genericError: {
                        description: "செயலியின் அனுமதியளிக்கப்பட்ட கூற்றுக்கள் புதுப்பிக்கப்படுவதில் தோல்வி",
                        message: "ஏதோ தவறேற்பட்டுவிட்டது"
                    },
                    success: {
                        description: "செயலியின் அனுமதியளிக்கப்பட்ட கூற்றுக்கள் வெற்றிகரமாக புதுப்பிக்கப்பட்டுவிட்டன",
                        message: "அனுமதியளிக்கப்பட்ட கூற்றுக்கள் புதுப்பிக்கப்பட்டுவிட்டன"
                    }
                }
            }
        },
        federatedAssociations: {
            deleteConfirmation: "இது உங்கள் கணக்கிலிருந்து இந்த வெளிப்புற உள்நுழைவை அகற்றும். நீக்குவதைத் தொடர விரும்புகிறீர்களா?",
            notifications: {
                getFederatedAssociations: {
                    error: {
                        description: "{{description}}",
                        message: "ஏதோ தவறேற்பட்டுவிட்டது"
                    },
                    genericError: {
                        description: "வெளிப்புற உள்நுழைவுகளை பெற முடியவில்லை",
                        message: "ஏதோ தவறேற்பட்டுவிட்டது"
                    },
                    success: {
                        description: "வெளிப்புற உள்நுழைவுகள் வெற்றிகரமாக பெறப்பட்டுவிட்டன",
                        message: "வெளிப்புற உள்நுழைவுகள் வெற்றிகரமாக பெறப்பட்டுவிட்டன"
                    }
                },
                removeAllFederatedAssociations: {
                    error: {
                        description: "{{description}}",
                        message: "ஏதோ தவறேற்பட்டுவிட்டது"
                    },
                    genericError: {
                        description: "வெளிப்புற உள்நுழைவுகளை அகற்ற முடியவில்லை",
                        message: "ஏதோ தவறேற்பட்டுவிட்டது"
                    },
                    success: {
                        description: "அனைத்து வெளிப்புற உள்நுழைவுகளும் வெற்றிகரமாக அகற்றப்பட்டன",
                        message: "வெளிப்புற உள்நுழைவுகள் வெற்றிகரமாக அகற்றப்பட்டன"
                    }
                },
                removeFederatedAssociation: {
                    error: {
                        description: "{{description}}",
                        message: "ஏதோ தவறேற்பட்டுவிட்டது"
                    },
                    genericError: {
                        description: "வெளிப்புற உள்நுழைவை அகற்ற முடியவில்லை",
                        message: "ஏதோ தவறேற்பட்டுவிட்டது"
                    },
                    success: {
                        description: "வெளிப்புற உள்நுழைவு வெற்றிகரமாக அகற்றப்பட்டது",
                        message: "வெளிப்புற உள்நுழைவு வெற்றிகரமாக அகற்றப்பட்டது"
                    }
                }
            }
        },
        footer: {
            copyright: "WSO2 Identity Server © {{year}}"
        },
        linkedAccounts: {
            accountTypes: {
                local: {
                    label: "உட்பயனர் கணக்கினை சேர்க்க"
                }
            },
            deleteConfirmation: "இது உங்கள் கணக்கிலிருந்து இணைக்கப்பட்ட கணக்கை அகற்றும். நீக்குவதைத் தொடர விரும்புகிறீர்களா?",
            forms: {
                addAccountForm: {
                    inputs: {
                        password: {
                            label: "கடவுச்சொல்",
                            placeholder: "கடவுச்சொல்லை உள்ளிடுக",
                            validations: {
                                empty: "கடவுச்சொல் ஒரு கட்டாய களமாகும்"
                            }
                        },
                        username: {
                            label: "பயனர்பெயர்",
                            placeholder: "பயனர்பெயரை உள்ளிடுக",
                            validations: {
                                empty: "பயனர்பெயர் ஒரு கட்டாய களமாகும்"
                            }
                        }
                    }
                }
            },
            notifications: {
                addAssociation: {
                    error: {
                        description: "{{description}}",
                        message: "இணைக்கப்பட்ட கணக்குகளை பெரும் பொழுது தவறேற்பட்டுவிட்டது"
                    },
                    genericError: {
                        description: "கணக்கினை இணைக்கும் பொழுது தவறேற்பட்டுவிட்டது.",
                        message: "ஏதோ தவறேற்பட்டுவிட்டது"
                    },
                    success: {
                        description: "கணக்கு வெற்றிகரமாக இணைக்கப் பட்டுவிட்டது",
                        message: "கணக்கு இணைக்கப்பட்டு விட்டது"
                    }
                },
                getAssociations: {
                    error: {
                        description: "{{description}}",
                        message: "இணைக்கப்பட்ட பயனர் கணக்குகளை பெறும் பொழுது தவறேற்பட்டுவிட்டது"
                    },
                    genericError: {
                        description: "இணைக்கப்பட்ட கனக்குகளை பெறும் பொழுது தவறேற்பட்டுவிட்டது",
                        message: "ஏதோ தவறேற்பட்டுவிட்டது"
                    },
                    success: {
                        description: "இணைக்கபட்ட பயனர் கணக்குகள் வெற்றிகரமாக பெறப்பட்டுவிட்டன",
                        message: "இணைக்கப்பட்ட பயனர் கணக்குகள் பெறப்பட்டுவிட்டன"
                    }
                },
                removeAllAssociations: {
                    error: {
                        description: "{{description}}",
                        message: "இணைக்கப்பட்ட பயனர் கணக்குகளை அகற்றுவதில் பிழை"
                    },
                    genericError: {
                        description: "இணைக்கப்பட்ட பயனர் கணக்குகளை அகற்றும்போது பிழை ஏற்பட்டது",
                        message: "ஏதோ தவறேற்பட்டுவிட்டது"
                    },
                    success: {
                        description: "இணைக்கப்பட்ட அனைத்து பயனர் கணக்குகளும் அகற்றப்பட்டுள்ளன",
                        message: "இணைக்கப்பட்ட கணக்குகள் வெற்றிகரமாக அகற்றப்பட்டன"
                    }
                },
                removeAssociation: {
                    error: {
                        description: "{{description}}",
                        message: "இணைக்கப்பட்ட பயனர் கணக்கை அகற்றுவதில் பிழை"
                    },
                    genericError: {
                        description: "இணைக்கப்பட்ட பயனர் கணக்கை அகற்றும்போது பிழை ஏற்பட்டது",
                        message: "ஏதோ தவறு நடைபெற்றிருக்கிறது"
                    },
                    success: {
                        description: "இணைக்கப்பட்ட பயனர் கணக்குகள் அகற்றப்பட்டன",
                        message: "இணைக்கப்பட்ட கணக்கு வெற்றிகரமாக அகற்றப்பட்டது"
                    }
                },
                switchAccount: {
                    error: {
                        description: "{{description}}",
                        message: "கணக்கினை மாற்றும் பொழுது தவறேற்பட்டுவிட்டது"
                    },
                    genericError: {
                        description: "கணக்கினை மாற்றும் பொழுது தவறேற்பட்டுவிட்டது",
                        message: "ஏதோ தவறேற்பட்டுவிட்டது"
                    },
                    success: {
                        description: "கணக்கு வெற்றிகரமாக மாற்றப்பட்டுவிட்டது",
                        message: "கணக்கு மாற்றப்பட்டுவிட்டது"
                    }
                }
            }
        },
        mfa: {
            authenticatorApp: {
                description: "இரண்டாவது உறுதிப்பாட்டு காரணியாக TOTP ஐப் பயன்படுத்த ஒரு உறுதிப்பாட்டு செயலியை" +
                    " பயன்படுத்தி QR குறியீட்டை பதிவு செய்யுங்கள்",
                heading: "உறுதிப்பாட்டு செயலி",
                hint: "QR குறியீட்டினை காண்பி",
                modals: {
                    done: "வெற்றி! இப்போது இரண்டு காரணி உறுதிப்பாட்டிற்கு உங்கள் உறுதிப்பாட்டு செயலியை பயன்படுத்தலாம்",
                    scan: {
                        authenticatorApps: "உறுதிப்பாட்டு செயலிகள்",
                        generate: "புதிய குறியீட்டை உருவாக்கவும்",
                        heading: "ஒரு உறுதிப்பாட்டு செயலியை பயன்படுத்தி இந்த QR குறியீட்டை பதிவு செய்யுங்கள்",
                        messageBody: "உறுதிப்பாட்டு செயலிகளின் பட்டியலை இங்கே காணலாம்.",
                        messageHeading: "உங்களிடம் உறுதிப்பாட்டு செயலி இல்லையா?"
                    },
                    verify: {
                        error: "சரிபார்ப்பு தோல்வியுற்றது. தயவு செய்து மீண்டும் முயற்சிக்கவும்.",
                        heading: "உறுதிப்பாட்டு செயலியிலிருந்து சரிபார்ப்புக் குறியீட்டை உள்ளிடவும்",
                        label: "சரிபார்ப்புக் குறியீடு",
                        placeholder: "உங்கள் சரிபார்ப்புக் குறியீட்டை உள்ளிடவும்",
                        requiredError: "சரிபார்ப்புக் குறியீட்டை உள்ளிடவும்",
                        reScan: "மீண்டும் பதிவு செய்",
                        reScanQuestion: "QR குறியீட்டினை மீண்டும் பதிவு செய்ய வேண்டுமா?"
                    }
                },
                notifications: {
                    initError: {
                        error: {
                            description: "{{error}}",
                            message: "ஏதோ தவறேற்பட்டுவிட்டது"
                        },
                        genericError: {
                            description: "QR குறியீட்டினை பெறும் பொழுது தவறேற்பட்டுவிட்டது",
                            message: "ஏதோ தவறேற்பட்டுவிட்டது"
                        }
                    },
                    refreshError: {
                        error: {
                            description: "{{error}}",
                            message: "ஏதோ தவறேற்பட்டுவிட்டது"
                        },
                        genericError: {
                            description: "புதிய QR குறியீட்டினை பெறும் பொழுது தவறேற்பட்டுவிட்டது",
                            message: "ஏதோ தவறேற்பட்டுவிட்டது"
                        }
                    }
                }
            },
            biometricAuthentication: {
                description: "Biometric Authentication using the WSO2 Verify Mobile App",
                form: {
                    label: "Biometric Authentication Device",
                    placeholder: "Enter a device name",
                    remove: "Remove the device",
                    required: "Please enter a name for your mobile device"
                },
                heading: "via Mobile Device",
                modals: {
                    deviceRegistrationErrorModal: {
                        description: "The device registration was interrupted. If this was not intentional you may " + "retry the same flow.",
                        heading: "Device Registration Failed"
                    },
                    done: "வெற்றி! இப்போது இரண்டு காரணி உறுதிப்பாட்டிற்கு உங்கள் உறுதிப்பாட்டு செயலியை பயன்படுத்தலாம்",
                    scan: {
                        generate: "புதிய குறியீட்டை உருவாக்கவும்",
                        heading: "ஒரு உறுதிப்பாட்டு செயலியை பயன்படுத்தி இந்த QR குறியீட்டை பதிவு செய்யுங்கள்",
                        messageBody: "உறுதிப்பாட்டு செயலிகளின் பட்டியலை இங்கே காணலாம்.",
                        messageHeading: "உங்களிடம் உறுதிப்பாட்டு செயலி இல்லையா?",
                        playStoreLink: "Android Play Store",
                        appStoreLink: "Apple App Store"
                    }
                },
                notifications: {
                    removeDevice: {
                        error: {
                            description: "{{description}}",
                            message: "Error occurred while removing the device"
                        },
                        genericError: {
                            description: "Error occurred while removing the device",
                            message: "Something went wrong"
                        },
                        success: {
                            description: "The device was successfully removed from the list",
                            message: "Your Device Removed Successfully"
                        }
                    },
                    getDiscoveryData: {
                        error: {
                            description: "{{description}}",
                            message: "Error occurred while retrieving generating the QR Code"
                        },
                        genericError: {
                            description: "Error occurred while generating QR Code",
                            message: "Something went wrong"
                        },
                        success: {
                            description: "The device was successfully registered and now you can use it as an" + " authentication factor",
                            message: "Your Device Registered Successfully"
                        }
                    },
                    updateDeviceName: {
                        error: {
                            description: "{{description}}",
                            message: "Error occurred while updating the mobile device name"
                        },
                        genericError: {
                            description: "Error occurred while updating the mobile device name",
                            message: "Something went wrong"
                        },
                        success: {
                            description: "The name of your mobile device was successfully updated",
                            message: "Mobile Device name updated successfully"
                        }
                    }
                },
                tryButton: "Try again"
            },
            fido: {
                description: "FIDO கருவியினை இணைப்பதானூடாக உங்களை உறுதிப்படுத்திக் கொள்ளுங்கள்",
                form: {
                    label: "பாதுகாப்பு கருவி",
                    placeholder: "கருவியின் பெயரை உள்ளிடுக",
                    remove: "கருவியினை நீக்கு",
                    required: "உங்களின் பாதுகாப்பு கருவியின் பெயரை உள்ளிடுக"
                },
                heading: "FIDO",
                modals: {
                    deviceRegistrationErrorModal: {
                        description: "அவர் சாதன பதிவு தடைப்பட்டது. இது வேண்டுமென்றே இல்லையென்றால், நீங்கள் அதே " +
                            "ஓட்டத்தை மீண்டும் முயற்சிக்கலாம் அல்லது பழைய பாதுகாப்பு விசையுடன் மீண்டும் முயற்சி செய்யலாம்.",
                        heading: "சாதன பதிவு தோல்வியுற்றது",
                    }
                },
                notifications: {
                    removeDevice: {
                        error: {
                            description: "{{description}}",
                            message: "சாதனத்தை அகற்றும்போது பிழை ஏற்பட்டது"
                        },
                        genericError: {
                            description: "சாதனத்தை அகற்றும்போது பிழை ஏற்பட்டது",
                            message: "ஏதோ ஒரு தவறு ஏற்பட்டுவிட்டது"
                        },
                        success: {
                            description: "சாதனம் பட்டியலிலிருந்து வெற்றிகரமாக அகற்றப்பட்டது",
                            message: "உங்கள் சாதனம் வெற்றிகரமாக அகற்றப்பட்டது"
                        }
                    },
                    startFidoFlow: {
                        error: {
                            description: "கருவிகளின் பட்டியலை பெறும் பொழுது தவறேற்பட்டுவிட்டது",
                            message: "ஏதோ ஒரு தவறு ஏற்பட்டுவிட்டது !!!"
                        },
                        genericError: {
                            description: "உங்களின் கருவியினை பதிவு செய்யும் பொழுது தவறேற்பட்டுவிட்டது.",
                            message: "ஏதோ ஒரு தவறு ஏற்பட்டுவிட்டது !!!"
                        },
                        success: {
                            description:
                                "உங்கள் கருவி வெற்றிகரமாக பதிவு செய்யப்பட்டுவிட்டது. " +
                                "இதனை, இனி, நீங்கள் உங்களது உறுதிப்பாட்டு காரணியாக பயன்படுத்திக் கொள்ளலாம்.",
                            message: "உங்கள் கருவி பதிவு செய்யப்பட்டுவிட்டது."
                        }
                    },
                    updateDeviceName: {
                        error: {
                            description: "{{description}}",
                            message: "பாதுகாப்பு கருவியின் பெயரைப் புதுப்பிக்கும்போது தவறு ஏற்பட்டுவிட்டது"
                        },
                        genericError: {
                            description: "உங்களின் பாதுகாப்பு கருவியின் பெயரைப் புதுப்பிக்கும்போது தவறு " +
                                "ஏற்பட்டுவிட்டது",
                            message: "ஏதோ ஒரு தவறு ஏற்பட்டுவிட்டது !!!"
                        },
                        success: {
                            description:
                                "உங்கள் பாதுகாப்பு கருவியின் பெயர் வெற்றிகரமாக புதுப்பிக்கப்பட்டது.",
                            message: "பாதுகாப்பு கருவியின் பெயர் வெற்றிகரமாக புதுப்பிக்கப்பட்டது."
                        }
                    }
                },
                tryButton: "பழைய சாதனத்துடன் முயற்சிக்கவும்"
            },
            smsOtp: {
                descriptions: {
                    hint: "நீங்கள் உறுதிப்படுத்தும் குறியீட்டினை குறுஞ் செய்தியினூடாக பெறுவீர்கள்"
                },
                heading: "ஒரு முறை கடவுச்சொல்(OTP) குறுஞ் செய்தி",
                notifications: {
                    updateMobile: {
                        error: {
                            description: "கையடக்க தொலைபேசி இலக்கத்தினை புதுப்பிக்கும் பொழுது தவறொன்று ஏற்பட்டு விட்டது",
                            message: "தவறொன்று ஏற்பட்டுவிட்டது !!!"
                        },
                        genericError: {
                            description: "{{description}}",
                            message: "தவறொன்று ஏற்பட்டுவிட்டது"
                        },
                        success: {
                            description:
                                "பயனர் விபரத்தில் உள்ள கையடக்க தொலைபேசி இலக்கம் வெற்றிகரமாக " +
                                "புதுப்பிக்கப்பட்டுவிட்டது.",
                            message: "கையடக்க தொலைபேசி இலக்கம் புதுப்பிக்கப்பட்டுவிட்டது"
                        }
                    }
                }
            }
        },
        overview: {
            widgets: {
                accountActivity: {
                    actionTitles: {
                        update: "கணக்கு செயல்பாட்டை நிர்வகிக்கவும்"
                    },
                    description: " நீங்கள் பின்வரும் கருவியினூடாக உள் நுழைந்திருக்கின்றீர்கள்",
                    header: "கணக்கின் செயற்பாடுகள்"
                },
                accountSecurity: {
                    actionTitles: {
                        update: "கணக்கின் பாதுகாப்பு அமைப்பினை புதுப்பி"
                    },
                    description: "உங்களின் கணக்கினை பாதுகாப்பாக வைத்திருப்பதற்கான அமைப்புக்களும் பரிந்துரைகளும்",
                    header: "கணக்கின் பாதுகாப்பு"
                },
                accountStatus: {
                    complete: "உங்கள் சுயவிவரம் முடிந்தது",
                    completedFields: "பூர்த்தி செய்யப்பட்ட புலங்கள்",
                    completionPercentage: "உங்கள் சுயவிவர நிறைவு {{percentage}}%",
                    inComplete: "உங்கள் சுயவிவரத்தை பூர்த்தி செய்யவும்",
                    inCompleteFields: "முழுமையற்ற புலங்கள்",
                    mandatoryFieldsCompletion: "{{total}} கட்டாய புலங்களில் {{completed}} முடிந்தது",
                    optionalFieldsCompletion: "{{total}} விருப்ப புலங்களில் {{completed}} முடிந்தது"
                },
                consentManagement: {
                    actionTitles: {
                        manage: "அனுமதிகளை முகாமை செய்"
                    },
                    description: "செயலிகளுடன் பகிர விரும்பும் தகவல்களை கட்டுப்படுத்து",
                    header: "அனுமதி முகாமை"
                }
            }
        },
        privacy: {
            about: {
                description:
                    "WSO2 Identity Server (இக் கொள்கையில் “WSO2 IS” என குறிப்பிடப்படும்) திறந்த தரநிலைகள் மற்றும் குறிப்புகளை " +
                    "அடிப்படையாகக் கொண்ட ஒரு திறந்த மூல அடையாள முகாமைத்துவம் மற்றும் உரிமம் வழங்கி ஆகும்.",
                heading: "WSO2 Identity Server ஐ பற்றி"
            },
            privacyPolicy: {
                collectionOfPersonalInfo: {
                    description: {
                        list1: {
                            0:
                                "சந்தேகத்துக்குரிய முறையில் உங்கள் கணக்கிற்குள் உள்நுழைய மேற்கொள்ளப்படும் முயற்சிகளை கண்டரிய" +
                                " WSO2 IS உங்கள் IP முகவரியினை பயன்படுத்துகின்றது.",
                            1:
                                "உங்களது முதற் பெயர், இறுதிப் பெயர் போன்ற விவரங்களை WSO2 IS உங்களுக்கு சிறப்பான, தனிப்பட்ட " +
                                "அனுபவத்தை தர பயன்படுத்துகின்றது.",
                            2:
                                "உங்களது கணக்கினை மீட்க மட்டுமே WSO2 IS உங்களது பாதுகாப்பு வினாக்களையும் அவற்றிற்கான " +
                                "விடைகளையும் பயன்படுத்துகின்றது."
                        },
                        para1:
                            "உங்கள் அணுகல் தேவைகளை பூர்த்தி செய்ய மட்டுமே WSO2 IS உங்களது தகவல்களை சேகரிக்கின்றது." +
                            "உதாரணத்திற்கு"
                    },
                    heading: "தனிப்பட்ட தகவல் சேகரிப்பு",
                    trackingTechnologies: {
                        description: {
                            list1: {
                                0:
                                    "நீங்கள் உங்களது தனிப்பட்ட தகவல்களை உள்ளிடும் சுய விவரப் பக்கத்திலிருந்து" +
                                    " தகவல்களை சேகரிப்பதனூடாகவும்",
                                1:
                                    "உங்களது IP முகவரியினை HTTP கோரிக்கைகள், HTTP headers, மற்றும் TCP/IPயினூடாக " +
                                    "கண்காணிப்பதனூடாகவும்",
                                2: "உங்களது பூகோளவியல் தகவல்களை IP முகவரியினூடாக கண்காணிப்பதனூடகவும்",
                                3: "மேலதிக தகவல்களுக்காக உங்களது உள்நுழைவு வரலாறு மற்றும் உலாவி குக்கீகளை கண்காணிப்பதனூடாகவும்"
                            },
                            para1: "WSO2 IS உங்கள் தகவல்களை பின்வருமாறு சேகரிக்கின்றது:"
                        },
                        heading: "கண்காணிப்பு தொழில்நுட்பங்கள்"
                    }
                },
                description: {
                    para1:
                        "இக் கொள்கை, WSO2 IS எவ்வாறு உங்கள் தகவல்களை பெறுகின்றது, தகவல்களை பெறும் நோக்கம், மற்றும் " +
                        "உங்கள் தகவல்களை வைத்திருத்தல் பற்றிய விவரங்களை விவரிக்கின்றது.",
                    para2:
                        "இக் கொள்கை வெறுமனே குறிப்பிற்காக மட்டுமே. அத்துடன், இக்கொள்கை உற்பத்தியாக " +
                        "வழங்கப்படும் மென்பொருளுக்கு மட்டும் பொருந்தும்." +
                        "WSO2 Inc. இனாலோ அதனது மென்பொருள் பொறியியலாளர்களினாலோ WSO2 IS இல் வைத்திருக்கப்பட்டிருக்கும் " +
                        "தகவல்களை பெற முடியாது. மேலதிக தகவல்களுக்கு <i>பொறுப்புத் துறப்பு</i> பகுதியினை பார்வையிடவும்.",
                    para3:
                        "WSO2 IS ஐ நிர்வாகம் செய்யும் அல்லது அதனது பாவனையை கட்டுபடுத்தும் நிறுவனங்களோ, அல்லது தனிப்பட்ட " +
                        "நபர்களோ, அந் நபரினால் அல்லது அந் நிறுவனத்தினால் தகவல்கள் எவ்வாறு கட்டுபடுத்தப்படுகின்றன அல்லது " +
                        "செயாலாக்கப்படுகின்றன போன்றவற்றை விவரிக்கும் தமக்கானதொரு பொறுப்புத் துறப்பு கொள்கையினை உருவாக்கிக் கொள்ள" +
                        "வேண்டும்."
                },
                disclaimer: {
                    description: {
                        list1: {
                            0:
                                "WSO2 இற்கு, அதன் ஊழியர்களிற்கு, கூட்டாளர்களிற்கு மற்றும் துணை நிறுவனங்களிற்கு WSO2 " +
                                "IS இல் உள்ள தனிப்பட்ட தரவு உட்பட எந்தவொரு தரவையும் அணுகவோ, சேமிக்கவோ, " +
                                "செயலாக்கவோ அல்லது கட்டுப்படுத்தவோ இயாலது மற்றும் இவற்றிற்கான தேவையும் கிடையாது. " +
                                "தனிப்பட்ட தரவு உட்பட அனைத்து தரவும் WSO2 IS ஐ இயக்கும் நிறுவனம் அல்லது தனிநபரால் " +
                                "கட்டுப்படுத்தப்பட்டு செயலாக்கப்படுகிறது. WSO2, அதன் பணியாளர்கள், கூட்டாளர்கள் " +
                                "மற்றும் துணை நிறுவனங்கள் எந்தவொரு தரவு தனியுரிமை விதிமுறைகளின் அர்த்தத்திற்குட்பட்ட ஒரு தரவு " +
                                "செயலி அல்லது தரவுக் கட்டுப்படுத்தி அல்ல. WSO2 எந்தவொரு உத்தரவாதத்தையும் வழங்காது " +
                                "என்பதுடன் நிறுவனங்களோ, தனி நபர்களோ WSO2 IS ஐ பயன்படுத்தும் முறை மற்றும் நோக்கம், " +
                                "அத்துடன் அவற்றின் சட்டபூர்வ தன்மை என்பனவற்றிற்கு எவ்வித பொறுப்பும் எடுக்காது.",
                            1:
                                "இந்த தனியுரிமைக் கொள்கை WSO2 IS ஐ இயக்கும் நிறுவனம் அல்லது நபர்களின் தகவல் " +
                                "நோக்கங்களுக்காகவும், தனிப்பட்ட தரவு பாதுகாப்பு தொடர்பாக WSO2 IS இல் உள்ள " +
                                "செயல்முறைகள் மற்றும் செயல்பாடுகளை விளக்குவற்காகவும் அமைக்கப்பட்டுள்ளது. " +
                                "பயனர்களின் தனிப்பட்ட தரவை நிர்வகிக்கும் அதன் சொந்த விதிகள் மற்றும் செயல்முறைகளை " +
                                "உருவாக்கி நிர்வகிப்பது WSO2 IS ஐ இயக்கும் நிறுவனங்கள் மற்றும் நபர்களின் " +
                                "பொறுப்பாகும், மேலும் இதுபோன்ற விதிகள் மற்றும் செயல்முறைகள் இங்கு உள்ள பயன்பாடு, சேமிப்பு மற்றும் " +
                                "வெளிப்படுத்தல் கொள்கைகளை மாற்றக்கூடும். எனவே பயனர்களின் தனிப்பட்ட தரவை " +
                                "நிர்வகிக்கும் விவரங்களுக்கு பயனர்கள் அதன் சொந்த தனியுரிமைக் கொள்கைக்காக நிறுவனம் அல்லது WSO2 IS ஐ " +
                                "இயக்கும் நபர்களை அணுக வேண்டும்."
                        }
                    },
                    heading: "பொறுப்புத்துறப்பு"
                },
                disclosureOfPersonalInfo: {
                    description:
                        "WSO2 IS உடன் பதிவுசெய்யப்பட்ட தொடர்புடைய செயலிகளிற்கு (சேவை வழங்குநர் என்றும் " +
                        "அழைக்கப்படுகிறது) மட்டுமே தனிப்பட்ட தகவல்களை WSO2 IS வெளியிடுகிறது. இந்த செயலிகள் உங்கள் " +
                        "நிறுவனம் அல்லது நிறுவனத்தின் அடையாள நிர்வாகியால் பதிவு செய்யப்பட்டுள்ளன. தனிப்பட்ட " +
                        "தகவல்கள், நீங்கள் வேறுவிதமாக ஒப்புக் கொள்ளாவிட்டால் அல்லது சட்டத்தால் தேவைப்படும் இடத்தில் ஒழிய, சேகரிக்கப்பட்ட " +
                        "நோக்கங்களுக்காக மட்டுமே (அல்லது அந்த நோக்கத்துடன் ஒத்துப்போகும் என அடையாளம் " +
                        "காணப்பட்ட ஒரு பயன்பாட்டிற்காக), அத்தகைய சேவை வழங்குநர்களால் கட்டுப்படுத்தப்படும் விதத்திற்கு அமைய " +
                        "வெளிப்படுத்தப்படுகிறது. Personal ",
                    heading: "தனிப்பட்ட தகவல்களை வெளிப்படுத்தல்",
                    legalProcess: {
                        description:
                            "WSO2 ISஐ இயக்கும் அமைப்பு, நிறுவனம் அல்லது தனிநபர் உங்கள் தனிப்பட்ட தகவல்களை உங்கள் " +
                            "அனுமதியுடன் அல்லது இல்லாமல் சட்டத்தால் நிர்ப்பந்திக்கப்படும் இடத்து உரிய மற்றும் சட்டபூர்வமான " +
                            "செயல்முறைகளின் பிற்பாடு வெளியிட நிர்ப்பந்திக்கப்படலாம் என்பதை நினைவில் கொள்க.",
                        heading: "சட்ட செயல்முறை"
                    }
                },
                heading: "தனியுரிமைக் கொள்கை",
                moreInfo: {
                    changesToPolicy: {
                        description: {
                            para1:
                                "WSO2 IS இன் மேம்படுத்தப்பட்ட பதிப்புகள் இந்தக் கொள்கையில் மாற்றங்களைக் கொண்டிருக்கலாம் " +
                                "மற்றும் இந்தக் கொள்கைக்கான திருத்தங்கள் அத்தகைய மேம்பாடுகளுக்குள் தொகுக்கப்படும். " +
                                "மேம்படுத்தப்பட்ட பதிப்புகளைப் பயன்படுத்தத் தேர்ந்தெடுக்கும் பயனர்களுக்கு மட்டுமே இத்தகைய " +
                                "மாற்றங்கள் பொருந்தும்.",
                            para2:
                                "WSO2 IS ஐ இயக்கும் அமைப்பு அவ்வப்போது தனியுரிமைக் கொள்கையைத் " +
                                "திருத்தக்கூடும். WSO2 IS ஐ இயக்கும் அமைப்பு வழங்கிய அந்தந்த இணைப்பைக் கொண்டு மிக " +
                                "சமீபத்திய நிர்வாகக் கொள்கையை நீங்கள் காணலாம். எங்கள் அதிகாரப்பூர்வ பொது தடங்களின் " +
                                "ஊடாக தனியுரிமைக் கொள்கையில் மேற்கொள்ள்ப்படும் மாற்றங்களை அமைப்பு அறிவிக்கும்."
                        },
                        heading: "கொள்கை மாற்றங்கள்"
                    },
                    contactUs: {
                        description: {
                            para1:
                                "இந்த தனியுரிமைக் கொள்கை தொடர்பாக உங்களுக்கு ஏதேனும் கேள்வி அல்லது " +
                                "வருத்தங்கள் இருந்தால் WSO2 ஐ தொடர்பு கொள்ளவும்."
                        },
                        heading: "எங்களை தொடர்பு கொள்ள"
                    },
                    heading: "மேலதிக தகவல்கள்",
                    yourChoices: {
                        description: {
                            para1:
                                "WSO2 IS க்குள் உங்களிடம் ஏற்கனவே ஒரு பயனர் கணக்கு இருந்தால், இந்த " +
                                "தனியுரிமைக் கொள்கை உங்களுக்கு ஏற்றுக்கொள்ள முடியாதது எனக் கண்டால் உங்கள் " +
                                "கணக்கை செயலிழக்கச் செய்ய உங்களுக்கு உரிமை உண்டு.",
                            para2:
                                "உங்களிடம் கணக்கு இல்லாமல், எங்கள் தனியுரிமைக் கொள்கையுடன் நீங்கள் " +
                                "உடன்படவில்லை என்றால், கணக்கு ஒன்றினை நீங்கள் உருவாக்கமலிருக்க நீங்கள் தீர்மானிக்க முடியும்."
                        },
                        heading: "உங்கள் தேர்வுகள்"
                    }
                },
                storageOfPersonalInfo: {
                    heading: "தனிப்பட்ட தகவல் சேமிப்பு",
                    howLong: {
                        description: {
                            list1: {
                                0: "நிகழ்கால கடவுச்சொல்",
                                1: "முன்பு பயன்படுத்திய கடவுச்சொல்"
                            },
                            para1:
                                "நீங்கள் எங்கள் சேவையின் செயலிலுள்ள பயனராக இருக்கும் வரை WSO2 IS உங்கள் தனிப்பட்ட " +
                                "தரவைத் தக்க வைத்துக் கொள்ளும்.கொடுக்கப்பட்ட பயனர் தளங்களைப் " +
                                "பயன்படுத்தி எந்த நேரத்திலும் உங்கள் தனிப்பட்ட தரவைப் புதுப்பிக்கலாம்.",
                            para2:
                                "WSO2 IS உங்களுக்கு கூடுதல் பாதுகாப்பு அளிக்க சுருக்கப்பட்ட ரகசியங்களை வைத்திருக்கலாம். " +
                                "இதில் பின்வருவன அடங்கும்:"
                        },
                        heading: "எவ்வளவு காலத்திற்கு உங்கள் தகவல்கள் வைத்திருக்கப்படும்?"
                    },
                    requestRemoval: {
                        description: {
                            para1:
                                "உங்கள் கணக்கை நீக்க நிர்வாகியிடம் கோரலாம். நிர்வாகி என்பது நீங்கள் " +
                                "பதிவுசெய்த குத்தகைதாரரின் நிர்வாகி அல்லது நீங்கள் குத்தகைதாரர் அம்சத்தைப் பயன்படுத்தாவிட்டால் " +
                                "சூப்பர் நிர்வாகி.",
                            para2:
                                "கூடுதலாக, பதிவுகள், தரவுத்தளங்கள் அல்லது பகுப்பாய்வு சேமிப்பகத்தில் WSO2 IS தக்கவைத்துள்ள " +
                                "உங்கள் செயல்பாடுகளின் அனைத்து தடயங்களையும் அநாமதேயமாக்க நீங்கள் கோரலாம்."
                        },
                        heading: "உங்கள் தனிப்பட்ட தகவல்களை நீக்க கோருவது எப்படி?"
                    },
                    where: {
                        description: {
                            para1:
                                "WSO2 IS உங்கள் தனிப்பட்ட தகவல்களை பாதுகாப்பான தரவுத்தளங்களில் சேமிக்கிறது. உங்கள் " +
                                "தனிப்பட்ட தகவல்கள் வைத்திருக்கும் தரவுத்தளத்தைப் பாதுகாக்க WSO2 IS சரியான துறையில் " +
                                "ஏற்றுக்கொள்ளப்பட்ட பாதுகாப்பு நடவடிக்கைகளைப் பயன்படுத்துகிறது. WSO2 IS ஒரு " +
                                "தயாரிப்பாக உங்கள் தரவை எந்த மூன்றாம் தரப்பினருடனோ அல்லது இருப்பிடங்களுடனோ மாற்றவோ " +
                                "பகிரவோ இல்லை.",
                            para2:
                                "WSO2 IS உங்கள் தனிப்பட்ட தரவை கூடுதல் பாதுகாப்புடன் வைத்திருக்க குறியாக்கத்தைப் " +
                                "பயன்படுத்தலாம்."
                        },
                        heading: "உங்கள் தனிப்பட்ட தகவல்கள் எங்கு சேகரிக்கப்படுகின்றன?"
                    }
                },
                useOfPersonalInfo: {
                    description: {
                        list1: {
                            0:
                                "தனிப்பயனாக்கப்பட்ட பயனர் அனுபவத்தை உங்களுக்கு வழங்க, WSO2 IS உங்கள் பெயரைப் " +
                                "மற்றும் பதிவேற்றிய உங்கள் படங்களை பயன்படுத்துகிறது",
                            1:
                                "அங்கீகரிக்கப்படாத அணுகல் அல்லது சாத்தியமான ஹேக்கிங் முயற்சிகளிலிருந்து உங்கள் கணக்கைப் " +
                                "பாதுகாக்க, WSO2 IS இந்த நோக்கத்திற்காக HTTP அல்லது TCP / IP தலைப்புகளைப் " +
                                "பயன்படுத்துகிறது.",
                            2:
                                "கணினி செயல்திறன் மேம்பாடுகள் குறித்த பகுப்பாய்வு நோக்கங்களுக்காக புள்ளிவிவர தரவைப் " +
                                "பெறப்படுகின்றது. WSO2 IS புள்ளிவிவர கணக்கீடுகளுக்குப் பிறகு எந்த தனிப்பட்ட " +
                                "தகவலையும் வைத்திருக்காது. எனவே, புள்ளிவிவர அறிக்கையில் ஒரு தனி நபரை அடையாளம் காண வழி இல்லை."
                        },
                        para1:
                            "WSO2 IS உங்கள் தனிப்பட்ட தகவல்களை சேகரிக்கப்பட்ட நோக்கங்களுக்காக மட்டுமே பயன்படுத்தும் " +
                            "(அல்லது அந்த நோக்கத்துடன் ஒத்துப்போகும் அடையாளம் காணப்பட்ட பயன்பாட்டிற்கு).",
                        para2: "WSO2 IS உங்கள் தனிப்பட்ட தகவல்களை பின்வரும் நோக்கங்களுக்காக மட்டுமே பயன்படுத்துகிறது.",
                        subList1: {
                            heading: "இதில் பின்வருவன அடங்கும்:",
                            list: {
                                0: "IP முகவரி",
                                1: "உலாவி கைரேகை",
                                2: "குக்கிகள்"
                            }
                        },
                        subList2: {
                            heading: "WSO2 IS பின்வருவனவற்றை பயன்படத்தலாம்:",
                            list: {
                                0: "புவியியல் தகவல்களைப் பெற IP முகவரி",
                                1: "உலாவி தொழில்நுட்பம் அல்லது / மற்றும் பதிப்பைத் தீர்மானிக்க உலாவி கைரேகை"
                            }
                        }
                    },
                    heading: "தனிப்பட்ட தகவல்களின் பாவனை"
                },
                whatIsPersonalInfo: {
                    description: {
                        list1: {
                            0: "உங்கள் பயனர் பெயர் (உங்கள் முதலாளியால் உருவாக்கப்பட்ட பயனர் பெயர் ஒப்பந்தத்தின் கீழ் தவிர)",
                            1: "உங்கள் பிறந்த தேதி / வயது",
                            2: "உள்நுழைய பயன்படும் IP முகவரி",
                            3:
                                "உள்நுழைய ஒரு சாதனத்தை (எ.கா., தொலைபேசி அல்லது டேப்லெட்) பயன்படுத்தினால் " +
                                "உங்கள் சாதன ID"
                        },
                        list2: {
                            0: "நீங்கள் TCP / IP இணைப்பை உருவாக்கிய நகரம் / நாடு",
                            1: "நீங்கள் உள்நுழைந்த நாளின் நேரம் (ஆண்டு, மாதம், வாரம், மணிநேரம் அல்லது நிமிடம்)",
                            2: "நீங்கள் உள்நுழைய பயன்படுத்திய சாதன வகை (எ.கா., தொலைபேசி அல்லது டேப்லெட்)",
                            3: "இயங்கு தளம் மற்றும் பொதுவான உலாவி தகவல்"
                        },
                        para1:
                            "உங்கள் தனிப்பட்ட தகவலாக உங்களை அடையாளம் காணும் எதையும் WSO2 IS கருதுகிறது. " +
                            "இது பின்வருவனவற்றை உள்ளடக்குகிறது, ஆனால் இவை மட்டும் அல்ல:",
                        para2:
                            "இருப்பினும், WSO2 IS தனிப்பட்ட தகவல்களாக கருதப்படாத பின்வரும் தகவல்களையும் " +
                            "சேகரிக்கிறது, ஆனால் இது <1> புள்ளிவிவர </ 1> நோக்கங்களுக்காக மட்டுமே பயன்படுத்தப்படுகிறது. இதற்கான " +
                            "காரணம், உங்களைக் கண்காணிக்க இந்த தகவலைப் பயன்படுத்த முடியாது என்பதே."
                    },
                    heading: "தனிப்பட்ட தகவல்கள் என்றால் என்ன?"
                }
            }
        },
        profile: {
            fields: {
                addresses_home: "வீட்டு முகவரி",
                addresses_work: "தொழில் முகவரி",
                emails: "மின்னஞ்சல் முகவரி",
                emails_home: "வீட்டு மின்னஞ்சல் முகவரி",
                emails_other: "வேறு மின்னஞ்சல் முகவரி",
                emails_work: "தொழில் மின்னஞ்சல் முகவரி",
                generic: {
                    default: "ஐச் சேருங்கள் {{fieldName}}"
                },
                name_familyName: "இறுதிப்பெயர்",
                name_givenName: "முதற்பெயர்",
                phoneNumbers: "தொலைபேசி இலக்கம்",
                phoneNumbers_home: "வீட்டு தொலைபேசி இலக்கம்",
                phoneNumbers_mobile: "கையடக்க தொலைபேசி இலக்கம்",
                phoneNumbers_other: "வேறு தொலைபேசி இலக்கம்",
                phoneNumbers_work: "தொழில் தொலைபேசி இலக்கம்",
                profileImage: "பயனர் படம்",
                profileUrl: "URL",
                userName: "பயனர் பெயர்"
            },
            forms: {
                emailChangeForm: {
                    inputs: {
                        email: {
                            label: "மின்னஞ்சல் முகவரி",
                            note: "கவனிக்குக: இது உங்கள் சுயவிவரத்தில் உள்ள மின்னஞ்சல் முகவரியை மாற்றும்",
                            placeholder: "மின்னஞ்சல் முகவரியை உள்ளிடவும்",
                            validations: {
                                empty: "மின்னஞ்சல் முகவரி ஒரு கட்டாயா களமாகும்",
                                invalidFormat: "மின்னஞ்சல் முகவரி சரியான வடிவத்தில் இல்லை"
                            }
                        }
                    }
                },
                generic: {
                    inputs: {
                        placeholder: "{{fieldName}} ஐ உள்ளிடவும்",
                        validations: {
                            empty: "{{fieldName}} ஒரு கட்டாயா களமாகும்",
                            invalidFormat: "{{fieldName}} சரியான வடிவத்தில் இல்லை"
                        }
                    }
                },
                mobileChangeForm: {
                    inputs: {
                        mobile: {
                            label: "கையடக்க தொலைபேசி இலக்கம்",
                            note: "கவனிக்குக: இது உங்களின் சுயவிபரத்தில் உள்ள கையடக்க தொலைபேசி இலக்கத்தை மாற்றும்",
                            placeholder: "கையடக்க தொலைபேசி இலக்கத்தை உள்ளிடவும்",
                            validations: {
                                empty: "கையடக்க தொலைபேசி இலக்கம் ஒரு கட்டாயா களமாகும்",
                                invalidFormat: "கையடக்க தொலைபேசி இலக்கம் சரியான வடிவத்தில் இல்லை"
                            }
                        }
                    }
                },
                nameChangeForm: {
                    inputs: {
                        firstName: {
                            label: "முதற்பெயர்",
                            placeholder: "முதற்பெயரை உள்ளிடவும்",
                            validations: {
                                empty: "முதற்பெயர் ஒரு கட்டாயா களமாகும்"
                            }
                        },
                        lastName: {
                            label: "இறுதிப்பெயர்",
                            placeholder: "இறுதிப்பெயரை உள்ளிடவும்",
                            validations: {
                                empty: "இறுதிப்பெயர் ஒரு கட்டாயா களமாகும்"
                            }
                        }
                    }
                },
                organizationChangeForm: {
                    inputs: {
                        organization: {
                            label: "நிறுவனம்",
                            placeholder: "நிறுவனத்தை உள்ளிடவும்",
                            validations: {
                                empty: "நிறுவனம் ஒரு கட்டாயா களமாகும்"
                            }
                        }
                    }
                }
            },
            notifications: {
                getProfileInfo: {
                    error: {
                        description: "பயனர் விபரத்தை பெறும் பொழுது தவறேற்பட்டுவிட்டது",
                        message: "ஏதோ தவறேற்பட்டுவிட்டது !!!"
                    },
                    genericError: {
                        description: "பயனர் விபரத்தை பெறும் பொழுது தவறேற்பட்டுவிட்டது",
                        message: "ஏதோ தவறேற்பட்டுவிட்டது !!!"
                    },
                    success: {
                        description: "பயனர் விபரம் வெற்றிகரமாக பெறப்பட்டுவிட்டது",
                        message: "பயனர் விபரம் பெறப்பட்டுவிட்டது"
                    }
                },
                updateProfileInfo: {
                    error: {
                        description: "பயனர் சுயவிபரத்தை புதுப்பிக்கும் பொழுது தவறேற்பட்டுவிட்டது",
                        message: "ஏதோ தவறேற்பட்டுவிட்டது !!!"
                    },
                    genericError: {
                        description: "பயனர் சுயவிபரத்தை புதுப்பிக்கும் பொழுது தவறேற்பட்டுவிட்டது",
                        message: "ஏதோ தவறேற்பட்டுவிட்டது !!!"
                    },
                    success: {
                        description: "பயனர் சுயவிபரம் வெற்றிகரமாக புதுப்பிக்கபட்டுவிட்டது.",
                        message: "பயனர் சுயவிபரம் புதுப்பிக்கபட்டுவிட்டது"
                    }
                }
            },
            placeholders: {
                SCIMDisabled: {
                    heading: "இந்த அம்சம் உங்கள் கணக்கிற்கு கிடைக்கவில்லை"
                }
            }
        },
        profileExport: {
            notifications: {
                downloadProfileInfo: {
                    error: {
                        description: "{{description}}",
                        message: "பயனர் சுயவிபரத்தை பதிவிறக்கம் செய்யும் பொழுது தவறேற்பட்டுவிட்டது"
                    },
                    genericError: {
                        description: "பயனர் சுயவிபரத்தை பதிவிறக்கம் செய்யும் பொழுது தவறேற்பட்டுவிட்டது",
                        message: "ஏதோ தவறேற்பட்டுவிட்டது !!!"
                    },
                    success: {
                        description: "பயனர் சுயவிபரங்களைக் கொண்ட கோப்பு பதிவிறங்க தொடங்கிவிட்டது.",
                        message: "பயனர் சுயவிபர பதிவிறக்கம் ஆரம்பிக்கப்பட்டுவிட்டது"
                    }
                }
            }
        },
        userAvatar: {
            infoPopover: "இந்த படம் <1>Gravatar</1> சேவையிலிருந்து மீட்டெடுக்கப்பட்டது.",
            urlUpdateHeader: "உங்கள் சுயவிவரப் படத்தை அமைக்க பட URL ஐ உள்ளிடவும்"
        },
        userSessions: {
            browserAndOS: "{{os}} {{version}} இல் {{browser}}",
            dangerZones: {
                terminate: {
                    actionTitle: "நிறுத்துதல்",
                    header: "அமர்வை நிறுத்தவும்",
                    subheader: "குறிப்பிட்ட சாதனத்தில் நீங்கள் அமர்விலிருந்து வெளியேறுவீர்கள்."
                }
            },
            lastAccessed: "இறுதியாக அணுகியது {{date}}",
            modals: {
                terminateAllUserSessionsModal: {
                    heading: "உறுதிப்பாடு",
                    message:
                        "இச்செயல் சகல கருவிகளிலும் உள்ள உங்களுடைய அனைத்து IDP அமர்வுகளில் இருந்தும் " +
                        "உங்களை வெளியேற்றும். மேலும் தொடர விரும்புகின்றீர்களா?"
                },
                terminateUserSessionModal: {
                    heading: "உறுதிப்பாடு",
                    message:
                        "இச்செயல் குறிப்பிட்ட கருவியிலுள்ள IDP அமர்விலிருந்து உங்களை வெளியேற்றும்," +
                        " மேலும் தொடர விரும்புகின்றீர்களா?"
                }
            },
            notifications: {
                fetchSessions: {
                    error: {
                        description: "{{description}}",
                        message: "IDP அமர்வுகளை பெறும் பொழுது தவறேற்பட்டுவிட்டது."
                    },
                    genericError: {
                        description: "IDP அமர்வுகளை பெற இயலவில்லை",
                        message: "ஏதோ தவறேற்பட்டுவிட்டது."
                    },
                    success: {
                        description: "IDP அமர்வுகள் வெற்றிகரமாக பெறப்பட்டுவிட்டன.",
                        message: "IDP அமர்வுகள் பெறப்பட்டுவிட்டன"
                    }
                },
                terminateAllUserSessions: {
                    error: {
                        description: "{{description}}",
                        message: "IDP அமர்வுகளை முடிக்க இயலவில்லை"
                    },
                    genericError: {
                        description: "IDP அமர்வுகளை முடிக்கும் பொழுது தவறேற்பட்டுவிட்டது",
                        message: "IDP அமர்வுகளை முடிக்க இயலவில்லை"
                    },
                    success: {
                        description: "சகல IDP அமர்வுகளும் வெற்றிகரமாக முடிக்கப்பட்டுவிட்டன.",
                        message: "சகல IDP அமர்வுகளும் முடிக்கப்பட்டுவிட்டன"
                    }
                },
                terminateUserSession: {
                    error: {
                        description: "{{description}}",
                        message: "IDP அமர்வினை முடிக்க இயலவில்லை"
                    },
                    genericError: {
                        description: "IDP அமரவை முடிக்கும் பொழுது தவறேற்பட்டுவிட்டது",
                        message: "IDP அமர்வினை முடிக்க இயலவில்லை"
                    },
                    success: {
                        description: "IDP அமர்வு வெற்றிகரமாக முடிக்கப்பட்டுவிட்டது.",
                        message: "அமர்வு முடிக்கப்பட்டுவிட்டது"
                    }
                }
            }
        }
    },
    pages: {
        applications: {
            subTitle: "உங்கள் செயலிகளை முகாமை செய்ய மற்றும் பராமரிக்க",
            title: "செயலிகள்"
        },
        operations: {
            subTitle: "முடிவு செய்யப்படாத அனுமதிகள் போன்ற பணிகளை முகாமை செய்யவும் பராமரிக்கவும்",
            title: "செயற்பாடுகள்"
        },
        overview: {
            subTitle: "உங்களின் தகவல், பாதுகாப்பு, தனியுரிமை மற்றும் ஏனைய சார்ந்த கட்டமைப்புக்களை முகாமை செய்க",
            title: "வருக, {{firstName}}"
        },
        personalInfo: {
            subTitle: "உங்களின் கணக்கு, உப சுயவிபரக்கோவை, மற்றும் உங்களை பற்றிய தகவல்களை முகாமை செய்க",
            title: "பயனர் விபரம்"
        },
        privacy: {
            subTitle: "",
            title: "WSO2 Identity Server தனியுரிமைக் கொள்கை"
        },
        security: {
            subTitle: "உங்களின் கணக்கின் பாதுகாப்பை உறுதிப்படுத்த அமைப்புக்களை புதுப்பிக",
            title: "பாதுகாப்பு"
        }
    },
    placeholders: {
        404: {
            action: "மீண்டும் முகப்பிற்கு செல்ல",
            subtitles: {
                0: "நீங்கள் தேடி வந்த பக்கத்தினை எங்களால் கண்டுபிடிக்க இயலவில்லை",
                1: "பக்கத்தின் முகவரியினை சரி பாருங்கள் அல்லது கீழிருக்கும் பொத்தானை அழுத்தி முகப்புப் பக்கத்திற்குச் செல்லுங்கள்."
            },
            title: "பக்கம் காணப்படவில்லை"
        },
        emptySearchResult: {
            action: "தேடல் கேள்வியினை அழி",
            subtitles: {
                0: '"{{query}}" இற்கான பெறுபேறுகள் எதுவுமில்லை',
                1: "தயவுசெய்து வேறு பதத்தினை பயன்படுத்தி தேடவும்"
            },
            title: "பெறுபேறுகள் எதுவுமில்லை"
        },
        genericError: {
            action: "பக்கத்தைப் புதுப்பிக்கவும்",
            subtitles: {
                0: "இந்தப் பக்கத்தைக் காண்பிக்கும் போது ஏதோ தவறு ஏற்பட்டது.",
                1: "தொழில்நுட்ப விவரங்களுக்கு உலாவி console இனை பார்க்கவும்."
            },
            title: "ஏதோ தவறு ஏற்பட்டது"
        },
        loginError: {
            action: "வெளியேறுதலைத் தொடரவும்",
            subtitles: {
                0: "இந்த செயலியைப் பயன்படுத்த உங்களுக்கு அனுமதி இல்லை என்று தெரிகிறது.",
                1: "வேறு கணக்கில் உள்நுழைக."
            },
            title: "உங்களுக்கு அங்கீகாரம் இல்லை"
        }
    },
    sections: {
        accountRecovery: {
            description: "உங்கள் கணக்கின் மீட்பு சம்பந்தமான விருப்புகளை பார்வையிட மற்றும் மாற்ற",
            heading: "கணக்கு மீட்பு"
        },
        approvals: {
            description: "முடிவெடுக்கப்படாதா ஒப்புதல்களை முகாமை செய்ய",
            heading: "முடிவெடுக்கப்படாத ஒப்புதல்கள்",
            placeholders: {
                emptyApprovalList: {
                    heading: "உங்களிடம் {{status}} நிலையில் உள்ள முடிவெடுக்கப்படாத ஒப்புதல்கள் இல்லை"
                }
            }
        },
        changePassword: {
            actionTitles: {
                change: "உங்கள் கடவுச்சொல்லை மாற்றுக"
            },
            description: "பதிவு செய்த கடவுச்சொல்லை மாற்று.",
            heading: "கடவுச்சொல்லை மாற்று"
        },
        consentManagement: {
            actionTitles: {
                empty: "நீங்கள் எந்தவொரு செயலிற்கும் அனுமதி அளிக்கவில்லை"
            },
            description: "அனுமதி அளிக்கபட்ட செயலிகளையும் வலைத்தளங்களையும் முகாமை செய்க",
            heading: "அனுமதியளிக்கப்பட்ட செயலிகள்",
            placeholders: {
                emptyConsentList: {
                    heading: "நீங்கள் எந்தவொரு செயலிற்கும் அனுமதி அளிக்கவில்லை."
                }
            }
        },
        federatedAssociations: {
            description: "இந்தக் கணக்குடன் இணைக்கப்பட்டுள்ள பிற அடையாள வழங்குநர்களிடமிருந்து வழங்கப்பட்ட உங்கள் கணக்குகளைக் காண்க",
            heading: "வெளிப்புற உள்நுழைவுகள்"
        },
        linkedAccounts: {
            actionTitles: {
                add: "கணைக்கினை சேர்க்க"
            },
            description: "உங்களுடைய அனைத்து இணைக்கப்பட்ட கணக்குகளையும் முகாமை செய்ய",
            heading: "இணைக்கப்பட்ட கணக்குகள்"
        },
        mfa: {
            description: "உங்கள் பல காரணி உறுதிப்பாட்டு விருப்பங்களை பார்வையிடவும் முகாமை செய்யவும்",
            heading: "பல காரணி உறுதிப்பாடு"
        },
        profile: {
            description: "உங்கள் அடிப்படை சுயவிபரத் தகவல்களை முகாமை செய்ய மற்றும் புதுப்பிக்க",
            heading: "சுயவிபரம்"
        },
        profileExport: {
            actionTitles: {
                export: "சுயவிபரத்தை ஏற்றுமதி செய்க"
            },
            description:
                "பயனர் தகவல், பாதுகாப்பு வினாக்கள், அனுமதிகள் உள்ளிட்ட அனைத்து " +
                "சுயவிபரங்களையும் பதிவிறக்கம் செய்ய.",
            heading: "சுயவிபரத்தை ஏற்றுமதி செய்க"
        },
        userSessions: {
            actionTitles: {
                empty: "செயலில் IDP அமர்வுகள் இல்லை",
                terminateAll: "சகல IDP அமர்வுகளையும் முடிக்க"
            },
            description: "செயற்பாட்டில் உள்ள உங்கள் IDP அமர்வுகளை முகாமை செய்ய மற்றும் பார்க்க",
            heading: "செயற்பாட்டில் உள்ள IDP அமர்வுகள்",
            placeholders: {
                emptySessionList: {
                    heading: "இந்த பயனரின் எந்தவொரு IDP அமர்வும் செய்ற்பாட்டினில் இல்லை"
                }
            }
        }
    }
};
