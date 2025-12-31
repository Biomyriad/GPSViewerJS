var db = 
{
    "baseSchema": {
        "tables": [
            {
                "id": "tblA4Nca5jJeFMYAN",
                "name": "Property Updates (Please do not edit)",
                "primaryFieldId": "fld0REPNQo0JYnZrj",
                "fields": [
                    {
                        "type": "formula",
                        "options": {
                            "isValid": true,
                            "formula": "{fldqOMnyftfQoeeRb}",
                            "referencedFieldIds": [
                                "fldqOMnyftfQoeeRb"
                            ],
                            "result": {
                                "type": "singleLineText"
                            }
                        },
                        "id": "fld0REPNQo0JYnZrj",
                        "name": "Property"
                    },
                    {
                        "type": "multipleRecordLinks",
                        "options": {
                            "linkedTableId": "tblHGGYQmrZWotYol",
                            "isReversed": true,
                            "prefersSingleRecordLink": false,
                            "inverseLinkFieldId": "fldSxOLPuUHiB3kWK"
                        },
                        "id": "fldqOMnyftfQoeeRb",
                        "name": "Property Code"
                    },
                    {
                        "type": "dateTime",
                        "options": {
                            "dateFormat": {
                                "name": "local",
                                "format": "l"
                            },
                            "timeFormat": {
                                "name": "12hour",
                                "format": "h:mma"
                            },
                            "timeZone": "client"
                        },
                        "id": "fldejZcUD57tQG0Un",
                        "name": "Time updated delivered"
                    },
                    {
                        "type": "singleSelect",
                        "options": {
                            "choices": [
                                {
                                    "id": "selFupubE6Uo4o4gM",
                                    "name": "Critical",
                                    "color": "redLight2"
                                },
                                {
                                    "id": "selNugFIkfFiUXaF3",
                                    "name": "Normal",
                                    "color": "blueLight2"
                                },
                                {
                                    "id": "seliSpvvNkML8hkCR",
                                    "name": "FYI",
                                    "color": "grayLight2"
                                },
                                {
                                    "id": "selzvTiZEXnj7d7Y8",
                                    "name": "Expired",
                                    "color": "grayLight2"
                                },
                                {
                                    "id": "selkfjHDi3scn1eMF",
                                    "name": "Tonight only ",
                                    "color": "yellowLight2"
                                },
                                {
                                    "id": "selskHSfB8Cv4ndUH",
                                    "name": "High",
                                    "color": "blueLight2"
                                },
                                {
                                    "id": "selGx2XOVqUR3KA3f",
                                    "name": "We are about to be FIRED!",
                                    "color": "tealLight2"
                                }
                            ]
                        },
                        "id": "fld9c4Hpb9QeOuptS",
                        "name": "Priority Level"
                    },
                    {
                        "type": "multipleSelects",
                        "options": {
                            "choices": [
                                {
                                    "id": "seliWJdv74ULDYOQi",
                                    "name": "Amber Schumaker ",
                                    "color": "cyanLight2"
                                },
                                {
                                    "id": "selb5SBcWMvhsij9t",
                                    "name": "Hassan Mbwera",
                                    "color": "orangeLight2"
                                },
                                {
                                    "id": "selNIHL7C8KOCK1e9",
                                    "name": "Zakk Fjeldseth",
                                    "color": "grayLight2"
                                },
                                {
                                    "id": "sel6DgjXAZ67tiEnc",
                                    "name": "Carlos Williams",
                                    "color": "purpleLight2"
                                },
                                {
                                    "id": "selFjjfx8E1HiD6tM",
                                    "name": "Zack Zesch",
                                    "color": "yellowLight2"
                                },
                                {
                                    "id": "selhsUMWpvWQXOqmJ",
                                    "name": "Thomas Kosta",
                                    "color": "purpleLight2"
                                },
                                {
                                    "id": "selTCtcdLgZZDK6aF",
                                    "name": "Zekiah Hurd-Thompson",
                                    "color": "tealLight2"
                                },
                                {
                                    "id": "sel8UFuojsNNH3Epu",
                                    "name": "Dan Gruver",
                                    "color": "greenLight2"
                                },
                                {
                                    "id": "selmj2pX6kuRj3e0K",
                                    "name": "Marianne Cliff",
                                    "color": "blueLight2"
                                },
                                {
                                    "id": "sel93OYh6KsRNRlMv",
                                    "name": "Nico Lang",
                                    "color": "redLight2"
                                },
                                {
                                    "id": "sel0hl5m6S5zKBOgP",
                                    "name": "Kazandra Torres",
                                    "color": "pinkLight2"
                                }
                            ]
                        },
                        "id": "fldakClpQdE07oeVJ",
                        "name": "Read Acknowledgement"
                    },
                    {
                        "type": "multipleSelects",
                        "options": {
                            "choices": [
                                {
                                    "id": "selj0CvJJnWlnWBFH",
                                    "name": "Parking",
                                    "color": "greenLight2"
                                },
                                {
                                    "id": "selcjOlc0mNolzldK",
                                    "name": "Lockup",
                                    "color": "yellowLight2"
                                },
                                {
                                    "id": "selGYwOLLBEckJDtc",
                                    "name": "Person description",
                                    "color": "redLight2"
                                },
                                {
                                    "id": "selcyxPIbvlwLJpT1",
                                    "name": "Pick up key",
                                    "color": "purpleLight2"
                                },
                                {
                                    "id": "selZ32gEXxpXeYeJv",
                                    "name": "PO Update",
                                    "color": "grayLight2"
                                },
                                {
                                    "id": "selCO7HqC6Tsdastp",
                                    "name": "Crime Report",
                                    "color": "grayLight2"
                                },
                                {
                                    "id": "selZeey8wgQsJmvYp",
                                    "name": "Patrol Request",
                                    "color": "purpleLight2"
                                },
                                {
                                    "id": "selTRv2l4gNLHLY13",
                                    "name": "Warning",
                                    "color": "yellowLight2"
                                },
                                {
                                    "id": "selzOClF0FPs9OGIM",
                                    "name": "Patrol Update",
                                    "color": "greenLight2"
                                },
                                {
                                    "id": "sel2R7aQC47Om2yYH",
                                    "name": "Report Update",
                                    "color": "purpleLight2"
                                },
                                {
                                    "id": "selukcAj1sRQNUFiN",
                                    "name": "Equipment Announcement",
                                    "color": "grayLight2"
                                },
                                {
                                    "id": "selln7rnOTOzYdB3d",
                                    "name": "Problem Resident Update",
                                    "color": "blueLight2"
                                },
                                {
                                    "id": "selWIm6A66jFKE84H",
                                    "name": "Protest Procedure",
                                    "color": "grayLight2"
                                },
                                {
                                    "id": "selUXVkfsJf63Z2ub",
                                    "name": "Key Audit",
                                    "color": "cyanLight2"
                                },
                                {
                                    "id": "selPzRW08JnPHu8Ai",
                                    "name": "Dispatch Alert",
                                    "color": "redLight2"
                                },
                                {
                                    "id": "selHZmeylhs5tglz4",
                                    "name": "Amenity opening ",
                                    "color": "redLight2"
                                },
                                {
                                    "id": "selzK1nydqN801b3M",
                                    "name": "Flashlight Procedure",
                                    "color": "pinkLight2"
                                },
                                {
                                    "id": "selA03y0ldhYjXimO",
                                    "name": "Service Termination",
                                    "color": "grayLight2"
                                },
                                {
                                    "id": "selhqLsMcoyxhq5Cj",
                                    "name": "Homeless report",
                                    "color": "cyanLight2"
                                },
                                {
                                    "id": "selR3TmODzYwRhXRs",
                                    "name": "Route Change",
                                    "color": "redLight2"
                                },
                                {
                                    "id": "sel2IJ4HPh0Xx3AEU",
                                    "name": "Extra patrols",
                                    "color": "blueLight2"
                                },
                                {
                                    "id": "selJ31TZcdw00BgI4",
                                    "name": "Firewatch",
                                    "color": "blueLight2"
                                },
                                {
                                    "id": "selA0TcxWIhjmgK3Q",
                                    "name": "Towing Procedure",
                                    "color": "grayLight2"
                                },
                                {
                                    "id": "selR7QKbvS1lIdPYy",
                                    "name": "Drop Key Fobs",
                                    "color": "grayLight2"
                                },
                                {
                                    "id": "selhZLBA4PfptBrJM",
                                    "name": "Approaching Persons",
                                    "color": "redLight2"
                                },
                                {
                                    "id": "seluAKJLABGm4WGQa",
                                    "name": "Temporary Patrol Request",
                                    "color": "orangeLight2"
                                },
                                {
                                    "id": "selJ5wYgfAFEiWYjp",
                                    "name": "Report Request",
                                    "color": "grayLight2"
                                },
                                {
                                    "id": "selVM7bekW5XE2VMp",
                                    "name": "Good Job",
                                    "color": "purpleLight2"
                                },
                                {
                                    "id": "selJzTBsYypnY2v4H",
                                    "name": "Pool Open!!!!!",
                                    "color": "greenLight2"
                                },
                                {
                                    "id": "selufq7K6GbXdPhAy",
                                    "name": "ReportRequest",
                                    "color": "grayLight2"
                                },
                                {
                                    "id": "selFJlLfZUJkIC93e",
                                    "name": "Manager Complaint",
                                    "color": "greenLight2"
                                },
                                {
                                    "id": "selcZWZ8zmMJbn5pF",
                                    "name": "Schedule",
                                    "color": "purpleLight2"
                                },
                                {
                                    "id": "selgqpPIh0qoEuHRj",
                                    "name": "Property Maps Added",
                                    "color": "cyanLight2"
                                },
                                {
                                    "id": "selB6UmiPBgMyJ70x",
                                    "name": "Restarting Service ",
                                    "color": "greenLight2"
                                },
                                {
                                    "id": "selX1iWPMKB4Ao8z2",
                                    "name": "Parking Enforcement",
                                    "color": "pinkLight2"
                                },
                                {
                                    "id": "selMJvT0jnFGVUyZW",
                                    "name": "Lock up service suspension",
                                    "color": "cyanLight2"
                                },
                                {
                                    "id": "selacVyF0Lh2xDt5q",
                                    "name": "Pool Closing",
                                    "color": "greenLight2"
                                },
                                {
                                    "id": "selEFPJN38v1bo97u",
                                    "name": "Scheduled Service Outage",
                                    "color": "yellowLight2"
                                },
                                {
                                    "id": "selSnG9UENmqAqlZI",
                                    "name": "Missed Lockup Report",
                                    "color": "yellowLight2"
                                },
                                {
                                    "id": "selJyN4YjSjk4aLJO",
                                    "name": "Tag Request",
                                    "color": "yellowLight2"
                                },
                                {
                                    "id": "selMp6gH2nSpMIt9s",
                                    "name": "New Property",
                                    "color": "greenLight2"
                                },
                                {
                                    "id": "seleWB0achRdBpWph",
                                    "name": "Emailed Reports",
                                    "color": "cyanLight2"
                                },
                                {
                                    "id": "selOSFz3XfxYVFqLw",
                                    "name": "Onsite Change ",
                                    "color": "cyanLight2"
                                },
                                {
                                    "id": "selPCi3hpfdVAUQtw",
                                    "name": "Service Change",
                                    "color": "orangeLight2"
                                },
                                {
                                    "id": "selRocfOR5rB8tEN5",
                                    "name": "Airtable Archive",
                                    "color": "pinkLight2"
                                },
                                {
                                    "id": "selOOlnJc2E3BoEUu",
                                    "name": "Pool Opening",
                                    "color": "grayLight2"
                                },
                                {
                                    "id": "selgDj8AofJycVHgJ",
                                    "name": "Pool Issue",
                                    "color": "purpleLight2"
                                },
                                {
                                    "id": "sel8b2dVS8wCtfAz8",
                                    "name": "Hard Check",
                                    "color": "orangeLight2"
                                },
                                {
                                    "id": "selKTE6hmgNSHkFsx",
                                    "name": "Miles Forms",
                                    "color": "purpleLight2"
                                },
                                {
                                    "id": "sel1mQfOXylUQJ8r0",
                                    "name": "Lights Out Report",
                                    "color": "orangeLight2"
                                },
                                {
                                    "id": "sel0K8L4oXm5vUKYY",
                                    "name": "No Unlocks",
                                    "color": "tealLight2"
                                },
                                {
                                    "id": "selgWVrinc0kuC06D",
                                    "name": "New Route Guide",
                                    "color": "tealLight2"
                                },
                                {
                                    "id": "sel2iOmzUc0nzzaxE",
                                    "name": "Call Response",
                                    "color": "tealLight2"
                                },
                                {
                                    "id": "seldM2gWWHhPWlTwa",
                                    "name": "Printer Update",
                                    "color": "grayLight2"
                                },
                                {
                                    "id": "selV0AEkmBjyQNSPe",
                                    "name": "AOG Office",
                                    "color": "blueLight2"
                                },
                                {
                                    "id": "selLgYGhkpx93eszQ",
                                    "name": "Tech Update",
                                    "color": "tealLight2"
                                },
                                {
                                    "id": "selNYwdLpIHAFMnpm",
                                    "name": "Trespass Bounty ",
                                    "color": "pinkLight2"
                                },
                                {
                                    "id": "selNyC9RxiWLERWKI",
                                    "name": "South Route",
                                    "color": "grayDark1"
                                },
                                {
                                    "id": "selteZKSGOy3KmMWR",
                                    "name": "Both Routes",
                                    "color": "grayDark1"
                                },
                                {
                                    "id": "selYRnDQLhwAj89wV",
                                    "name": "NE Route",
                                    "color": "grayDark1"
                                },
                                {
                                    "id": "selevO1pFmYGCMy9o",
                                    "name": "Training ",
                                    "color": "cyanBright"
                                },
                                {
                                    "id": "sel1MHLNdSLcCHijy",
                                    "name": "Unlock",
                                    "color": "tealBright"
                                },
                                {
                                    "id": "sel0dLX7bdsUBwAE0",
                                    "name": "Latch App",
                                    "color": "pinkBright"
                                },
                                {
                                    "id": "selOUXyaKya5KA34Y",
                                    "name": "Keys Added",
                                    "color": "yellowBright"
                                },
                                {
                                    "id": "sel9CZ5ToSBY8XAaX",
                                    "name": "Post Order Update",
                                    "color": "purpleLight1"
                                }
                            ]
                        },
                        "id": "fldcq6HqKXsaAqjex",
                        "name": "Category"
                    },
                    {
                        "type": "multilineText",
                        "id": "fldeZ3o9Qad8LeSOf",
                        "name": "Management Notes"
                    },
                    {
                        "type": "multilineText",
                        "id": "fldQCuvNzwoibBHfO",
                        "name": "Extra Notes"
                    },
                    {
                        "type": "date",
                        "options": {
                            "dateFormat": {
                                "name": "local",
                                "format": "l"
                            }
                        },
                        "id": "fldpwFACR46sN0yb5",
                        "name": "Update Expires"
                    },
                    {
                        "type": "multipleAttachments",
                        "options": {
                            "isReversed": true
                        },
                        "id": "fld7zfv25xdz8tEhq",
                        "name": "Attachments"
                    }
                ],
                "views": [
                    {
                        "id": "viw7rkwASdFG6nHv2",
                        "name": "All Updates",
                        "type": "grid"
                    }
                ]
            },
            {
                "id": "tblVzVm4oQ6TB5Lae",
                "name": "COVID Closures",
                "primaryFieldId": "fldi0iT8Q2N7j9Skk",
                "fields": [
                    {
                        "type": "formula",
                        "options": {
                            "isValid": true,
                            "formula": "{fld73VeazBVC78XBP}& \" - \" &{fldxcaEfM3ezfXT7l}",
                            "referencedFieldIds": [
                                "fld73VeazBVC78XBP",
                                "fldxcaEfM3ezfXT7l"
                            ],
                            "result": {
                                "type": "singleLineText"
                            }
                        },
                        "id": "fldi0iT8Q2N7j9Skk",
                        "name": "Name"
                    },
                    {
                        "type": "multilineText",
                        "id": "fldW0D6N1QmrtlGA1",
                        "name": "COVID Closures"
                    },
                    {
                        "type": "multipleSelects",
                        "options": {
                            "choices": [
                                {
                                    "id": "seloQKMTfBpcgW4BK",
                                    "name": "NE Route",
                                    "color": "redDark1"
                                },
                                {
                                    "id": "selpVle8o4aroqpXe",
                                    "name": "South Route",
                                    "color": "redBright"
                                },
                                {
                                    "id": "selUE3pG1m5re6Sy5",
                                    "name": "Perm. Onsite",
                                    "color": "redLight1"
                                },
                                {
                                    "id": "selY6XfOaTuCk5GhG",
                                    "name": "Temporary",
                                    "color": "redLight2"
                                },
                                {
                                    "id": "selsBNsWdKaUVw3RT",
                                    "name": "Fire Watch",
                                    "color": "yellowLight2"
                                },
                                {
                                    "id": "selGbAwuVWsyMJCp0",
                                    "name": "Seasonal (May through Sept)",
                                    "color": "orangeLight2"
                                },
                                {
                                    "id": "selSRN96q5LMO8tjm",
                                    "name": "NE Unlock",
                                    "color": "orangeLight2"
                                },
                                {
                                    "id": "seltmx5pUBlBwVWlR",
                                    "name": "All",
                                    "color": "redLight2"
                                },
                                {
                                    "id": "sel7sVKJ5U7xCt4Sx",
                                    "name": "All AOG Routes ",
                                    "color": "purpleLight2"
                                }
                            ]
                        },
                        "id": "fldOpvRpezmlwLwYF",
                        "name": "Route"
                    },
                    {
                        "type": "singleSelect",
                        "options": {
                            "choices": [
                                {
                                    "id": "selwEBkVCZKVTOrAc",
                                    "name": "Avalon",
                                    "color": "tealBright"
                                },
                                {
                                    "id": "selIHmJsEdZP00EQY",
                                    "name": "Essex",
                                    "color": "tealDark1"
                                },
                                {
                                    "id": "seljiN2zeA3jHZXxF",
                                    "name": "Private",
                                    "color": "purpleLight2"
                                },
                                {
                                    "id": "selR4kG3l0r4Kj452",
                                    "name": "AMC",
                                    "color": "tealLight2"
                                }
                            ]
                        },
                        "id": "fldxz3Zhr5KjIyuej",
                        "name": "PMC"
                    },
                    {
                        "type": "multipleSelects",
                        "options": {
                            "choices": [
                                {
                                    "id": "selIti5D9arCOTHuu",
                                    "name": "Fire Watch",
                                    "color": "blueLight2"
                                },
                                {
                                    "id": "selOo60HgEssJcxCn",
                                    "name": "Patrol Monthly",
                                    "color": "cyanBright"
                                },
                                {
                                    "id": "selMhh1hp3Wgp3Y5d",
                                    "name": "Perm. Onsite",
                                    "color": "yellowLight2"
                                },
                                {
                                    "id": "sel0B6bw8B2j0Z4mP",
                                    "name": "Seasonal",
                                    "color": "tealLight2"
                                },
                                {
                                    "id": "selXGWBjT4YLlYhPt",
                                    "name": "Temporary Onsite",
                                    "color": "cyanLight2"
                                }
                            ]
                        },
                        "id": "fldyACMGyv4BI3V7T",
                        "name": "Status"
                    },
                    {
                        "type": "singleLineText",
                        "id": "fld73VeazBVC78XBP",
                        "name": "AOG Property Code"
                    },
                    {
                        "type": "singleLineText",
                        "id": "fldxcaEfM3ezfXT7l",
                        "name": "Site Name"
                    }
                ],
                "views": [
                    {
                        "id": "viwEWB35oz4a3DslO",
                        "name": "All Customers - All Records",
                        "type": "grid"
                    },
                    {
                        "id": "viw6nBY9oKwEDeyI7",
                        "name": "South Route",
                        "type": "grid"
                    },
                    {
                        "id": "viwZjkke0ZGZNLmkr",
                        "name": "NE Route",
                        "type": "grid"
                    },
                    {
                        "id": "viw1StpC5ZdRYZxg7",
                        "name": "All data",
                        "type": "grid"
                    }
                ]
            },
            {
                "id": "tblYtM9Kwqwecipu3",
                "name": "Vehicle Tag/Tow",
                "primaryFieldId": "fldwWSK2mOU2WUKrp",
                "fields": [
                    {
                        "type": "dateTime",
                        "options": {
                            "dateFormat": {
                                "name": "local",
                                "format": "l"
                            },
                            "timeFormat": {
                                "name": "12hour",
                                "format": "h:mma"
                            },
                            "timeZone": "client"
                        },
                        "id": "fldwWSK2mOU2WUKrp",
                        "name": "Date of Tag/Tow"
                    },
                    {
                        "type": "singleSelect",
                        "options": {
                            "choices": [
                                {
                                    "id": "selTC5lR9CyVyphvP",
                                    "name": "Amber Schumaker "
                                },
                                {
                                    "id": "sel5SNrGfD5Soww0J",
                                    "name": "Matt Brugman "
                                },
                                {
                                    "id": "selPPlbmQLFipbhSX",
                                    "name": "Whitney Barkus"
                                },
                                {
                                    "id": "selKRCnOZHA81NENW",
                                    "name": "Hassan Mbwera"
                                },
                                {
                                    "id": "selC4gdrmtdTdj89X",
                                    "name": "Zakk Fjeldseth"
                                },
                                {
                                    "id": "selFigRtGtjLXGuGr",
                                    "name": "Carlos Williams"
                                },
                                {
                                    "id": "selT2oFsw7CCQLCvX",
                                    "name": "Charles Brown"
                                },
                                {
                                    "id": "selPQm5020OaoulUz",
                                    "name": "Zack Zesch"
                                },
                                {
                                    "id": "selmBF4tyqBPQvvpC",
                                    "name": "Zekiah Hurd-Thompson"
                                },
                                {
                                    "id": "sel898udaf9sF9dyW",
                                    "name": "Thomas Kosta"
                                },
                                {
                                    "id": "selc7KRQ4ZO4f4j68",
                                    "name": "Dan Gruver"
                                },
                                {
                                    "id": "selr89qJhXTRNs6eH",
                                    "name": "Marianne Cliff"
                                },
                                {
                                    "id": "selUJtFcGa0tKF9Zo",
                                    "name": "Nico Lang"
                                },
                                {
                                    "id": "selHjdGCHhdGf8XuN",
                                    "name": "Kazandra Torres"
                                },
                                {
                                    "id": "selWuM2Cmvwyu4GxZ",
                                    "name": "Hassan Mberwa"
                                },
                                {
                                    "id": "selsDRIWve5y9DtMt",
                                    "name": "Mohammad Tarin"
                                },
                                {
                                    "id": "sel8Ntr2so35lHntx",
                                    "name": "James Osborn"
                                },
                                {
                                    "id": "selzCbNhJpddNuBzr",
                                    "name": "Oscar Flores"
                                }
                            ]
                        },
                        "id": "fldUGsGCxKwCHegV7",
                        "name": "Officer name"
                    },
                    {
                        "type": "multipleSelects",
                        "options": {
                            "choices": [
                                {
                                    "id": "seldK33dNpxq9sRd5",
                                    "name": "Fire lane",
                                    "color": "yellowLight2"
                                },
                                {
                                    "id": "selKVS6R6L7REmMHn",
                                    "name": "Obstructing dumpster",
                                    "color": "cyanLight2"
                                },
                                {
                                    "id": "selyTkxcAbXOPzwuU",
                                    "name": "Obstructing Building",
                                    "color": "blueLight2"
                                },
                                {
                                    "id": "selct0DGlDFBtjoBv",
                                    "name": "Reserved  Space ",
                                    "color": "purpleLight2"
                                },
                                {
                                    "id": "selzYNlPZY0ExDf9f",
                                    "name": " Striped - No Parking Zone",
                                    "color": "grayLight2"
                                },
                                {
                                    "id": "selXMzsjL3nizH84t",
                                    "name": "Visitor Parking - No permit",
                                    "color": "blueLight2"
                                },
                                {
                                    "id": "sel277EAiaDd7ZZhS",
                                    "name": "Resident in Visitor Space ",
                                    "color": "cyanLight2"
                                },
                                {
                                    "id": "selecNLf1Ynpjzgve",
                                    "name": "Double Parked",
                                    "color": "greenLight2"
                                },
                                {
                                    "id": "selGkKnysmunAr8Al",
                                    "name": "Handicapped space w/o tags",
                                    "color": "blueLight2"
                                },
                                {
                                    "id": "selDGen8FmBRF8AKX",
                                    "name": "Overnight Parking ",
                                    "color": "redLight2"
                                },
                                {
                                    "id": "selSXNnR0MlyDZTeP",
                                    "name": "Improperly parked vehicle",
                                    "color": "yellowLight2"
                                }
                            ]
                        },
                        "id": "fldQnTYadQipq44VD",
                        "name": "Reason for Tag"
                    },
                    {
                        "type": "singleSelect",
                        "options": {
                            "choices": [
                                {
                                    "id": "selMNE4pJDTA5BouK",
                                    "name": "Tagged",
                                    "color": "greenLight2"
                                },
                                {
                                    "id": "selKqsiZPZuY2Rmh7",
                                    "name": "Towed",
                                    "color": "redLight2"
                                },
                                {
                                    "id": "selAuTnwhtgERUIVp",
                                    "name": "Spoke with owner",
                                    "color": "yellowLight2"
                                },
                                {
                                    "id": "selpyK1Eg6YdoJ0f1",
                                    "name": "No action could be taken",
                                    "color": "redLight2"
                                }
                            ]
                        },
                        "id": "fldOUhvRxDrX7pV35",
                        "name": "Tag or Tow?"
                    },
                    {
                        "type": "singleLineText",
                        "id": "fldVY7FJ1tvWwlkd0",
                        "name": "Vehicle Lic#"
                    },
                    {
                        "type": "singleSelect",
                        "options": {
                            "choices": [
                                {
                                    "id": "selTcnbj5mx9lWvKa",
                                    "name": "WA"
                                },
                                {
                                    "id": "selKyBo9UjOoamuaS",
                                    "name": "VA"
                                },
                                {
                                    "id": "selAFzKuwqqxL8jQ7",
                                    "name": "MT"
                                },
                                {
                                    "id": "selAkEf4xRn2HV8nd",
                                    "name": "OR"
                                },
                                {
                                    "id": "sel1fvgy9qo98b225",
                                    "name": "Ca"
                                },
                                {
                                    "id": "selYIAktsKlrrzAiz",
                                    "name": "TX"
                                },
                                {
                                    "id": "selD1RByuZT82PXvO",
                                    "name": "WI"
                                },
                                {
                                    "id": "selzh5yvbiSrjQ6Hy",
                                    "name": "UT"
                                },
                                {
                                    "id": "seloCgdPhxgjvBUpv",
                                    "name": "PA"
                                },
                                {
                                    "id": "selyWE7W3kzwRWSgj",
                                    "name": "SD"
                                },
                                {
                                    "id": "sel7EaXpLz4ifbWM3",
                                    "name": "AK"
                                },
                                {
                                    "id": "selbRM4MEWIsHcuCp",
                                    "name": "HI"
                                },
                                {
                                    "id": "selSUqIMqkCAG7KFB",
                                    "name": "No plates"
                                },
                                {
                                    "id": "selsCFhmxWNme6jwD",
                                    "name": "FL"
                                },
                                {
                                    "id": "selrf6q0O6IftfFo3",
                                    "name": "OTHER"
                                },
                                {
                                    "id": "selMQW75zPdeNJ6rM",
                                    "name": "Canada"
                                },
                                {
                                    "id": "selZoHdvGsLbyeBsf",
                                    "name": "AZ"
                                },
                                {
                                    "id": "selHCJ6nHFqfiw8Kw",
                                    "name": "Alberta"
                                },
                                {
                                    "id": "selmKgyvRSLkwaoVe",
                                    "name": "NV"
                                },
                                {
                                    "id": "selWBrE2qMSZ3FeET",
                                    "name": "ID"
                                },
                                {
                                    "id": "selfGmdyONKuW7UVc",
                                    "name": "OK"
                                },
                                {
                                    "id": "seliLP9lcBFZZEeji",
                                    "name": "MO"
                                },
                                {
                                    "id": "selIiYX1aanVnGwJn",
                                    "name": "MN"
                                }
                            ]
                        },
                        "id": "fldIp19ohsXrklnvp",
                        "name": "Lic plate state"
                    },
                    {
                        "type": "singleLineText",
                        "id": "fld39thaD5I9C4j0x",
                        "name": "Vehicle Make and Model"
                    },
                    {
                        "type": "singleSelect",
                        "options": {
                            "choices": [
                                {
                                    "id": "selrqAao450XFFblu",
                                    "name": "Silver",
                                    "color": "grayLight2"
                                },
                                {
                                    "id": "sel16wJMaQC2MpeSB",
                                    "name": "White",
                                    "color": "grayLight2"
                                },
                                {
                                    "id": "seljzupSr5Lv48p9Z",
                                    "name": "Red",
                                    "color": "redLight2"
                                },
                                {
                                    "id": "sel789zjckJm0nKPr",
                                    "name": "Green",
                                    "color": "greenLight2"
                                },
                                {
                                    "id": "selDAtDAz0GkrLMj0",
                                    "name": "Blue",
                                    "color": "cyanLight2"
                                },
                                {
                                    "id": "sel8gPOcljhJ7eC17",
                                    "name": "Gold",
                                    "color": "yellowLight2"
                                },
                                {
                                    "id": "selkMKenJSp51zrFb",
                                    "name": "Black",
                                    "color": "grayLight2"
                                },
                                {
                                    "id": "sel4mE4ltv0aIXC26",
                                    "name": "Dark Silver",
                                    "color": "cyanLight2"
                                },
                                {
                                    "id": "selfwK4wHyY0ShG9t",
                                    "name": "Yellow",
                                    "color": "greenLight2"
                                },
                                {
                                    "id": "selxlCFAS6q7bR6fK",
                                    "name": "Gray",
                                    "color": "grayLight2"
                                },
                                {
                                    "id": "selMhjI4pfrOGaVPg",
                                    "name": "Brown ",
                                    "color": "blueLight2"
                                }
                            ]
                        },
                        "id": "fldzWzOks6SCt16hK",
                        "name": "Car color"
                    },
                    {
                        "type": "multipleRecordLinks",
                        "options": {
                            "linkedTableId": "tblHGGYQmrZWotYol",
                            "isReversed": true,
                            "prefersSingleRecordLink": true,
                            "inverseLinkFieldId": "fldpNRVHU8kiyNRaU"
                        },
                        "id": "fldoBbbrOozysOqfv",
                        "name": "Property Code"
                    },
                    {
                        "type": "multipleAttachments",
                        "options": {
                            "isReversed": true
                        },
                        "id": "fldUheWh03WrE3sRs",
                        "name": "Pic"
                    },
                    {
                        "type": "multilineText",
                        "id": "fld6rBarHv9jDhkXm",
                        "name": "Other notes"
                    },
                    {
                        "type": "multipleAttachments",
                        "options": {
                            "isReversed": false
                        },
                        "id": "fldBpM4a25mhuHoOr",
                        "name": "Incident Report Picture"
                    }
                ],
                "views": [
                    {
                        "id": "viwCMcCpmn5r5yVdv",
                        "name": "All Vehicle Tag/Tows",
                        "type": "grid"
                    }
                ]
            },
            {
                "id": "tblRjQcYObPbjSzcc",
                "name": "Calls to Dispatch",
                "primaryFieldId": "fldxlpuFva49WPcmu",
                "fields": [
                    {
                        "type": "singleLineText",
                        "id": "fldxlpuFva49WPcmu",
                        "name": "Unit Number",
                        "description": "CALLERS Unit Number (THIS MUST BE ON YOUR REPORT)"
                    },
                    {
                        "type": "multipleRecordLinks",
                        "options": {
                            "linkedTableId": "tblHGGYQmrZWotYol",
                            "isReversed": true,
                            "prefersSingleRecordLink": true,
                            "inverseLinkFieldId": "fldGxkGUdiLDFLdEH"
                        },
                        "id": "fldPlMZcBJwqADVYY",
                        "name": "Property Code"
                    },
                    {
                        "type": "dateTime",
                        "options": {
                            "dateFormat": {
                                "name": "local",
                                "format": "l"
                            },
                            "timeFormat": {
                                "name": "12hour",
                                "format": "h:mma"
                            },
                            "timeZone": "client"
                        },
                        "id": "fldaYB4YWRFGfXnS7",
                        "name": "Time of Call"
                    },
                    {
                        "type": "singleLineText",
                        "id": "fldVYQ5ZAFKTI0mtA",
                        "name": "Offending Unit #"
                    },
                    {
                        "type": "singleLineText",
                        "id": "fldtc3XwOWNxzQXDU",
                        "name": "Name of caller"
                    },
                    {
                        "type": "multilineText",
                        "id": "flds6nKw7ESRnem4a",
                        "name": "Reason for the customer's call"
                    },
                    {
                        "type": "singleSelect",
                        "options": {
                            "choices": [
                                {
                                    "id": "sel7Fk7IN571qmNIV",
                                    "name": "Onsite Officer",
                                    "color": "purpleLight2"
                                },
                                {
                                    "id": "selFCVp6eig90S3pB",
                                    "name": "Nikkie Schumaker ",
                                    "color": "blueLight2"
                                },
                                {
                                    "id": "selGXufgmibFBskIE",
                                    "name": "Matt Brugman",
                                    "color": "cyanLight2"
                                },
                                {
                                    "id": "seluKYFIItwPd9FUt",
                                    "name": "Zakk Fjeldseth",
                                    "color": "grayLight2"
                                },
                                {
                                    "id": "selBZ3mxF1sgeqKfd",
                                    "name": "Carlos Williams",
                                    "color": "blueLight2"
                                },
                                {
                                    "id": "selKKUOZASIFg0qRm",
                                    "name": "Zack Zesch",
                                    "color": "yellowLight2"
                                },
                                {
                                    "id": "selzc6I3WCJTJyjwg",
                                    "name": "Zekiah Hurd-Thompson",
                                    "color": "greenLight2"
                                },
                                {
                                    "id": "selIMIGWtatpOg6Sx",
                                    "name": "Thomas Kosta ",
                                    "color": "yellowLight2"
                                },
                                {
                                    "id": "selNrQB3LjrZV3evH",
                                    "name": "Brad Hart",
                                    "color": "blueLight1"
                                },
                                {
                                    "id": "selO1iRk3Y8f9Gzmt",
                                    "name": "Marianne Cliff",
                                    "color": "tealLight2"
                                },
                                {
                                    "id": "sel9llaRK6rFZ92DE",
                                    "name": "Nasteho Mohamed",
                                    "color": "purpleLight2"
                                },
                                {
                                    "id": "sele4Y5tFqeO75HWq",
                                    "name": "Nico Lang",
                                    "color": "redLight2"
                                },
                                {
                                    "id": "selJ5ktDlmHUuArIY",
                                    "name": "Kazandra Torres",
                                    "color": "tealLight1"
                                },
                                {
                                    "id": "seltLzcqPd3CeksbL",
                                    "name": "EAST ROUTE",
                                    "color": "orangeLight2"
                                },
                                {
                                    "id": "selUYjt5chjhLiyXc",
                                    "name": "Thomas Ayalew",
                                    "color": "redLight2"
                                },
                                {
                                    "id": "selcYXXXdm6AobeDM",
                                    "name": "Hassan Mberwa",
                                    "color": "pinkLight2"
                                },
                                {
                                    "id": "selO81fUXwzJ6BNRQ",
                                    "name": "Draven Mosher",
                                    "color": "cyanLight1"
                                },
                                {
                                    "id": "selKIMJADDs0w6S6u",
                                    "name": "Mohammad Tarin",
                                    "color": "greenLight1"
                                },
                                {
                                    "id": "selWunizhdcbMV4dH",
                                    "name": "Oscar Flores",
                                    "color": "yellowLight1"
                                },
                                {
                                    "id": "selpKACaW8OFNbq60",
                                    "name": "James Obsborn",
                                    "color": "orangeLight1"
                                }
                            ]
                        },
                        "id": "fldb7Kmxoy0eG12aU",
                        "name": "Responding Officer"
                    },
                    {
                        "type": "dateTime",
                        "options": {
                            "dateFormat": {
                                "name": "local",
                                "format": "l"
                            },
                            "timeFormat": {
                                "name": "12hour",
                                "format": "h:mma"
                            },
                            "timeZone": "client"
                        },
                        "id": "fldv6qdJEglGv8z0E",
                        "name": "Time of resolution"
                    },
                    {
                        "type": "multilineText",
                        "id": "fld2I6CivXHQH01Nq",
                        "name": "Resolution"
                    },
                    {
                        "type": "singleSelect",
                        "options": {
                            "choices": [
                                {
                                    "id": "seliTjJEFNwyBCPvM",
                                    "name": "Nikkie Schumaker",
                                    "color": "blueLight2"
                                },
                                {
                                    "id": "selgJDdWIi5qGFYoV",
                                    "name": "Matt Brugman",
                                    "color": "redLight2"
                                },
                                {
                                    "id": "sel07BllMtt2Chfuv",
                                    "name": "Hassan Mbwera",
                                    "color": "redLight2"
                                },
                                {
                                    "id": "selj1WD1T0Br7Hlc1",
                                    "name": "Zakk Fjeldseth",
                                    "color": "pinkLight2"
                                },
                                {
                                    "id": "selStjwZaqksN3Q6Q",
                                    "name": "Zack Zesch",
                                    "color": "cyanLight2"
                                },
                                {
                                    "id": "sele5LPHlSw0qr9I2",
                                    "name": "Zekiah Hurd-Thompson",
                                    "color": "tealLight2"
                                },
                                {
                                    "id": "seldeu08NDgDFux3W",
                                    "name": "Thomas Kosta",
                                    "color": "redLight2"
                                },
                                {
                                    "id": "sellKqqBSqbl6njdZ",
                                    "name": "Brad Hart",
                                    "color": "greenLight2"
                                },
                                {
                                    "id": "selFmuywAQTC210eT",
                                    "name": "David Polanco",
                                    "color": "yellowLight2"
                                },
                                {
                                    "id": "selsQkYFSFFOYghKw",
                                    "name": "Jevvan Cameron",
                                    "color": "orangeLight2"
                                },
                                {
                                    "id": "selsZBEJxpR201HfV",
                                    "name": "Nasteho Mohamed",
                                    "color": "purpleLight2"
                                },
                                {
                                    "id": "selc9Pe5J69W2cqY2",
                                    "name": "Kazandra Torres",
                                    "color": "grayLight2"
                                },
                                {
                                    "id": "seltKYxdfifZxVZvJ",
                                    "name": "Nico Lang",
                                    "color": "blueLight1"
                                }
                            ]
                        },
                        "id": "fldUrgzlU0zmVoHZc",
                        "name": "Dispatch Officer"
                    },
                    {
                        "type": "multipleAttachments",
                        "options": {
                            "isReversed": true
                        },
                        "id": "fld0vXIR8D0Zi4svV",
                        "name": "Pictures"
                    },
                    {
                        "type": "multipleAttachments",
                        "options": {
                            "isReversed": false
                        },
                        "id": "fldd1fJ8tyHGKD3L1",
                        "name": "Incident Report Picture"
                    },
                    {
                        "type": "multilineText",
                        "id": "fldCkdy96BbfxviW3",
                        "name": "Internal Note"
                    }
                ],
                "views": [
                    {
                        "id": "viwn9YGyvhR45LYfm",
                        "name": "All Resident Calls",
                        "type": "grid"
                    }
                ]
            },
            {
                "id": "tbllw2foIlhECloes",
                "name": "Incident Reports and Observations",
                "primaryFieldId": "fld1yBx5pkwCfi1oK",
                "fields": [
                    {
                        "type": "formula",
                        "options": {
                            "isValid": true,
                            "formula": "{fldjyY2CvTYTT6K0e}",
                            "referencedFieldIds": [
                                "fldjyY2CvTYTT6K0e"
                            ],
                            "result": {
                                "type": "singleLineText"
                            }
                        },
                        "id": "fld1yBx5pkwCfi1oK",
                        "name": "Record Code"
                    },
                    {
                        "type": "multipleRecordLinks",
                        "options": {
                            "linkedTableId": "tblHGGYQmrZWotYol",
                            "isReversed": true,
                            "prefersSingleRecordLink": true,
                            "inverseLinkFieldId": "fldaKwJk7sd6Ye2GX"
                        },
                        "id": "fldjyY2CvTYTT6K0e",
                        "name": "Property Code"
                    },
                    {
                        "type": "dateTime",
                        "options": {
                            "dateFormat": {
                                "name": "local",
                                "format": "l"
                            },
                            "timeFormat": {
                                "name": "12hour",
                                "format": "h:mma"
                            },
                            "timeZone": "client"
                        },
                        "id": "fldEbN7oQ179yqcUn",
                        "name": "Date and Time of Incident"
                    },
                    {
                        "type": "singleSelect",
                        "options": {
                            "choices": [
                                {
                                    "id": "sel9P7sw8sICjlSrR",
                                    "name": "Nikkie Schumaker ",
                                    "color": "blueLight2"
                                },
                                {
                                    "id": "selAQeAJtxWxLSZAM",
                                    "name": "Matt Brugman",
                                    "color": "yellowLight2"
                                },
                                {
                                    "id": "selHgiVwsa0pQp9g1",
                                    "name": "Whitney Barkus",
                                    "color": "redLight2"
                                },
                                {
                                    "id": "selP0py6JfqD0027G",
                                    "name": "Hassan Mbwera",
                                    "color": "purpleLight2"
                                },
                                {
                                    "id": "selAp9ie1pVLa1K3w",
                                    "name": "Zakk Fjeldseth",
                                    "color": "pinkLight2"
                                },
                                {
                                    "id": "seluWgM25q5wvkOGD",
                                    "name": "Carlos Williams",
                                    "color": "grayLight2"
                                },
                                {
                                    "id": "selZBFYFaDa2xqR46",
                                    "name": "Zack Zesch",
                                    "color": "tealLight2"
                                },
                                {
                                    "id": "sel4mItmWkXWUUOKI",
                                    "name": "Charles Brown",
                                    "color": "greenLight2"
                                },
                                {
                                    "id": "selu4PCQbkU4b4bxr",
                                    "name": "Zekiah Hurd-Thompson",
                                    "color": "cyanLight2"
                                },
                                {
                                    "id": "selTXiB0GRRrj8h6j",
                                    "name": "Thomas Kosta",
                                    "color": "redLight2"
                                },
                                {
                                    "id": "sel7igzBNhKp5LpUu",
                                    "name": "Dan Gruver ",
                                    "color": "pinkLight2"
                                },
                                {
                                    "id": "selyOaLR6KBDqUatC",
                                    "name": "Marianne Cliff",
                                    "color": "orangeLight2"
                                },
                                {
                                    "id": "sel7kduDU3UOMNkmi",
                                    "name": "Brad Hart",
                                    "color": "redLight2"
                                },
                                {
                                    "id": "seltCcBb3mAp9x3NM",
                                    "name": "David Polanco",
                                    "color": "pinkLight2"
                                },
                                {
                                    "id": "selCBtPTmAYQsS6uY",
                                    "name": "Nico Lang",
                                    "color": "blueLight1"
                                },
                                {
                                    "id": "selNcgOimLfuw0SQT",
                                    "name": "Kazandra Torres",
                                    "color": "cyanLight1"
                                },
                                {
                                    "id": "sel1TzNAJtjdYlyKf",
                                    "name": "Hassan Mberwa ",
                                    "color": "tealLight1"
                                },
                                {
                                    "id": "selXO8lcLPTdkgQk5",
                                    "name": "Draven Mosher",
                                    "color": "greenLight1"
                                },
                                {
                                    "id": "selU8Q8nItoXhchcT",
                                    "name": "Mohammad Tarin",
                                    "color": "yellowLight1"
                                },
                                {
                                    "id": "selOY5IzigyIw7KIY",
                                    "name": "James Osborn",
                                    "color": "orangeLight1"
                                },
                                {
                                    "id": "selurQaqV6Rqvpig2",
                                    "name": "Oscar Flores",
                                    "color": "redLight1"
                                }
                            ]
                        },
                        "id": "fldFkWpXiIsHZuRca",
                        "name": "Reporting Officer"
                    },
                    {
                        "type": "multilineText",
                        "id": "fldwViFIp79j0tQPG",
                        "name": "Description of incident or observation"
                    },
                    {
                        "type": "multipleAttachments",
                        "options": {
                            "isReversed": true
                        },
                        "id": "flde1FfUJHh4hnaK3",
                        "name": "Picture or other attachment if needed"
                    },
                    {
                        "type": "multilineText",
                        "id": "fld61fCMOzJDE1zp4",
                        "name": "Internal Note"
                    },
                    {
                        "type": "multilineText",
                        "id": "fldpXGIKNHhTtskF0",
                        "name": "Management Follow up"
                    },
                    {
                        "type": "multipleAttachments",
                        "options": {
                            "isReversed": false
                        },
                        "id": "fldYjqTjc4nblc4Aq",
                        "name": "Incident Report Picture",
                        "description": "picture of PAPER report (if used)"
                    }
                ],
                "views": [
                    {
                        "id": "viwRmaJYprjxoeNhC",
                        "name": "All Incident Reports",
                        "type": "grid"
                    },
                    {
                        "id": "viw0N0YgBO4UsdtBH",
                        "name": "Grid 2",
                        "type": "grid"
                    },
                    {
                        "id": "viwtdFrJG4tDo6eql",
                        "name": "182",
                        "type": "grid"
                    },
                    {
                        "id": "viw5AKEl0KpfTCUPA",
                        "name": "Grid 3",
                        "type": "grid"
                    }
                ]
            },
            {
                "id": "tblL5huaGiVN3BLS6",
                "name": "Dispatch Summary",
                "primaryFieldId": "fld1E3yQvykUysUBh",
                "fields": [
                    {
                        "type": "date",
                        "options": {
                            "dateFormat": {
                                "name": "local",
                                "format": "l"
                            }
                        },
                        "id": "fld1E3yQvykUysUBh",
                        "name": "Date of Shift Start"
                    },
                    {
                        "type": "singleSelect",
                        "options": {
                            "choices": [
                                {
                                    "id": "sel07zNIU9gD471lZ",
                                    "name": "Amber Schumaker",
                                    "color": "blueLight2"
                                },
                                {
                                    "id": "selCNilIRjLQBmIhz",
                                    "name": "Whitney Barkus",
                                    "color": "purpleLight2"
                                },
                                {
                                    "id": "selslZTaKXef9ZdP2",
                                    "name": "Charles Brown",
                                    "color": "yellowLight2"
                                },
                                {
                                    "id": "selFhGoUZHsVr7FoK",
                                    "name": "Hassan Mberwa",
                                    "color": "grayLight2"
                                },
                                {
                                    "id": "selKUmtNekuZPiipy",
                                    "name": "Zakk Fjeldseth",
                                    "color": "cyanLight2"
                                },
                                {
                                    "id": "selaWsCv1U4tEP4aO",
                                    "name": "Zack Zesch",
                                    "color": "tealLight2"
                                },
                                {
                                    "id": "seleAWNwJabC9LnzX",
                                    "name": "Carlos Williams",
                                    "color": "greenLight2"
                                },
                                {
                                    "id": "selGtQaKIQnmRubmk",
                                    "name": "Zekiah Hurd-Thompson",
                                    "color": "orangeLight2"
                                },
                                {
                                    "id": "seleK5wzHhrhLdHoh",
                                    "name": "Thomas Kosta",
                                    "color": "grayLight2"
                                },
                                {
                                    "id": "selgVeb4ONuUIz6ic",
                                    "name": "Dan Gruver ",
                                    "color": "blueLight1"
                                },
                                {
                                    "id": "selLQJXoFMCA46Bil",
                                    "name": "Brad Hart",
                                    "color": "redLight2"
                                },
                                {
                                    "id": "selRrpXlvbocFv123",
                                    "name": "David Polanco",
                                    "color": "pinkLight2"
                                },
                                {
                                    "id": "selHtOxuQvqgb2sPo",
                                    "name": "Jevvan Cameron",
                                    "color": "cyanLight1"
                                },
                                {
                                    "id": "selIV0ghFJfwYahAA",
                                    "name": "Nasteho Mohamed",
                                    "color": "greenLight2"
                                },
                                {
                                    "id": "sel5NNvMg7DWCIk9j",
                                    "name": "Kazandra Torres",
                                    "color": "tealLight1"
                                },
                                {
                                    "id": "selFF05VuiMixKXQM",
                                    "name": "Nico Lang",
                                    "color": "greenLight1"
                                }
                            ]
                        },
                        "id": "fld0w9stBnKTrQ57t",
                        "name": "Dispatch Officer"
                    },
                    {
                        "type": "multilineText",
                        "id": "fldixP2PPfN4otHxr",
                        "name": "Notes"
                    },
                    {
                        "type": "multipleAttachments",
                        "options": {
                            "isReversed": true
                        },
                        "id": "fldk6VhifzbMdOcP9",
                        "name": "Attachments"
                    },
                    {
                        "type": "singleLineText",
                        "id": "fldAz6PzRhShNXg7h",
                        "name": "Field 5"
                    }
                ],
                "views": [
                    {
                        "id": "viwFLdGOzrxYyNeHZ",
                        "name": "Grid view",
                        "type": "grid"
                    }
                ]
            },
            {
                "id": "tblHGGYQmrZWotYol",
                "name": "All Properties",
                "primaryFieldId": "fld473vUODGa6x5yr",
                "fields": [
                    {
                        "type": "formula",
                        "options": {
                            "isValid": true,
                            "formula": "{fldTaGQWxcOFUwaPW}& \" - \" &{fldjjVg1KE7C2l6ls}",
                            "referencedFieldIds": [
                                "fldTaGQWxcOFUwaPW",
                                "fldjjVg1KE7C2l6ls"
                            ],
                            "result": {
                                "type": "singleLineText"
                            }
                        },
                        "id": "fld473vUODGa6x5yr",
                        "name": "Name"
                    },
                    {
                        "type": "multipleSelects",
                        "options": {
                            "choices": [
                                {
                                    "id": "selaXvoFdcif3khPR",
                                    "name": "NE Route",
                                    "color": "redDark1"
                                },
                                {
                                    "id": "selb26QUmF3ubOCbl",
                                    "name": "South Route",
                                    "color": "redBright"
                                },
                                {
                                    "id": "selGLO1sZXYu1u5Mc",
                                    "name": "Perm. Onsite",
                                    "color": "redLight1"
                                },
                                {
                                    "id": "selKdIRA8unF7tTvN",
                                    "name": "Temporary",
                                    "color": "redLight2"
                                },
                                {
                                    "id": "seleIy4Ibl3XIUg50",
                                    "name": "Fire Watch",
                                    "color": "yellowLight2"
                                },
                                {
                                    "id": "selsil8gTxlBz7PD7",
                                    "name": "Seasonal (May through Sept)",
                                    "color": "orangeLight2"
                                },
                                {
                                    "id": "selEYyLSoGEPBwGxt",
                                    "name": "NE Unlock",
                                    "color": "orangeLight2"
                                },
                                {
                                    "id": "selftiHbSceEjj9zY",
                                    "name": "All",
                                    "color": "redLight2"
                                },
                                {
                                    "id": "selTzGmv3v0ApRh6E",
                                    "name": "All AOG Routes ",
                                    "color": "purpleLight2"
                                },
                                {
                                    "id": "selgPudrsm5SprNJ6",
                                    "name": "Avalon only",
                                    "color": "cyanLight2"
                                },
                                {
                                    "id": "sel8fXIhjjonzJRmm",
                                    "name": "Temp Onsite",
                                    "color": "redLight2"
                                },
                                {
                                    "id": "selpQtPCcRyRsXqvg",
                                    "name": "Bellevue Community Officer",
                                    "color": "blueLight2"
                                },
                                {
                                    "id": "selyAJ7AyGtBHJfeE",
                                    "name": "Esterra Park Community Officer",
                                    "color": "pinkLight2"
                                },
                                {
                                    "id": "selWtgKSGo6HfnMGC",
                                    "name": "287 Community Officer",
                                    "color": "yellowLight1"
                                },
                                {
                                    "id": "seleyy7p7okLqEDzJ",
                                    "name": "182 Bellevue Officer",
                                    "color": "greenLight1"
                                },
                                {
                                    "id": "selDGpTco782cS8XZ",
                                    "name": "182 Bellevue Community Officer",
                                    "color": "cyanBright"
                                },
                                {
                                    "id": "seldsOxOICeTAUCmu",
                                    "name": "terminated",
                                    "color": "orangeDark1"
                                },
                                {
                                    "id": "selYOhHQm9NKhjbCv",
                                    "name": "East Route",
                                    "color": "orangeLight1"
                                }
                            ]
                        },
                        "id": "fldAwgtbcafoj9JcM",
                        "name": "Route"
                    },
                    {
                        "type": "multipleSelects",
                        "options": {
                            "choices": [
                                {
                                    "id": "seluA3Hp7LkFBhUIB",
                                    "name": "Fire Watch",
                                    "color": "blueLight2"
                                },
                                {
                                    "id": "selAvRCteflvwAKQu",
                                    "name": "Patrol Monthly",
                                    "color": "cyanBright"
                                },
                                {
                                    "id": "selyo2D3nEPjcrbjk",
                                    "name": "Perm. Onsite",
                                    "color": "yellowLight2"
                                },
                                {
                                    "id": "selMIRNi6cVmNnhAW",
                                    "name": "Seasonal",
                                    "color": "tealLight2"
                                },
                                {
                                    "id": "selJNHd5RFRO8mu3A",
                                    "name": "Temporary Onsite",
                                    "color": "cyanLight2"
                                },
                                {
                                    "id": "selMSwHE73TX10N9R",
                                    "name": "Temporary Patrol",
                                    "color": "cyanLight2"
                                },
                                {
                                    "id": "selDFqUjEsdRlqR3g",
                                    "name": "Role only",
                                    "color": "redLight1"
                                },
                                {
                                    "id": "selCSmpwmYG3luUTt",
                                    "name": "Dispatch Only",
                                    "color": "grayLight2"
                                },
                                {
                                    "id": "seluVMEDooQh8VNMF",
                                    "name": "Terminated",
                                    "color": "yellowDark1"
                                }
                            ]
                        },
                        "id": "fldkHnosw6XEvr8l0",
                        "name": "Status"
                    },
                    {
                        "type": "singleLineText",
                        "id": "fldTaGQWxcOFUwaPW",
                        "name": "AOG Property Code"
                    },
                    {
                        "type": "singleSelect",
                        "options": {
                            "choices": [
                                {
                                    "id": "seliLmWHAADYGcEOj",
                                    "name": "Avalon",
                                    "color": "tealBright"
                                },
                                {
                                    "id": "seluO7leCOSSNoR45",
                                    "name": "Essex",
                                    "color": "tealDark1"
                                },
                                {
                                    "id": "sel5pyElcbWmunaLM",
                                    "name": "Private",
                                    "color": "purpleLight2"
                                },
                                {
                                    "id": "selDb5iPjBk7xHhj9",
                                    "name": "AMC",
                                    "color": "tealLight2"
                                },
                                {
                                    "id": "sel81TrLiduczGmhG",
                                    "name": "NONE",
                                    "color": "pinkLight2"
                                },
                                {
                                    "id": "sel9fxbXolQ5qsfCo",
                                    "name": "Urban Self Storage",
                                    "color": "grayLight2"
                                },
                                {
                                    "id": "selM15C09ARN6WbTR",
                                    "name": "Allied",
                                    "color": "cyanLight2"
                                },
                                {
                                    "id": "selBaVwROdWsTt9Ih",
                                    "name": "Lincoln Property Company",
                                    "color": "tealLight2"
                                },
                                {
                                    "id": "selVpKPv8I8oThbc6",
                                    "name": "Avenue 5",
                                    "color": "tealLight2"
                                },
                                {
                                    "id": "selV6HxDRIfeYwwRG",
                                    "name": "SummerHill",
                                    "color": "tealLight2"
                                },
                                {
                                    "id": "selIyzCjOCwEAu402",
                                    "name": "GreyStar",
                                    "color": "blueLight2"
                                },
                                {
                                    "id": "selyAKkcM6mzwjII7",
                                    "name": "Azose",
                                    "color": "redLight2"
                                },
                                {
                                    "id": "selWsvkxu6qqgaOyA",
                                    "name": "FPI",
                                    "color": "greenLight2"
                                },
                                {
                                    "id": "selpwcMmIKwlBPHey",
                                    "name": "NW Building LLC",
                                    "color": "yellowLight2"
                                },
                                {
                                    "id": "sel2fgIky8PcoZud9",
                                    "name": "Inland Construction",
                                    "color": "orangeLight2"
                                },
                                {
                                    "id": "sel8GVN2nTWEcNPMr",
                                    "name": "Exxel",
                                    "color": "grayBright"
                                },
                                {
                                    "id": "selMG9Kg2fxSbl9ot",
                                    "name": "Ram Parnters",
                                    "color": "greenBright"
                                },
                                {
                                    "id": "sel8g8bDixV33Oci6",
                                    "name": "SRM",
                                    "color": "blueBright"
                                },
                                {
                                    "id": "selSI3mD6Z1p6nhCe",
                                    "name": "April Housing",
                                    "color": "grayDark1"
                                }
                            ]
                        },
                        "id": "fldjGOB3pGDmvWHsq",
                        "name": "PMC"
                    },
                    {
                        "type": "multipleRecordLinks",
                        "options": {
                            "linkedTableId": "tblRjQcYObPbjSzcc",
                            "isReversed": true,
                            "prefersSingleRecordLink": false,
                            "inverseLinkFieldId": "fldPlMZcBJwqADVYY"
                        },
                        "id": "fldGxkGUdiLDFLdEH",
                        "name": "Calls"
                    },
                    {
                        "type": "multipleRecordLinks",
                        "options": {
                            "linkedTableId": "tblYtM9Kwqwecipu3",
                            "isReversed": true,
                            "prefersSingleRecordLink": false,
                            "inverseLinkFieldId": "fldoBbbrOozysOqfv"
                        },
                        "id": "fldpNRVHU8kiyNRaU",
                        "name": "Tagging Vehicles"
                    },
                    {
                        "type": "multipleSelects",
                        "options": {
                            "choices": [
                                {
                                    "id": "seliVHn5ippA0wZDo",
                                    "name": "Nightly Report",
                                    "color": "blueLight2"
                                },
                                {
                                    "id": "selEfz5ruLtcSJPTt",
                                    "name": "Patrol",
                                    "color": "cyanLight2"
                                },
                                {
                                    "id": "selJLjj2KvRTbDnsP",
                                    "name": "Lock Up",
                                    "color": "tealLight2"
                                },
                                {
                                    "id": "sel1QzJnpWJ01VrU1",
                                    "name": "UNLOCK",
                                    "color": "greenLight2"
                                },
                                {
                                    "id": "selp21gWH3e6PCBWV",
                                    "name": "Hardcheck",
                                    "color": "yellowLight2"
                                },
                                {
                                    "id": "selq6Egk9V3VvDYAB",
                                    "name": "Clear Cabana",
                                    "color": "grayLight2"
                                },
                                {
                                    "id": "seleU64wa7pSbARS8",
                                    "name": "Foot Patrol",
                                    "color": "purpleLight2"
                                }
                            ]
                        },
                        "id": "fldSfTYeKpNWsxd5m",
                        "name": "NE Route Orders"
                    },
                    {
                        "type": "singleLineText",
                        "id": "fldjjVg1KE7C2l6ls",
                        "name": "Site Name"
                    },
                    {
                        "type": "multipleRecordLinks",
                        "options": {
                            "linkedTableId": "tbllw2foIlhECloes",
                            "isReversed": true,
                            "prefersSingleRecordLink": false,
                            "inverseLinkFieldId": "fldjyY2CvTYTT6K0e"
                        },
                        "id": "fldaKwJk7sd6Ye2GX",
                        "name": "Calls copy"
                    },
                    {
                        "type": "multipleRecordLinks",
                        "options": {
                            "linkedTableId": "tblA4Nca5jJeFMYAN",
                            "isReversed": true,
                            "prefersSingleRecordLink": false,
                            "inverseLinkFieldId": "fldqOMnyftfQoeeRb"
                        },
                        "id": "fldSxOLPuUHiB3kWK",
                        "name": "Property Updates"
                    },
                    {
                        "type": "singleLineText",
                        "id": "fldI7oIzZrfugJTO8",
                        "name": "COVID Closures"
                    },
                    {
                        "type": "singleLineText",
                        "id": "fldvAyBge13jxihPv",
                        "name": "Table 8"
                    },
                    {
                        "type": "multipleAttachments",
                        "options": {
                            "isReversed": false
                        },
                        "id": "fldTU9FDyt3rd3gRq",
                        "name": "Post Orders"
                    },
                    {
                        "type": "multipleAttachments",
                        "options": {
                            "isReversed": false
                        },
                        "id": "fldC0qVpbJy7pS10n",
                        "name": "Sample Report"
                    },
                    {
                        "type": "singleLineText",
                        "id": "fldwOz8quVKpOF79F",
                        "name": "Site Address"
                    },
                    {
                        "type": "url",
                        "id": "fldbUdIZctCNoGPTW",
                        "name": "Google Maps"
                    },
                    {
                        "type": "singleLineText",
                        "id": "fldOuTc3Gy1s0jhn9",
                        "name": "Fast Field Username"
                    },
                    {
                        "type": "singleLineText",
                        "id": "fld3Bbrch6SF0zeX0",
                        "name": "Fast Field Password"
                    },
                    {
                        "type": "checkbox",
                        "options": {
                            "icon": "check",
                            "color": "greenBright"
                        },
                        "id": "fld9QZrgnQkp5H98n",
                        "name": "Active"
                    },
                    {
                        "type": "multipleRecordLinks",
                        "options": {
                            "linkedTableId": "tblAXT4xRAfAZFpau",
                            "isReversed": false,
                            "prefersSingleRecordLink": false,
                            "inverseLinkFieldId": "fldY6GiJKKabqtT09"
                        },
                        "id": "fldjiFPXSBURpnAcj",
                        "name": "Assigned Job Role"
                    },
                    {
                        "type": "manualSort",
                        "id": "fldvWmn9HeHs7xviJ",
                        "name": "Manual sort"
                    }
                ],
                "views": [
                    {
                        "id": "viwSumAVmlpHqCLWe",
                        "name": "South Route",
                        "type": "grid"
                    },
                    {
                        "id": "viwLq5W0YAz2A9zyy",
                        "name": "NE Route",
                        "type": "grid"
                    },
                    {
                        "id": "viwq3mFRmaXdQ1FzV",
                        "name": "All Customers - All Records",
                        "type": "grid"
                    },
                    {
                        "id": "viwNZe1o3A6ULnKue",
                        "name": "All data",
                        "type": "grid"
                    },
                    {
                        "id": "viwf9iwSTnhKbcjhl",
                        "name": "Dispatch View",
                        "type": "grid"
                    },
                    {
                        "id": "viwB2SYHZADcz5KDk",
                        "name": "Job Assignments View",
                        "type": "grid"
                    }
                ]
            },
            {
                "id": "tblAXT4xRAfAZFpau",
                "name": "Job Assignments",
                "primaryFieldId": "fldvk4vKJKONeXfnC",
                "fields": [
                    {
                        "type": "singleLineText",
                        "id": "fldvk4vKJKONeXfnC",
                        "name": "Job Role Name"
                    },
                    {
                        "type": "multipleRecordLinks",
                        "options": {
                            "linkedTableId": "tblHGGYQmrZWotYol",
                            "isReversed": false,
                            "prefersSingleRecordLink": false,
                            "inverseLinkFieldId": "fldjiFPXSBURpnAcj"
                        },
                        "id": "fldY6GiJKKabqtT09",
                        "name": "Post Orders"
                    },
                    {
                        "type": "multipleAttachments",
                        "options": {
                            "isReversed": false
                        },
                        "id": "fldzRmHkfKD89DpO9",
                        "name": "Job Role Documents"
                    },
                    {
                        "type": "multilineText",
                        "id": "fldpZpOHcob7tE4AB",
                        "name": "Notes"
                    },
                    {
                        "type": "checkbox",
                        "options": {
                            "icon": "check",
                            "color": "greenBright"
                        },
                        "id": "fldUURJ6eZXz4iZlN",
                        "name": "Active"
                    },
                    {
                        "type": "singleLineText",
                        "id": "fldhbaUw9qvr1hHCF",
                        "name": "Start of shift address"
                    },
                    {
                        "type": "url",
                        "id": "fldC94UMXVSRMolup",
                        "name": "Start of Shift Google Maps location"
                    },
                    {
                        "type": "multipleAttachments",
                        "options": {
                            "isReversed": false
                        },
                        "id": "fldcfeif53TIOJMWD",
                        "name": "Sample Report"
                    },
                    {
                        "type": "singleLineText",
                        "id": "fldX4xeo39nQG8I2z",
                        "name": "Fast Field Username"
                    },
                    {
                        "type": "singleLineText",
                        "id": "fldB0BFxG8VinDJCV",
                        "name": "Fast Field Password"
                    },
                    {
                        "type": "multipleAttachments",
                        "options": {
                            "isReversed": false
                        },
                        "id": "fldQLXDySwiwaCmh8",
                        "name": "Additional Attachments"
                    }
                ],
                "views": [
                    {
                        "id": "viw5j932mZeSN0C5H",
                        "name": "Active Jobs",
                        "type": "grid"
                    },
                    {
                        "id": "viw67YWZkgwpPtzEg",
                        "name": "All Jobs",
                        "type": "grid"
                    }
                ]
            },
            {
                "id": "tbli5p1vaTPneBDJH",
                "name": "All Procedure Documents",
                "primaryFieldId": "fldOOZEpuzToZAXOJ",
                "fields": [
                    {
                        "type": "singleLineText",
                        "id": "fldOOZEpuzToZAXOJ",
                        "name": "Name"
                    },
                    {
                        "type": "multilineText",
                        "id": "fldP6SRdkXjQkUcGK",
                        "name": "Notes"
                    },
                    {
                        "type": "multipleAttachments",
                        "options": {
                            "isReversed": false
                        },
                        "id": "fldeiFW0J2EOFQ8iH",
                        "name": "Attachments"
                    },
                    {
                        "type": "dateTime",
                        "options": {
                            "dateFormat": {
                                "name": "local",
                                "format": "l"
                            },
                            "timeFormat": {
                                "name": "12hour",
                                "format": "h:mma"
                            },
                            "timeZone": "client"
                        },
                        "id": "fldjXflLmMu3ZiQXV",
                        "name": "Last Modified"
                    },
                    {
                        "type": "number",
                        "options": {
                            "precision": 0
                        },
                        "id": "fldhvBEV4MZt9Z1Pk",
                        "name": "Article"
                    }
                ],
                "views": [
                    {
                        "id": "viwfl7IZqEyFsLFJS",
                        "name": "Grid view",
                        "type": "grid"
                    }
                ]
            }
        ]
    },
    "allProps": [
        {
            "id": "rec0KXO95HzlWWaBa",
            "createdTime": "2019-10-01T19:05:14.000Z",
            "fields": {
                "Name": "176 - AMC Redmond Place",
                "Route": [
                    "NE Route"
                ],
                "PMC": "Avalon",
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "176",
                "Tagging Vehicles": [
                    "recyvdQ7VMvMLjskJ"
                ],
                "NE Route Orders": [
                    "Patrol"
                ],
                "Site Name": "AMC Redmond Place",
                "Calls copy": [
                    "recN5rUH8jqEYY4fY",
                    "recAU8ds3qd35Uyqe",
                    "rece2QTnbgnjARRjG",
                    "rec4h50qKD7sOxSVW",
                    "recXRLdgyx0br8ZMw",
                    "recCWRH6ExG6Wa0h5",
                    "recGwHApH8XqESlg5",
                    "recLwKMcfj4zeA2oc",
                    "recQUAhaMJaOPMJWC",
                    "recY5bGD5BJZi9okD",
                    "recv55Q70GQwaVfhL",
                    "recXzchVDo0YtMvUZ",
                    "recQleKqc7hcXjh1G",
                    "recreKxgdCSqRy0N9",
                    "rec8zzPSs9fGQvAc3",
                    "reccaDvGuLsU5w2wE",
                    "recv0DHfH3HRqDhF5",
                    "recjj2of9JEP8slYY",
                    "recawKE9ScjkTIgWn",
                    "recjErCOgNanpwRuw",
                    "recZw19sjNmhGVBaK",
                    "rec7hrEczwWdC76Pa",
                    "recpWz73BrAv0bVPE",
                    "recDEV9iw8rjUuxUv",
                    "rec9NkpzVW9FlS1vV",
                    "recDMLdvAFEqSpTER",
                    "recltlOxBQxO4xtAe",
                    "recJx0pggQ1ZA57Ag"
                ],
                "Property Updates": [
                    "recNkCdah6TPWiFgr"
                ],
                "Post Orders": [
                    {
                        "id": "atti3ZX6R3s1M1Ke4",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/qFxO1MzcAt2SUwITviWS-g/JbeTVcnWmvSl89iW123nWMXLOr0moXKIS8zhciVV1aFh2OOMv1pFxkBe7GH_oNh9EUcHq9xYztOSRyqoaUIvY_SBfURqtABAPkyAHfQotGWVcbh-kHBogOMY2TwnAcZuzwJM2ZgJqbTf6_13bwY7G_MlNdo3dQHhjag1dAg2h1s/hQzUGIobdCyWdmfrK_yuxPBbjjecuRrC2J56ukkaQVA",
                        "filename": "176 AMC Redmond Place.pdf",
                        "size": 302973,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/xjDSpKVSoTszT-4IhFeuAA/qqZfiyv5CnzpsY_fnGBqfw2UROjskURjcUYVqG-M--8Ywh89Fk8_l0djjI2tSCXucxEqqLn109xP74VxkoLPmYG4vaxnC_Dk3zcvOqQJ-bdicmQcmSlPPYinEzU7vDcjLa5D59Ps8Y2T8rZiRRPPTQ/SP9VOfLh8NKqHP4TIiTx_kt6epeWzKwyjKo8fQJOsOY",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/Vv7vBFal92pNBY6TZCqiBA/MUz95_HCcexArF7KhRGeSg2c2MzGTf0Ax1xwmNC-kwITuaTv6rhQBwoEBIVhc9iju4LSfqoqB-Ohhu1KQLmR8vuu9JRZxBTnQUv68CAgQokTQPzNZkTd-k1jzypXO6tLb4R57StGMdfA1CJJ8pqB0Q/R_KRf2bte3nWzwM3XQZei5kIaIDmSNDodP0foWzutc4",
                                "width": 512,
                                "height": 663
                            }
                        }
                    }
                ],
                "Site Address": "8935 160th Ave NE, Redmond, WA 98052",
                "Google Maps": "https://maps.app.goo.gl/jBbecgG3drndKL9T7",
                "Active": true,
                "Assigned Job Role": [
                    "rectLGnMglyXQB2uM"
                ],
                "Manual sort": "ad"
            }
        },
        {
            "id": "rec13f0Q4zq226kfd",
            "createdTime": "2024-05-23T21:42:03.000Z",
            "fields": {
                "Name": "230 - Lynwood",
                "Route": [
                    "Temp Onsite"
                ],
                "AOG Property Code": "230",
                "Site Name": "Lynwood",
                "Post Orders": [
                    {
                        "id": "att4e1ArwoXg6Hyzg",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/NWPnASEM7u4SeQGc12LlKg/qdQ8pAZfrLbvgfAY2jCb3ppIMFTli_kQzfB7ML4qG7WsCYXl1jF8Qr24EIM9zzFqgYkj81vHkll4haJc9DmHUL_TNFQ10DtQwuXwTkSDSKXnSF44QLRJ9faj7yI7Xi_DBZ-GBHukhAGuyBWr_wLUP5x-tWzFxGvgvH-38j29VxQ/XlhmLmsI21MYO_n2eDsUmXq1-1aNMK2mE3c2MTWKkoU",
                        "filename": "230 - 164th st apartment project.pdf",
                        "size": 436153,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/xEFhIj9T6HQjhyV8jwgMdw/QzwBgqXci2qnFxqbvd4l8qQ0eyLXcSOn_0C7D52EL_sU7FzOecFDqnUdtykqtl3N8Mg20GAucBCsZgv9icjNxQC56CAO1YS07LRCMJF65BXCV48N5oHWq29qtmcCg-sB3T6wa4qAuS1V9QX2lFeyMg/ytVh5XbzdyDT4lvwbR0tpGZ5IpnmbVB_GoFtJsEt4cY",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/sqqOmdgDrU1w-AlxVoijwQ/hBnYO7RErCkCyZDbYMdeU-0PrljeZpkcODWJU-lIJnyB0SomOp7Js400rdRHbYl_4r_kHuWQO_7Jdpz9-QAX8jbPlNttWF8SgmpP3CmeDXAAoDqXwLTe-OubodEbv55f258_QexbtDF8KkHAq1nCRg/NQxxhtDIWL7ZpPv5SpMutIzR-6Dqsp96zLQ8Cqxe8b4",
                                "width": 396,
                                "height": 512
                            }
                        }
                    },
                    {
                        "id": "attOQu2b8oyks3TIV",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/jvG0VmwNY1jH0ghp956_cA/1S3sZeuxT8sdzuWK9oCxJaO3RjAJkz5fRfZUu7jvc5Dv116olQsOD8rDQqgH6IXBKRu-8SupVrXmu4opKdszFco6eQ70dnWfUj3gZlYO3Bx8_aJ5PynHWy6_0AUM-9C28PCt3Wszkn9ZbcWYXovtWpIu9OInnxkFaYlGOGAKQN8/zndmU-Nc566xRHDGkfXIoddMApn5RZFBd4-afuZ8Z3o",
                        "filename": "230 - Fedora Camera Monitoring Info.pdf",
                        "size": 31832,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/-nkhGY7kAIqpxJ2DSwUq3g/SKJSqsQjZcnvKGM7xmbHVrsTxEZGYMsZYkWyOJoiz3XIJFjOyaQ5X8wHBL2ju8HiEzBqlk-icVvkMRsIMGXAgGABDA8l9dprXMyoy7-B5YV-8l_ZWho24DLVCBWMjB21_vWDbBm1VG3LWLiYeF1CsA/xMYP4zDXzi3bM42BWTMSwJHl1u86stW2Xn3xAqKCv-Q",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/Oz3DMspSDwyJ1wjFL-8yHA/lP-ZuqNFW7jPWyn49UfZQOj_vtguSG8vbrCcMyJXN4oI_VRYHp0mSz7EYCaYM0mfNqUwIqvYvSranD8hvsVQ2V5sxLVuHpeJZpMK7cLS5QfEPcZyuW3WZwP6HNhWmdQDIUvEopqhO8J2QwnjRY48PA/wEx6Ri_dDyPuhyHhH2-J2hhmVYw56NfgBDLtf4bQaGY",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "attLgCASXh11ZyFdC",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/Fd152U1rgywa1-k5WeS6Jg/-RSjIrtoUBIV-g7cBZbDaKTE_uCEW_89o7amF1_AUpi6WM7twsVa1gjZnFsOH_NxRHEtUOeTkVQVzGZOub-30ZwKL1_n2AC8bc_7IX2PzPq-_Pqm8zWzeFKewHZJD7m2AmgChnD98OXbdJ4uQJAOJ-oCctQaomV6a_-Hb32G26w_nAmOkwUsr28JYefJ0Nm2/8EbEhyeABjuWpywB4eV7g9c7Ao47kJyIIuzJLA7TiPU",
                        "filename": "Fedora Collaboration Policy and Procedures.pdf",
                        "size": 117858,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/J92VCpqyGfdjR8eTyAEexg/xi4e38RaWBozrvq7S_DfA_aNd0HqVS7X5p8rX28N14gZ1ErX5pSmYLt4s6gTcGZ-uzudRJnxyb0cx_UbM2v4suDEmtXnEidfS6vKrenoI20uPZCMd6veJkDEyKLBS7k2GbPj-eysl9v-ab_JQtPyHQ/7D2SDarVen29ERn1nExXwusWtnXlXKmecx0WqWl6i1A",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/mS_owh887m_HL1PLHxTt9A/-fzETBKMPVQ7ArQcAq16Z-g4GiItN_9-gnmLkwUp7JYh6OaqGUuVadKkozGFH6pyqdhmsL2xpDGIMtikilZo3zeztOFzTwKgj8rIygavwosuAzf94el9rISH0AZDc_OGEPKPCS6nj5ooOfsNDxZ1fg/Hjt0Q4kX6ur0eRu6icV_l17GrDITijb475wBywBr_gA",
                                "width": 512,
                                "height": 663
                            }
                        }
                    }
                ],
                "Sample Report": [
                    {
                        "id": "attJoodfH1u0qA8VN",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/sztAsWvYPDgRUEpeeQVW3w/o6h7u8uRymkVWI92smEKgrHHkPWKvIXF_pKq95ev2yrWt22SgmagPxv7069QW9LoW-doksyiBVFimUWxzqZF_bOo2bAwCBt0niV19giXJDbzmJ3UnblAaaUGzACemjlUb5SEWcHTJE_SoNvM-LI-TsEmWk5HmSlo5w2AgfWaTAkt15cOPozoJI7e081FkUI1/VDwuJoNkFvj0zms8FgSmVuTqqPK_PMo1lqJqhWwmy9I",
                        "filename": "164th Street - On-Site Officer Report - 08-13-2023.pdf",
                        "size": 902975,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/AeXvmgPe5P0uha8uP0wfIw/e5I-hXntXmz-7--6pm4WNLmf1Wq8MrhvigKyWwFHESdnpHEMBX7nxtLum0o8dKcqnm44gkYJENxEl3X0LQo11aVxSa75qdvBGj4vAwBMF6ehb5AKE0JtRhM-icNdxzffwbZwZuE1f9cK893bAg6BHQ/fccVnG_l7lstilQJyopeS6zbVhFGXgTkLa7sQXs4la0",
                                "width": 25,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/RWt9KzJnzeFdjZ5JANeWqg/O3WC_dHMQSPgxgeIsP7lPDchlef8zeHfF_fCT0jxZ8dPSDPs4lUNAMUsbneY-guAHnGgNELcHOR94rE4QOoIcyTzdfUxVdGvbc1SYdLSXrWRaTOPpjHinj_C5ckVwJPXjDgYBta8d7QQWXfsAlbUPQ/6cBa71CEazrYoOJ1dvMpWoptSdWNLpBXy1oFlbl2ksQ",
                                "width": 362,
                                "height": 512
                            }
                        }
                    }
                ],
                "Site Address": "3225 164th St SW, Lynnwood, WA 98087",
                "Google Maps": "https://maps.app.goo.gl/Tr61gKUj2w4aszJr7",
                "Fast Field Username": "Onsite3@aogsecurity.com",
                "Fast Field Password": "Guard2023",
                "Active": true,
                "Assigned Job Role": [
                    "recYLi8qMjy9LawT1"
                ],
                "Manual sort": "b05"
            }
        },
        {
            "id": "rec15E24j5v1k5397",
            "createdTime": "2019-10-01T19:05:14.000Z",
            "fields": {
                "Name": "154 - Emerald Ridge",
                "Route": [
                    "South Route"
                ],
                "PMC": "Essex",
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "154",
                "Calls": [
                    "recV05ypAf3tjNEl8"
                ],
                "Tagging Vehicles": [
                    "recIp93fcYdcCzL1w",
                    "recebjLlGUqsnCmzS",
                    "recfcgEnQqFLxBevP",
                    "recppzq8dVEM3WhmN",
                    "recdtwC9CoEEVQqWw",
                    "recu7vYG6XqYsBUir",
                    "recYUxTJ3GTpVuINd",
                    "recJI4k3LhV1GyJl6",
                    "recK49DdHnkTSoIGl",
                    "rec2IrDdDQQ344Kof",
                    "recHdsZMqtqgdzcln",
                    "recUIQU1XRWWxNJJy",
                    "recld0dHTkRpOjjEa",
                    "recM9jMr2LAib6gI3",
                    "recGWhkBFR1mrH1PS",
                    "recZkkP01lc3GE9wm",
                    "recTuJ8vNY9RkWW6R",
                    "recWJ8sZyykVlCBDp",
                    "recVtp9LiEp364Qms"
                ],
                "Site Name": "Emerald Ridge",
                "COVID Closures": "\"6 - Wandering Creek, 25 - Fairwood Pond, 153 - Castle Creek, 154 - Emerald Ridge, 155 - Sammamish View, 156 - Cedar Terrace, 157 - Bridle Trails, 158 - Park Hill Apts, 159 - Woodland Commons, 161 - Palisades Apts, 167 - Evergreen Heights, 170 - Delano/Bon Terra Apts, 171 - Elevation Apartment Homes, 174 - Redmond Hill, 175 - Vesta, 191 - Inglenook Court, 192 - Ascent, 196 - Salmon Run at Perry Creek, 159 - Foothill Commons, 194 - Pinnacle Sonata, 197 - Stonehedge Village, 195 - Canyon Pointe, 168 - Highlands at Wynhaven\"",
                "Post Orders": [
                    {
                        "id": "attvZcWbqnj6cHTR3",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/EbhH4cS6PSxB3WIFLx8ROA/aAl3fhLKlD0QVO-0qyABreGZRoNw9rK7zX7WXpyYBSmuJjX6kuWEaTH8X1j3QLjIRUiVRSeN5sf2mhT_mDx4VbEzDwQZM7vjdqJp6aZeEnhjNAAZas-sQ6WBMXCo7_40eDWqhHJ52LWzqQqauBx1uBogzyzzyRys_yjSp5NNmOfUXlBQ4ASxMxmJJVthL8ni/X463XcKgWHJa9DA06qiZHxU1dP-REie3hbewUJtilcs",
                        "filename": "ESS_EmeraldRidge Shop Locations.pdf",
                        "size": 4957298,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/JT849EfYscf1TfeGAFunWw/5dQRMRpVbrVEge4NhAqjIpTlz86gf8VyEgnxDox4fITrodOxlm2mt8-AOaC_WgYQHaHGBMAdY_N8S1GHixqF288_dy3BB99NCGPd1fEu6CISkz24UU_RPW35hpKsFdzaKQvfrM85KzUDay49WZI56Q/PimAf8zAZBem7nLL_FdgVRoQ6EoQSSV63SOsx__PB9g",
                                "width": 47,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/niu6hE-4trMcd9YFHUvgbQ/SMrxhcVlJtNhE3i2-_Pu3Dpj8cY1H3O_KPIAtsLTiCDAv6JJ--VpQ-nq3VocjVXoPn4_jajA3U9xiZCQDiWymMK7qVp1c47hjTSm2M0qxODdi4HePJvhcIVyGHAEPRwxbK7QRDuxUEALSN_wqhCCGA/ZGFMVvJLFW1xYvr7maw8i6l6c2Ca9umusOw8-XSWQb8",
                                "width": 663,
                                "height": 512
                            }
                        }
                    },
                    {
                        "id": "attfhmtJsWERyd6qm",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/1pKDXp3UJEUYQ436LX0c2g/ZCmLlzl0nH4CFpLTMgNFKu2e_mHQe3_YkxVgkzNc6immZwdbGg2ad56pNUb6pko9eFlXA74SQyokj_Em9vaiG0uHCC1ARP2kohhvhnYYffpAbE8JI125HdCOv_tUiKYEUFXd567p_b38axaB-9_-KAg_hXtIoiylkLCuIrkjeeNdteVRLwmYO0H7_wQILJ_n/VOCJBhOlSaLreWvWjJF2LR2BYyY4tWkTUd4joDRDRfw",
                        "filename": "ESS_EmeraldRidge_Premium.pdf",
                        "size": 5931788,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/sReoqZv4Jcy-DRYVk_NBpQ/x2J3Nn-tCu87uAGtNMUtpYVW5GBudng-fKAkW6yzJr63Ai40UA1iFOK3MgxA-83JFftTnlOGTtig9gbfpCVbZcR4tySc-Sd0g3fAJ3Pi4Hr6QEN_Q0Ru0G1a8Zd6ID0OjtGfI7KDPbijtk0hBI-plA/fEAz_fOGLPlqH3RK1MH0ALwsvJpNDN6v5hedBzwAs-c",
                                "width": 47,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/kIAdPGmrmhKQZSR_5y-PLw/P2KIbHRPTZ0UTo7kOzdQVSiJeKk-re_bWPmUlXIy6sPIgP0xsdprgSt0lLQjyY9kg_tGjlKW4d_2d9uQRb2IaQBjMGizYvQBrNGovBptayWiqxM9PyQpBDTeV7HjVfnxOg4rCVhzuHHgz8Xzxgt0iQ/pQdVorKWjNAqDuy5isIT1xP8u2gCq-bVNEu4KbLSfT4",
                                "width": 663,
                                "height": 512
                            }
                        }
                    },
                    {
                        "id": "attVPytGeTqRpU4Eq",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/3l-wc_fVIHm6ooyMaO9yOQ/konfRBXjAz3hIbEz36bMaEx9LHrJTs2ew2fXmGTD80HWIegwi4NMmUlE6jYXJskRrxzn2qgW0TZXHyFp-dLRgID3AAGmpBcgefzF27nUu63-lfpLs96w7tZ7ycQ1fzGntEqtgYoifU55kw-SQFaSdSVOj2aJqHQ02-Xrr34gMTI/avkCsykpso6Cyi_YBMMgvRzqfxkGrwWlHGLXiZLzSO4",
                        "filename": "154 Emerald Ridge.pdf",
                        "size": 92470,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/Zqi3jD84Pz6bqHzsVu4hfQ/xBIxxdEiQ-7GsByZWU7HnuaYfq26dc_SETVoEd6vYqip0ISx1q8VurJ_8lNPNpDDZihnPGgGhIrHfECSQhgrb5PL7Bu0-scYLkrZ6vrLmJQWjtTMpb12CbBOqyFZZUvmDOa5evcit62eA9pIU0lgfg/irKyo6u765OozmBn222M9r1zl48cm7J2iOt0aIiCsB4",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/ZzL6pOq1Iew99I9lTtEHxA/exg9K6HS28VopqXE5DTjns9XzLjRBaI1rsqSRlKyK0JFdhPWZorKN0ejCYnnOoyxkzxfayHfhhR8VMrlYSppGvZa-NRMiJAsE74QIWYqoGWaNiPKOE3zD4zhlCQw8-TtimKDY55uLOwROIQkmA5_ZA/HfLipaaVMvnAbGP-_IapY0xeTkD8llcNzj-8ubvIltQ",
                                "width": 512,
                                "height": 663
                            }
                        }
                    }
                ],
                "Site Address": "3010 118th Ave SE, Bellevue, WA 98005",
                "Google Maps": "https://maps.app.goo.gl/EvfpGdN4KLnBs8Ab8",
                "Active": true,
                "Assigned Job Role": [
                    "rec1UASONUxcvY0m9"
                ],
                "Manual sort": "aG"
            }
        },
        {
            "id": "rec1NCUtprMAo4f9F",
            "createdTime": "2019-10-01T19:05:14.000Z",
            "fields": {
                "Name": "62 - The Newport Apts.",
                "Route": [
                    "South Route"
                ],
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "62",
                "Calls": [
                    "recShpRmtcVDoBgEj"
                ],
                "Site Name": "The Newport Apts.",
                "Manual sort": "a9"
            }
        },
        {
            "id": "rec25L7HQJgmR5adD",
            "createdTime": "2019-10-01T19:05:14.000Z",
            "fields": {
                "Name": "184 - Avalon ParcSquare",
                "Route": [
                    "NE Route"
                ],
                "PMC": "Avalon",
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "184",
                "Site Name": "Avalon ParcSquare",
                "Calls copy": [
                    "recw1XS3AWim69dGn",
                    "recyW2QwBSfaohl1z",
                    "recTzKvOtUHPmbJZB",
                    "rec9rdwt4nKIcaZDZ",
                    "recHlzOBmxPbRMT4V",
                    "rec1uNcWDssAosBvK",
                    "recSV4YV0EUdulMRJ",
                    "recfmWM8uX6R16jHJ",
                    "recOhwmOt4lp29BA9",
                    "recuctGeyLaPzByhx",
                    "recxy7oTuap8Osiib",
                    "rec7egKnm9p1jbdPM",
                    "recNAYT1IrdfhBrEU",
                    "recqciae8ZZRWAcXC",
                    "recO5vp6QQxpIwv96",
                    "recYTbugtvm9BEeEh",
                    "rec76cgI3Cs84JqPH",
                    "recTRg4UIB7U9Gxeu",
                    "recz3JiYoPqc5qKwp",
                    "recC5u745Ksiajjfo",
                    "recW2R2Lgat9t8Vu9",
                    "recbF4wU88HKxzv9j",
                    "rec0hPSaof1RlW85A",
                    "recutsmC1Re2VwgE4",
                    "recXh31n1LrafiIX5",
                    "recdFd2DYk4YXM0jq",
                    "recQm5vlwuFuihEXW",
                    "recfoeAq1dQhhdE8c",
                    "recw776mb5hxjZUhR",
                    "recFPNj4Rm1mlsJo7"
                ],
                "Property Updates": [
                    "recuZdhro36hA7cFt",
                    "recv7oMFloOKxghAK"
                ],
                "Post Orders": [
                    {
                        "id": "attTpfz9hcoOmWIcb",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/EdMyVa2K4OSrhj3dF0ElLA/xej27q4OVGbo7QuqSS1K_fLhgUPEyBQUH6r2rWvHQSqj95M43fK6RzNoZ6IPhmjkGeUHDBteSICl-Zo_UPDlGYUJKbkQGADiOzdMKmHI1yATQCgYSvUhdjaPPQXvYp0Pcw1FzwNydD0mGCPCQ6sMlF_QpDAcG0ZI4yXqOhzStfA/CMHAkKwX4U9qVj3XcLrYf_UBZuiQQ8vGb2a2aSEra8o",
                        "filename": "184 Avalon Parcsquare.pdf",
                        "size": 257717,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/Pni0Af7hLewEo7zFEqc6vw/a2YZMcGtOoJJPXCmax38C6GhGpA-1Ptnub_IzdSs1Q3BUqi1CcuNRtarz4bG62X3k6c0cWBuNJs_gf3fWH_n7k2mDvfFhckmQ3VOUhe2amWV7BtK9LTDbcYnxU8iGpKVazQBoAqYubbL_83iYgK-qA/XjbR12kH71zorsO0k2oMYbCl8kV88F7xN2gdf03J5Lg",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/GH9th_94sx7wEXxsoqznRg/NtnEDEHOmv_z5fjF9xQLzpfvNEGCCS602NBUiUiZaA1Y1iIFlAtXCO4P4woexotoz3qqzDUcQLyHkNOLP8bCRmTcGTS9LhtPrGhrdELHY4bTfws1K28L0qyQ9ged1cyTuaYvAY8Jl48Qbhe66KQeiQ/u5UmQ-kgkWnfprMMX3k3ys0KsuWoRuWiEXJ9WypTWDc",
                                "width": 512,
                                "height": 663
                            }
                        }
                    }
                ],
                "Site Address": "16080 NE 85th St, Redmond, WA 98052",
                "Google Maps": "https://maps.app.goo.gl/pzeYCnRG5JatMNst8",
                "Active": true,
                "Assigned Job Role": [
                    "rectLGnMglyXQB2uM"
                ],
                "Manual sort": "ak"
            }
        },
        {
            "id": "rec2LsiV2NTXTGTuh",
            "createdTime": "2025-04-14T18:37:36.000Z",
            "fields": {
                "Name": "222 - The Mill at First Hill",
                "Route": [
                    "Perm. Onsite"
                ],
                "PMC": "SRM",
                "AOG Property Code": "222",
                "Calls": [
                    "recXh2wPxde6psUbs",
                    "recspdBM1fLtsE5Oy",
                    "recdoTH6UG59VTeuC",
                    "recDMl4x6LB5IZwGo",
                    "recYUwSyaJNcOx05K",
                    "rec3qDDd1ldQ4orsg",
                    "reczfg0pGKzbNmAov",
                    "rec6CW2WkLpfr8diM",
                    "rec8BB8mEub8h5NKq",
                    "recFNTqxJMhY0qSpq",
                    "recLidHIXqEkkPgCj",
                    "recjxd5eXIYGXppjH",
                    "recsx5BwC8vaVjnIA",
                    "recuRZEvblBlPHWtj",
                    "recJQsyCRCIqBBAPS",
                    "recGjoJ1ara87AGVz",
                    "recwJ88nt9sypyLA9",
                    "recZxj4GzBejMRctP",
                    "recMB4PM0ZpWvyRPR",
                    "recq7GDtWIqnJJmEV",
                    "recaI5h2lNIHJSgCW",
                    "recgpUQ3Vw5UjLNtC",
                    "recdfFwBNl9geYQZ5",
                    "recExto8VCQhn7XiA",
                    "rec6kNj1lciHoXHFa",
                    "recuKnzMYU7sl0mYN",
                    "reckxqBNAud7jG2ig",
                    "recYeSjM81MQECVIi",
                    "recyf7n5eSs0qVJzw",
                    "recFyrbBbY2lR6saS",
                    "recArs60iVSj6ogNH",
                    "reclnr6B0hzYVcHw7",
                    "recGqhQfO3va8zNR5",
                    "recMPxLH2Yg0WGogj",
                    "recs5zFHdIScSZsak",
                    "recJxtyFqm5woKtwX",
                    "rec5CH5T13ZxKnOm3",
                    "recJQ2qdtw0xc26je",
                    "recQnG45kCYULVy6i",
                    "recpvB68C2ASqXC7e",
                    "recKCEFCqU3ZO6xcY",
                    "recAOfQnfDiQho9pC",
                    "reck8Cc93RvhA2YO8",
                    "rec5nF3IEUFp5k4gl",
                    "recsA4cdcpD2QSAUZ",
                    "rec0rr7mgX7Cni7UX",
                    "recYIB8et7j5bjSM4",
                    "recqzg97vu86yUaPL",
                    "rec4EqMQzcewdHNdZ",
                    "reckTa3jHCvyqn3QC",
                    "recIFi19ieBO46tSc",
                    "recd1cq02N1MOBM48",
                    "rec75LQD0a6uy0g42",
                    "recpeVjFAuVgrQqjs",
                    "recxmCdbtPGlNW1a9",
                    "recXa1bD6MRSI0XRr",
                    "recQrV7gBGBGbQOmc",
                    "recA5UoKGgrQJDBGo",
                    "recha0CxtPircMZ6C",
                    "recwQOanAmjKj96TT",
                    "recjd1oeuO0iZ8S42",
                    "recKGSpMEmWSvpAlY",
                    "recXFHcRLkPco3lit",
                    "recIPJaSWz5Q2D759",
                    "recICdet1s3eDXI81",
                    "recsyaHPWnvpgW06A",
                    "recPAcHUMZJruizCF",
                    "recjAU2B2CWDyofBQ",
                    "recd3YBa5G1akD0g7",
                    "rec9oUVuiqECHnJXx",
                    "recKCs1L7xlbvuloo",
                    "recayqr8QC4ZPlpgg",
                    "reccTlwtwMhcTItjQ"
                ],
                "Site Name": "The Mill at First Hill",
                "Post Orders": [
                    {
                        "id": "att4znFgqugR2sALR",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/sPLfvx4b9jJpalRXqhzCUg/PZcGfvbCa7XQXN6-7hj3USLJQRqF8vErsyzTILx3PM_2FdkMSw9MSsau5QcKmKQFnrq7qQKRx3SshK93FHDijgd4lGw7oZWQHt3kqlFfLJu8wrNodc8PHfJKWsoz_-dTBei0Z6a3Em8e34B3I9ClVjVIt9H3xL-8H1mXjUUb04c/gS7Bik_1NARetTf1bZXBVJnajO_7ZNpEWdN5RVP36Ms",
                        "filename": "2025-04-16 21.23.02.pdf",
                        "size": 533711,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/G1uFBZMNcUwZmzINIVYSJw/2s2ZNd4KePKsJnvEQr03k1XTkxBKuGGGVi_7nlW0DpV3YUMNh9KIjTTjXHhb6iOM1SZe3_Ej8n4fqKCseK7BhqWmE2Co5tfxNiBwwklQfwPwHatJV0LOp7qfoH3t41pqM5ZhFY_tYQHUV7UA6mPt5A/VK---1WwWVvg_rkpg-cas4NzWC9I0FYVmBPwS2X_LvU",
                                "width": 47,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/ABjQGRx25GqKJXp4vMEnuA/14R-n-wSOFn5C2vt3UI0_2n1gEa9VARoPY6DnuxV-26b5kb0wW2bdEoyiNaWeOaF69J_-hT9nCNB6zPQEMpdmtDis8Hoa_MHDySq9e6gpdAPh_gJsxkHCFjqj2Ua-Wrn-rsjxL5EIQPULOu8khJ-tA/IizZGEZjgZLyfl-Eu76XCQUqdXxpfCv7IOU3G_Z2lps",
                                "width": 663,
                                "height": 512
                            }
                        }
                    },
                    {
                        "id": "attmz25kW09HsXTuw",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/rDSwCs3GUtikBBQpaaDC8Q/G6LN0TCuEqCEIgiL13Zmzl2DPZmKV4PdOguxXnym-PMlcxegVPvzOXZygVGApN-zcY96YlBKRFjZmfIvn98Ktylu_zoPdiS8NElycr8TP9WwjFc6VcpSzYfqiItTk-WQEI3-P8rQNHzevXsr-zJpcBASGk2o8nzNg3WOrskc4dEuQ4-7C6CS_BARgr-EXW7C/v4u0U302dADIgHi6O7__Nv8JKpfw6V9yc_7LKnlR-lY",
                        "filename": "222 The Mill at First Hill.pages.pdf",
                        "size": 57714,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/KL6Q2B3k8Nt6iBHdIDfBTQ/ZSmRNy0thbI0RJb8_TEFTB8OGI-4ebuq_M_4MfC2hsyXEZL503XM6_G6wIiclreRq6fbgm9lLOFRYRC21dnkSyvrGmcIeYi0IBruqu1eHaWqmbqvwFjIM9eGR14bIOwjXir8duXEbVoPnq2CWA2PQw/sVGelGOyPqvtSLQ2w0C0QdkyuMeRqCvA_IQK3slsDho",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/M4t-WlSmRzwt9eqVCm1y_A/fmVD38azW_umQVApgviVQxoXxLbat4m3eeQ6dcN6zoiTp7IZHbM8tL6_OsVypYMy4UYFcDKmCmS1KP4-Ctcv5N35FDo4Tdlm2bg7WZyOGVtNwaRA39P_MhbIO0bq9BZRFwBh4I6q5llkEHtGV94n7w/o4ghNp0GWWnoPdcffsMoB4THxONStEvP4a2YWI2GrNA",
                                "width": 512,
                                "height": 663
                            }
                        }
                    }
                ],
                "Site Address": "1000 8th Ave, Seattle, WA 98104",
                "Google Maps": "https://g.co/kgs/XzYxSrF",
                "Active": true,
                "Assigned Job Role": [
                    "recLqJZGn4ST2D8GN"
                ],
                "Manual sort": "b0N"
            }
        },
        {
            "id": "rec3Xz2WUCGqLQwxH",
            "createdTime": "2019-10-01T19:05:14.000Z",
            "fields": {
                "Name": "155 - Sammamish View",
                "Route": [
                    "South Route",
                    "NE Route"
                ],
                "PMC": "Essex",
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "155",
                "Calls": [
                    "recwOpwRZovI5ul3c",
                    "recR3Q8A6Uzwxt0Wk",
                    "recMHimwKX9oDT2OO",
                    "recfTRniD1pD7tYHf",
                    "recooMPRTcNU9IXAU"
                ],
                "Tagging Vehicles": [
                    "receg6AF0ldIfk1P3",
                    "recDZf0sazAa4oZpI",
                    "rec1jMhD6479y5KzZ",
                    "recheH1LygURVei35",
                    "recVcJfWmahWeFxKO",
                    "rec5N1Kp2i9On4Zzc"
                ],
                "Site Name": "Sammamish View",
                "Calls copy": [
                    "recmBujB4jRBAYEoa",
                    "recqH9bVogpVTEcvu",
                    "recZKCCVCn9TCwdyc",
                    "recVvX3IYB8S8O4lN",
                    "recZ8J1xBRVfFzpVY",
                    "rectFhWWjFHF2ArHC",
                    "recITM1NSdoxr7YEP",
                    "recSB2bp1ditKnlhn",
                    "recc8mzw9UcI5XS7v",
                    "recrRwVh6NA6UQGT7",
                    "rec5zOFh3r5ywfgAy",
                    "recryHQl9QJvu3bh1",
                    "rec3zXbzPYuZatHwh",
                    "rec26PHxxMrg1o8c5",
                    "recBpbocxQoaaLB6z",
                    "reco6lAIXqXmDH3LA",
                    "rec3TzcSgEXTQZCH2",
                    "recTCCQsPoyPY0n0g",
                    "recuI4uZCreMzmHo6",
                    "recARe2eg0UhgE8or",
                    "receZbS5sUBoy3pGN",
                    "reca0cfRU81v7FeNU",
                    "recZumGeMkdewRapp",
                    "recQGGXDAuDyTIQu1",
                    "recTCIc33tnYEOD50",
                    "recGeNGrfPZh7Vg7R",
                    "recdP7fkD8VgVS2D9",
                    "recQjak3l12OGpKb7"
                ],
                "Property Updates": [
                    "reczkXK9MUZlNcYUi",
                    "recrKnp0PMw8lCikH",
                    "recOLFtMcOh5zAhYa"
                ],
                "COVID Closures": "\"6 - Wandering Creek, 25 - Fairwood Pond, 153 - Castle Creek, 154 - Emerald Ridge, 155 - Sammamish View, 156 - Cedar Terrace, 157 - Bridle Trails, 158 - Park Hill Apts, 159 - Woodland Commons, 161 - Palisades Apts, 167 - Evergreen Heights, 170 - Delano/Bon Terra Apts, 171 - Elevation Apartment Homes, 174 - Redmond Hill, 175 - Vesta, 191 - Inglenook Court, 192 - Ascent, 196 - Salmon Run at Perry Creek, 159 - Foothill Commons, 194 - Pinnacle Sonata, 197 - Stonehedge Village, 195 - Canyon Pointe, 168 - Highlands at Wynhaven\"",
                "Post Orders": [
                    {
                        "id": "attRX2kqqfx5Hsmj4",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/TH6YCwGxDPOExBx22z2S9g/RC-vW-L-4dY2djfThoct_oSj57Sj1F_WLy_Ri0VI7pNdn1Dx08SIejw6WHFaNfqJG9h5EezpZ7RmNgsm6mucMeKyxgUVePacq4_x6fof_fG0Rv7nntdtSMBSTzXMqKm6QS7_fwiCQGeUTYdhnHTIWKGPGnRykHCWTzKs9Iowq2Zvc-A3FC5U3xbXTQQpP3Ki/DkGKoZ38bVVXQLyWjUfHq1cq0tCIMi_qKCP938mjn94",
                        "filename": "ESS_SammamishView_Premium.pdf",
                        "size": 8024702,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/v55MvH6EcdjhsDoSXGHscw/O0V9INWfUmW59cb3xJ--bKnXuJh12Ou87D5IY0rtrbjOEO-I7cq3b3Lfe_cZCphariM4zSInWWpmqEbv-bC3nBdueoaXPuOhOA3UpsjsSP6SlXnctL23qECsoiVQkBjvRDjrSFd4L2tb8ZKc2oYQxQ/ww1YKBXvUe0_3IaJ6rfLEuC7D1AvO2qShijGDeorzl0",
                                "width": 47,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/sDNF0gTviI9noFHSMF9REQ/3PiAqM72FQe5WiGjnHxTIgitB4G7kQQhCfrd5lgMuHcyVgy4yyQEyZ0Xt6SCHuU5XVbKjn5UbY0dwUnaa1OnM_8LIX195OY45NI7QeEFiP_yLzFxeir5J4d6gG35tqkT9dp-hkgxCbfcGUZfsHtYEg/B5E69viy0DHatz10MNHX6i0YP46PIaTVhC0XCgaXS5E",
                                "width": 663,
                                "height": 512
                            }
                        }
                    },
                    {
                        "id": "attQrjdvzOCMe98Da",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/ILoELIePjjBCMRlOOF_wPg/nssgU482Zpdvd8MUzxGQuqf-3TUHEZMgxGoKdabSWdGLqZDokDEPcw9xLOxJAK-IuufgYEGWVAjbY9isMmst_nbDPg33ZHiyPZuvg4hyK8GXYzVt7cU-aZWqd9AqlJlCok4jt9hyrb3aiHnvMAYn0Qgrb5VSq_CSWFXUWlaCFS4/NY16zR0aoaOOSUZXYUXC43G4tVmYN3kPTyXzFjpPhc8",
                        "filename": "155 Sammamish view.pdf",
                        "size": 76702,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/kRQXLcdIJufjHNZq3aHnrA/gkBdBbTH2MX5pnDPS2HdLarMKBBcUfG6EJtffnKerVY5KoiDJI5pwndFOqKi_Yu-DHcfrXgpp8L5FMorxLGnSlmOCL19lcE3TQgBwVexOA2cEdKCI21ET1vg6hzLvMjt4kNBCVXuOJ5NGcMZf4uEwA/dDlQHeog_LK0D0KULlfVAUsFKR2-EEeuEbDgOIrBBP8",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/5YNHXUukTI5647SVbpeKeg/AJun8zpzzaLA_TtLKD2GosYGPmkUbQ1XpNi4u6cdp_-gLeCIa-za-m79BhgOU2-EiTkWVZ5BVAzjK1Pkzi9II4JFgvxPIxJm5RpVOnsQ0A4L5x3StVE628JopLYQLLv2YIkGn06Sf6uZtKpm8cIhkw/r0r-d1QcXNADEzwXFWG83zBEcrR2Kb6O0-ngoUoQ85c",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "attJP9Wp3lMDqaqDm",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/ALCrqLr9I4WViY7GycgvqA/aPNrJy0f_O8iuqsWndhmIQ_uTGppPQ6zi2wJWq7k6wXK3xekl_OiVpWBy1ON3a265a6T4yjOn4Rzx_pjeBwT4jDc2RqPoVStfz2M7rOJJhUtxRSGomI10TmK3oky2jNcH2JRGaYetFmMQt4VYxpe3J_N0zxf22aFTRKaQ3sbp9tnv30dDKVAuZ1WntC5avveeQvHhTng6LYxMip86atYOg/CCD9NweJeRkJe7rewmV8Byvv5ebZD48Cd2gdWXhGxk4",
                        "filename": "155 - Sammamish View Lock Up Guide - 05-22-2025.pdf",
                        "size": 940089,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/lZN-deAP6fCHhgsis_Ba9g/0JdOV6boUWw6TZNI-j1pA_bmJlf7VhYr5ISHHrp-lYsf0HX01KXTik5ptOa3H8OLyx53cHobc9JhumPdlPBOODjTcb4GzknYlt7AV9jR2XFEb_m8nb5JM6dl3-HaD6zZUIql9OXuxW71RBpV8_5wLg/dFRkjeucEnWeS4kL_AQs3v4Wab5jtRKemmB3oy6-Jf0",
                                "width": 25,
                                "height": 35
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/CY7MNqtvtKbHFQE_J3JmvQ/3HtSOFi6l_22NkSZy_-HbB_uIQCF6fs_zvAzkqGxi9eVi-bpmHw-V6N078yEzSqM3hicEy360Ru26-Ij3yAM0hkWy2m5TcjUDiT9gGyCwO-XxDlq5f-nbKExgbh8t4d-_H4JnOki6o2UjHZOE7aouw/IBzNGq0aaico3GcoXpggGWlVywyVvpmKWP98UIFtUQY",
                                "width": 512,
                                "height": 725
                            }
                        }
                    }
                ],
                "Site Address": "16160 SE Eastgate Way, Bellevue, WA 98008",
                "Google Maps": "https://maps.app.goo.gl/TJpu7y5XNf95qxdf9",
                "Active": true,
                "Assigned Job Role": [
                    "rec1UASONUxcvY0m9",
                    "rectLGnMglyXQB2uM"
                ],
                "Manual sort": "aH"
            }
        },
        {
            "id": "rec7dAxR3VZpcmC2M",
            "createdTime": "2019-11-26T05:35:25.000Z",
            "fields": {
                "Name": "159 - Foothill Commons",
                "Route": [
                    "South Route"
                ],
                "PMC": "Essex",
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "159",
                "Calls": [
                    "reckZhZA32pRP645G",
                    "rec51FdJOWe9PDLri",
                    "recmGgK2qcBHN8R7U",
                    "recX7j4vT4XPWBhRv",
                    "recWRvlItySJb0vA0",
                    "rec8S3VECczkd0EdQ",
                    "recmgHDB0lPunfGIY",
                    "recP4ZBYJBfB8YA9y",
                    "recRmhU2AtHi2gcGR",
                    "recDAOBu6iYEHEwe9",
                    "recSq06DrT0uwdvsT",
                    "recylPazBy135vtrD",
                    "recQZjijNwTV8pEmm",
                    "recR4DLZnBK5FbKrp",
                    "reccfuLVA1Wnr6AUk"
                ],
                "Tagging Vehicles": [
                    "recUr1wi31usFXmXf",
                    "recQJlTSm9N66KTxn",
                    "recfJhJF5Ctx9W6kS",
                    "rec9CAbrDWm7U7wQB"
                ],
                "Site Name": "Foothill Commons",
                "COVID Closures": "\"6 - Wandering Creek, 25 - Fairwood Pond, 153 - Castle Creek, 154 - Emerald Ridge, 155 - Sammamish View, 156 - Cedar Terrace, 157 - Bridle Trails, 158 - Park Hill Apts, 159 - Woodland Commons, 161 - Palisades Apts, 167 - Evergreen Heights, 170 - Delano/Bon Terra Apts, 171 - Elevation Apartment Homes, 174 - Redmond Hill, 175 - Vesta, 191 - Inglenook Court, 192 - Ascent, 196 - Salmon Run at Perry Creek, 159 - Foothill Commons, 194 - Pinnacle Sonata, 197 - Stonehedge Village, 195 - Canyon Pointe, 168 - Highlands at Wynhaven\"",
                "Post Orders": [
                    {
                        "id": "attASRo5EUN5l8uLJ",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/HiF18Mu3eNArz4r4RQLgZg/M4B9aASsYQ6qM1N4pZPFjbaXpL_GiFNVlU2Lr8huX_rMexyHRlWYf8nQqZdwociMIYIHuBGufCYq_CUlRTQx1asAG0sJQd3HTuXOnaLo0nIWgPnmIjglEB0bfMKjR0h6br6qtU4U9WIEyv2SEkwB_B_1urlbOlxLUd0yE8q04N5tyxe6yQ5BinrtYllzPoXv/_vO1APRXYArUBzbDqZiIcPL5zNZVQcPalrj89vfqS8g",
                        "filename": "foothill commons Revised Map.pdf",
                        "size": 704172,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/OXgLivszfVIUZ7tQeeU7-g/dysi7st2YZutchVUKCUyatTfMLpWBjK-la87aOEUDEcX-a8XaYRTR37CTsdfy8E5USA1ozKW1eLtemTbQOjoWr7zdSIXITyFSdr1791nEU-hf2ZsVp8TxQcxH9Gf8zZpe1b9N20mOrWAxhCylvKs5Q/CM90eLnkWBujk-NwEbomeNBde8ue3424cjfkIIENpUo",
                                "width": 47,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/h0tk4e3nUK46QdpEoFR03Q/OKBTGc_jGPY29981AvwVVGsEaV1IPsXk1YoLDPPEgbPX3YIXl5UKGfCvwaf3qSCS3nDBFfgBoscVHYAIWQNYEW35spv_UnCg_2y051IjvqagSgFfiKaMDhK4RuoXG3s96lhgGKHYXuZS1ydt2Ar82g/rNquN-F86eeEsycy_dUUZV-XiCxy37MnajIH0VLqtkk",
                                "width": 663,
                                "height": 512
                            }
                        }
                    },
                    {
                        "id": "attgCUgUrFhYLjin2",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/grFQnQRusFpM_VC6ZBtPug/Jnx-3lm0HS_p1iOWCfv6dK-yf84k2-eCLbTeVcmx7GSbFJysZJq2gy85FD15Uo3mJxz8HlvfjXrrVOwZzwoh8PZC-amsLVYsB5F6ryUqMo7KbJvVu5NvOV1gWS6bzU9q7KXWwH_9ghQQxOuGJhX_q2P2wji9ZYDSx09t7xerAvs/C7Ea4aPlFX_J4DU3fYXfHzU_dyID4RgSr3qipfcy05U",
                        "filename": "Foothill Commons.pdf",
                        "size": 298676,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/jHnM2lAM3u7wDt7IAhbfiw/DPADFwTqz6S49dYTEBsxnPrHuEgkLWA5Hr-D4IVhS9zmiKxDq6iKnApHmvasKKjb0M2HMz0AwPgFSk37c-9_RNM_9Cj1GlI8oHR0u5a_25TzCmYbgFt7Uo6x_bER1o0m-1Pn87BAow2CIt4kJm7uAg/mN6so9TzkcUXVTagsngEX4j548G1IiJXtxAm55oQxVk",
                                "width": 47,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/SI-O_HQuXznQ-0pKxbp52Q/LBV7cSCT4Xy-iDLbo1DJq5ULjq3kmdlhg_dCzb_EicJ9PjXcTAm0p8CTgYBeOX3puLXk_E_3HwakkOaTD1OVK5mvWo_meIAtRginVIHJe0p0sq9sc8Rp5OcHPJ0-84ylr_evLyFz_C9mJQaACR0Nzg/NGn3m5jr1fY_29ZxkvVxLvB0NhPtzSVM7zcRBkFz1oo",
                                "width": 663,
                                "height": 512
                            }
                        }
                    },
                    {
                        "id": "attVr4KG87rFiPJwC",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/AqLZlW1pvVLhVpGoQSzbZw/lOlEBBTuqZTu5I4DYwWxAfCfTwLmTbhVkwIXeQjlUpH8YfcfWmrkC0055iyhNL49u24ijTtfG3I2-KhsumZ1wvwl9Mgte69Yfkfgi1EWEmp6MTs8qrv2wrBIx3zTqwEGjtIXlxsHnAcvBzdF-xgZd0IJ-tghCJ3kbZmCXMwTZ6wersqPRkSKbzxwZVFx2h33/WdJLvL7riXdCNrDYe6aRentLaRI9VfgZioEtBgfKQbU",
                        "filename": "Foothill Commons Pool Location.pdf",
                        "size": 426622,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/3tKpjY-yNiuqG8_MHQTZbA/y2EYY7VTmQLvV-7-qHT3r929jpdmKKhHs5VxvuaHjDYf7dZhkkLRz3uINEmA0W805eHnTnxuspXieSHo9i0k8v-6hv_2fGTtp6ubwzM_2V5GypKc2NG8gw-KsA3v198SuVFyoShG_b3_nVsTllVEZA/9CGO7PTlPIsEzM6Fs2UOmwJrb2R3tolt6OwWfg9x_Fg",
                                "width": 47,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/mEQZJBv38V-QP1Kn96zyDw/zJojBz_Hbj6cFNl1-y00u_PiF4zs9yGM2Q-orTq1GxQv2C7Ba9nFcP4IMPYSyy4diT72NkTOjy92RpBjkcpcjzYcemmgChbXzCMEvY3FHmHpfrpj0PRfFZGC_upO8oirFRkWTvtdZ15jAEiuS7kNYw/Gw9yPHtI4G63okkAjqbiFghWcplCcdF-v05RqAQ-_Vw",
                                "width": 663,
                                "height": 512
                            }
                        }
                    },
                    {
                        "id": "att6P5iolsXg8N0IL",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/JPpj_63uzVkVnd-XFXJirw/3BGZNZ0dYzPyAYuU9VbJYQ2MzcrrCB94-uDkjj3H8rNSLUyijhKls5WNV2W3ET6Tu-36IEWBZCGhwpQu29xC_JG215MY19g6A07-tcZ0FNP3lkd4_NxfjdAkNPECgtpDlnm-MrN9ha86hymrR1w3I256kBazVnmHzhSNeRsY-UD9TvO5gtjoVr84cIVrEFz7/TqRpoFOtqQgiyQWA4xHr8si5LhYm-HneFq6UKlh9cig",
                        "filename": "159 foothill-woodland Commons.pdf",
                        "size": 342584,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/vvbQ83KEtjihAnRU6XzZiw/EXQHme-srTNKtpITb7nyGACXC1pZzTh6Q0RFb1m3-PzKV1HDg9eOwrRL9fNjxb_qrii2p38_RjU5NX9eCPODFNomzRiwSbtOdtsRmFaoMBhtYwjFnfyFEjm3GWVWhVC1Q-MMeLDK3ypYBpbGLsmlpQ/QTKcs5j1zluto0ePZZnIS9bJvHiJ9r0e-Uy1KTLhC6Y",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/GDPNxwb627GPId6hd2_KVA/yuVUk1N-G7UYa00GU_lNkuPoNHqbW_mqlfmDe8a_f6vlS8kIF7xAtqMeR8u8IWxCLz5ts9l51gUbpOYQBegx02GzgIyMDO5aGh7JqD07uckFR9ICFr24iedEPd48O34dqipRgIThsGxXQ7X6q7gdfg/0hEp0qI5viqWZMmg2oCQ0Eu_r5SD6RYUKP3Hv-xkomI",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "attVQ1C4J7dPA00N1",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/Nk7sUKoYQvAz3Fc4NHTdqw/5G-mxEQniSXFKv_aF9UkfKm2r23PhOxT-3dFf6-vZ0Jzds9xl0SKU8BxGWItkqhqegrjPrWNH9tqj3uQAdRrNKjfl_pVia_2_Phy5PsdmjQJ59EkGehSn8ZVrpUcteU8E77wrI7SpJiCummU1mfbwQdUtypF9iIy-Hm4_5UcSL9G-i9dJTExDDKUOga-05ns6PByxYmAJOp4yL7cCoPfwA/7uhs_BnaOSXitpTJHcsfQFoLn5vwD37H0wx1kusEWmk",
                        "filename": "159 - Foothill Commons Lock Up Guide - 05-22-2025.pdf",
                        "size": 909749,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/V4xnrXhcrj7r6aBg-__7rA/Y4seQRJOjiobJIm0271idELXQPvBzfuWU_eKvhRx8iJWx6urW73OU5q2aXisJRBKnNMNh8iKbfimd_IXaJD6BULj0pi2mKoxmqtXrGEbjQd8DB8E1tcTIsNdUsovmVBetQCcTD5zxzWu3wwMrf_ggQ/yAX6Uwd83cFRM3D3woSC_iHWmP2szbg9xVVKnulRhJI",
                                "width": 25,
                                "height": 35
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/mwVOBTEtLoYx0u3wILJ6lw/zV0Q4H2iOfAkjaBYa3IWPRCcRzST08X03hqFFfc8hKXq6B6IRcvX3LiOqwCfeaH4Arh7fa0Cbvz9gfiKgnYa8h-11LOOVY_SiEUBAofa9BXgmd-LgcXeIGAh9v4cUM-nsHcksHjxbnNI6-mUhjMxZw/TpYvm6jcF2nv6PO2MQjdFJFcNRYQ8JwGRHv1XJp-QmA",
                                "width": 512,
                                "height": 725
                            }
                        }
                    }
                ],
                "Site Address": "898 137th Ave NE Bellevue, WA 98005 ",
                "Google Maps": "https://maps.app.goo.gl/eEz7P8m1esTker8n9",
                "Active": true,
                "Assigned Job Role": [
                    "rec1UASONUxcvY0m9"
                ],
                "Manual sort": "aL"
            }
        },
        {
            "id": "rec8DFLhKoTIY6jvi",
            "createdTime": "2024-02-23T23:13:20.000Z",
            "fields": {
                "Name": "164 - Madison Sammamish",
                "Route": [
                    "South Route"
                ],
                "PMC": "FPI",
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "164",
                "Calls": [
                    "recLcKij0V7UOKoKo",
                    "recpBm2rmpc72pvs4",
                    "recHhlk7nLVp6KkHe",
                    "recvHocBj3DZimwQ1",
                    "recG7ADDQDD8goUKN"
                ],
                "Site Name": "Madison Sammamish",
                "Calls copy": [
                    "recUCiWCg1PtikAsF"
                ],
                "Property Updates": [
                    "recO3QFrFWqSR50vs",
                    "recJGLKViXp8rTuXd",
                    "recnMP9KY4jriArSA"
                ],
                "Post Orders": [
                    {
                        "id": "attS1ODYfideV92JZ",
                        "width": 3024,
                        "height": 4032,
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/Zp2fAP2jAELN1X2yReK-mg/UedawNdt54dokFdwd9wAVTvnVJArDlVxUysdXh_SOQ84cd7nT7RDLP_T6bezpLZh3KM2ArrFmozqmUatYYzBdb0_94LssCX5azQnJgeavU7PgurDPPZl8Ayog9x9uAhcrbe9Z7hXYnpg_MjHntHmkSMMVlKPKSv22alhhBgq2HR7kl9L3YjYxKPlrqAnZ-gE/SL-7RlpIEo4Jl7irNPD6ZdBzrPDIa2GeSgR4CRIvLLw",
                        "filename": "164 Madison Sammamish Serial Number 64384.HEIC",
                        "size": 1045608,
                        "type": "image/heic",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/Pt3BcqTVyWhCeqoJBP9fhw/608Wpuumc3GTLSseGqkvyV7rDHjalzIYW3uBPVr6z74WPopNx1ScY77Unerd1XDmUKeXsAEqkVEwkHH9aZNGVreYuLiM9u5v2BY1uAtB51IuGbnMz0SL4KIzeuV2CjGdjVCC-6tAoEsFRzk1Fw4ZmQ/uonhuaCecCQUbfEjUDeXu3cjLN-BPf5PTWTJzUBedhQ",
                                "width": 27,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/Sn2uV-YTl8fm-IuWyN4pMw/xu4dCFSs0dtwz4cDMY-JlYScCrVbrUiN9DKuR3HL5X5fdnNAbVngbB7eZTPNrBqzqX0gv4QBM0l2SPfeI5gc303QqTlydkKdEfQOCUh7uOT0aW67oeFKOupoyToPifOJRrICgtwbzwp8Y51NhN9_0w/iuGBfjVLcB0T2VEj_0l6z4pb_XNvogVEBcN-SQC-xMw",
                                "width": 512,
                                "height": 683
                            },
                            "full": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/pXvSUHyV1h3lK9jzK-vTrA/kI_kn2WNJxD-jKS0VrjvkGSUa262bFKt-QxoXzlo6DMNoQ_EJiHbvHzCfkOFHQ9Jestonhxd90SlTU4Ak6kPSiAU_Ulm2TO7CYGaZePsk3v2d34Lbu9tlcSNY2UknGXUAoFiZfCOGZrTVDXi8QrctQ/Jx5uRf7dzXulGnh2Rf3hhhP_48LPCmmQ8QxnwptEbXE",
                                "width": 2250,
                                "height": 3000
                            }
                        }
                    },
                    {
                        "id": "attYbkNhlmiVBxtMA",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/PooXKr4J2_aG0ydgTXPF1A/EgpOe1Ddiw-bFvazSTrP8fstkF_c9Usr_siS_FlbwwCA37lxTJb6w7WkdlM_HSrVaFRtUUbaa-eaORpt27_GztnsNZz6QEc0eCzE1hBmt6ifXccoE6kZGhK5dRckNMltgVJrc5gv0IWfSmzavTMxrsS9iuSPBailLNC5RNi8R1k/XdPNPu2WhvoapmrmMue9n99-A1FAKTs-3U75TG50mFw",
                        "filename": "164 Madison Sammamish.pdf",
                        "size": 291753,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/bgPUzwop8awDmsVUyHYYUA/cV22CilT9DxCANjnHBiyBNQ5z03Va4_7xBZPgbsGocal49ODoGsuiqSG6SPbBPgYzy6BThMVnebfKck_6DPPX98zRHvyiUm9bv0rt_GXJs2kCWAY8Tl06ilvAZjpbsWz1C0jm_rgYPOxUVfax5vBEA/L1V0WX3wIfgyOnB9I4KLBd3fZWcJB5yR1ngOYibsszY",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/hUMHF_k0KvzRNXh3K5pLHA/f7v8q1v4uVv3iiZ0r9hsMtfKX64XznOYLzzPh5ZkOVy-G2yNn-imPQj3e5-rP2FvMqO5-j6ekxr0laKyWNaRiLKg1g8hFIWVhTmP_Y2ARRwAks8Zi4UNAF_db2Dw1Tya41Exhd93vhBw3f3r81NvAA/FKdM2b7szdjFxqPjk3NolgMRJHBhC_79gJGkPL6J7eU",
                                "width": 512,
                                "height": 663
                            }
                        }
                    }
                ],
                "Site Address": "3070 230th Ln SE, Sammamish, WA 98075",
                "Google Maps": "https://maps.app.goo.gl/wsJQqQ41EY7mzzf36",
                "Active": true,
                "Assigned Job Role": [
                    "rec1UASONUxcvY0m9"
                ],
                "Manual sort": "aR"
            }
        },
        {
            "id": "rec9xqLooXUqi0Yg5",
            "createdTime": "2019-10-01T19:05:14.000Z",
            "fields": {
                "Name": "195 - Canyon Pointe",
                "Route": [
                    "NE Route"
                ],
                "PMC": "Essex",
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "195",
                "Calls": [
                    "rec6aQZFmlFIokwae",
                    "recitFo5SmpYCCFtd",
                    "recNyxbNSEk4tQa5Z",
                    "recMwO248bd5rqcr4",
                    "recVrOPa7j31qxb8U",
                    "reclXHpMgHiVk4xvS",
                    "recxUfW5hgLOns0Yh",
                    "recIEMhHtIjQEpvU7",
                    "recu4D8xjYqvgHaFx",
                    "recjRyc6B6mbXoPIx",
                    "rec2vMmlNCphWsQTJ",
                    "recvvL2vzCZii5FDp",
                    "recxctVlu5fW9dTtN",
                    "recAC3JLJXA8zbtmO",
                    "rec2g8KZa3M1ehH9Y",
                    "rechGBS5IyMm1l8hR",
                    "recZjBKBTG09XuTCY",
                    "recSTTnMKZoZvDrFu"
                ],
                "Tagging Vehicles": [
                    "recn3G86pY78qb9tK",
                    "recw85YLAJsusQM2K",
                    "recfyFjeGUySIreI1",
                    "recnW0wgVjvBTpu1n",
                    "recuuLwLZxuphpz9U",
                    "recxucgXufW3bYs9l",
                    "rec8TyoSB4MD13ou1",
                    "recwHZU2UKeGc1Hxs",
                    "recCsVdAZ1iUSGosw",
                    "reccu7rKDD1i3VHea",
                    "rec5RvoVfbxhLHNf7",
                    "recaGzsA6SBEDa0j9",
                    "recz14vaqooqUwsOn",
                    "recfrj4Oflxo3ffeR",
                    "recAazbha55GGGc7L",
                    "recEE3VqYgc6HFbgf",
                    "recppYyiItJKTlLn5",
                    "recpMun8U3WBkuiUB",
                    "recgRLlcJWdzqotXE",
                    "recBrwXfMwFp0JGSh",
                    "recfaxhBF3Gv7bF9A",
                    "rec9rGFP1sr6BLjIT",
                    "recZaEZmEm3Fdszax",
                    "recRafU8WihIaAeLc",
                    "recdjFA96VdFG90Hk",
                    "rec4s3UsQFh7PhJpN",
                    "recvXXRiiZRDx62j6",
                    "recY3VkVZfBj1eKna"
                ],
                "Site Name": "Canyon Pointe",
                "Calls copy": [
                    "recTvRJ6Q9jfPQHBv",
                    "rec6l5xLzjd2XRsUw",
                    "recHzpHZev3HULtu8",
                    "recgT6NaDu4m1yOzo",
                    "recq3YJYB2JhAigmt",
                    "rectvTjHgLn2OYVYq",
                    "rec5wEFJqXi3MZWrG",
                    "recXOBAAxOyFVAmHG",
                    "recxIrysaSJfYOoiW"
                ],
                "Property Updates": [
                    "recR6wXno0hxf1Vpt"
                ],
                "COVID Closures": "\"6 - Wandering Creek, 25 - Fairwood Pond, 153 - Castle Creek, 154 - Emerald Ridge, 155 - Sammamish View, 156 - Cedar Terrace, 157 - Bridle Trails, 158 - Park Hill Apts, 159 - Woodland Commons, 161 - Palisades Apts, 167 - Evergreen Heights, 170 - Delano/Bon Terra Apts, 171 - Elevation Apartment Homes, 174 - Redmond Hill, 175 - Vesta, 191 - Inglenook Court, 192 - Ascent, 196 - Salmon Run at Perry Creek, 159 - Foothill Commons, 194 - Pinnacle Sonata, 197 - Stonehedge Village, 195 - Canyon Pointe, 168 - Highlands at Wynhaven\"",
                "Post Orders": [
                    {
                        "id": "attFtZgDl3NoFrNDa",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/DyoXRLOYxos0mG7q5NsJrg/Meb4Nye4UA8QxbMvUqjhgX-RX8OVvpQMU7jM_nwdPuuao2EstQwdJK-pqgbOztgevvFcog0g-WpNHqW-_q229GOAudR3dLkxdackGrXvyNvvaw-gWcVRdtw22Dgq2OO74_iOzjkB0UYtIPH-0dE6SMeKr_B3SD9IbbQVN7lVZqw/hFDm--dB3CrrhAD0kc0VWASnOWHJ_IzxBabMacvasKc",
                        "filename": "195 Map 2.pdf",
                        "size": 555239,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/dUPEVWYUt6ljV2zA1Cjuww/D-tVS7ZFm49R0G85T0tRkYPToVTpCu8mHGvYYX2UsspxDlmbXq2HDDqx0kYRDByH6CYlEaDR3MzyCO1qD-A-UfjsuIA5Em06xyB_ZDeYnenA6gIT7AMq6vU_zZsRHcgBYPQX0Dd6Vj5snFEMwxsN6Q/lZW9EtYm6pRh_pXRO01iCTg1NSEATpOzsum82eVGIDQ",
                                "width": 47,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/GujKmchIYMWn9zxLHe1k0g/kbK54kYybKpchGke0ZhIB3Y3hsXaiVWux6ntSUNpBg1AHwe2ZE2IrbSZjSNjBRl_GRqeUp9PNtdtD55Zg8c8xUQgRnX6curO193QIemrWOcVPSEN4buOOtrZYwi8bf4sXaxtA8gTJlEzUlmxXGNuOQ/fezXdMHbcO1gqwC4Ovn9Sb_cKDMEm4gFeMImKPqodDA",
                                "width": 663,
                                "height": 512
                            }
                        }
                    },
                    {
                        "id": "attmWfo05U8l5Cof4",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/x1mNh55tT8i4GBKeA1pMww/3I4vuJMbLNHJfhxdashy0Z4Bxkc4IpWR-C2psnYZlCHiOx5sIi9qgRkQkp_3BsfrFqmARlG2Zs7dbkdCqZvs504LeuiqKV9AOgFQux_5P4az5CsTS5gZ0pPZkAA-j2zReSlQ83PnGZDBSuH7X2w5wVztanYbbXtibDtkhFK6yBE/XcEoI27FP0W5ewAZIWTSJdaDCkOP1zpEXz23sjTcD1s",
                        "filename": "195 Map 1.pdf",
                        "size": 11565029,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/3i3QNVkKgFSaN-3WDDhDzw/9Sdq7F0sAVuKshIFT74pZobbXf_G2lVvqkbK8_L0gg6YbYXVulm3kAnLuutjs3vBOBAKmF1r_eDlZuYYEMSMJhekGQEknE9ZGZ7BqhdLi4CbmwiJW1dXVzGKLy5DgE7qroQWRVNWz6QK7jxqrqk7Ug/9adrbn4pHYGyDtaT99wtdm31p5PRpLY2roFrJ2QYkM0",
                                "width": 47,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/I-IejSN8HfOwNHkgWET5yg/zWpJqYpCWMGzhaetmetlZjCaXtfQ5KzhvHF1qBXZQkBhfboN4hliXScCHe6vLi2Po1MCTQBNZgXltdd7fkoXcGL7DzrSS5br_X2q9vY0lOFRbs2-5gZmlIMg0vtwas-XPUDHFsN5EhJcgf8wK8l6bA/5-RV-fKLj8Zhfg5jWWityyddJUuFFCbyC-14ZYahQmQ",
                                "width": 663,
                                "height": 512
                            }
                        }
                    },
                    {
                        "id": "attNdGRW9wh8ooYCr",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/XkPCv3JeSgguUMvQ6NqSlQ/pi-4n7kB_z50i4rwWXXbO3pGEUxip9Q0hhB12Dle4_5oHBEuFBOMlDF4lFNxC3Pf8Hw-4IS-WO6N3-GcLeWxUfKL04NIFB60nqbWYW9jJcRESvQChNGqFr64hqV-e2zDEK2cYOXx6CSH67zV74kJkkmCdAucs0VtSTxF5U45Svk/zpLIbqMzDMrT2z1LRivmCFjRIxdepLooeaVZatpVW3k",
                        "filename": "195 Canyon Pointe.pdf",
                        "size": 70687,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/iTXcTwaxp4rbwFyCri6GGw/8oGHdLSAV5pLnrL9693zNEp5D6NxDYq-AxgFB5hrMFtQjnKx31t-ShPMU0_n2R3JsvXe76fNEJIUnV7pIbwSjssVPYWEipj4yVO1mOAkKpWBQ_aAQQdWmX6bNifBegMD_vAoizy4rNDAHhRAaoyNAw/L3-oPDW4fnwn2z8KIvr34KfeIGQ8z_8PEYoN340TjXw",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/25WESaKdjP0f4ZFjw-QNlw/iCYM44UPViZcup-sU9ecOFJ6Yi90jF5OpBvfuQzCt0CY_OLBKPNO5FrrM-jjWdZc5lQ7xAs6Rli5fL8vsNQUeLuqej2tzXqb_z3Oyw9B6MkXJxXl8fHRpWdREvnDkOjgAKTrD1S0SXkZtWyu99MHQg/tYAdNpCp48R2cjAzKTBZTHh_hceF0DbakXVauvz1LDM",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "attGlNSilSl3b5jHI",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/4wkc14P9qnkU7IC1fp7kZA/NirRXkTOm0B3qePDIy2FXliWlegFWo0DrQTX0WiFRFFmTxpp_-dUVxZ_30e7TJZg04AhY5h6ZXbwCqwMOW1TCxK2fZzHOEZ3mV_8SrHthKxz2eRT2IdFYjDYLT5GnnW0uRV70Ho6SRnVdC3UXvX3Xn62rKBOwaqHyA3AlA4g2P__aCtC0UwWWy4qVN59H8MshCGj33gezyL8ttmrBCWSXA/wgBK_d66YNiTLdAqYu6rUthNsDqkl2u2G8rqFOddIQs",
                        "filename": "195 - Canyon Pointe Lock Up Guide - 06-12-2025.pdf",
                        "size": 1036474,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/VLUpj1x9NYVjFstfiiswfA/sn7WNDNbdOV_vHGgDO3iGdzEyP_c58UQvNGVQ5LZnzVZM15FvB0zqHK2o7e2omoiYxIvwR3lI-twQ4dwUVtdDEI5uoL3ExKd6sUlKrO9KdSDLr4BTikJ28x8LbdPfDUUIHy61Hm9NElnyQiNQSdm-w/SRDPM5L6JPkdPJXuhA858k9Le5swBgOFnm2dB5Tp1nE",
                                "width": 25,
                                "height": 35
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/mJpa7FyCrjMxuZquYKktbg/4iDz81WRnqdf0slk2K4Z0G4LzQ3Ex9zivI5kEydV5PzIrgsajFioXjv6VZw7PmWrgCDoViYdnRZKsWJsW_rDgP5eaf3Zyk05qW3vWPezM-qQ-zfL_uvD34enRaq4i5E_y_lWNQ7QHBVsawqBu3cSmw/Q84uTKlC5dzGsNGjNvWFNLa9G9NYcPcg3DaG6QTg1SA",
                                "width": 512,
                                "height": 725
                            }
                        }
                    }
                ],
                "Site Address": "1630 228th St SE, Bothell, WA 98021",
                "Google Maps": "https://maps.app.goo.gl/yY8zGNdhK7SCBBJ69",
                "Active": true,
                "Assigned Job Role": [
                    "rectLGnMglyXQB2uM"
                ],
                "Manual sort": "au"
            }
        },
        {
            "id": "recAIshquU5QxnmLa",
            "createdTime": "2020-05-21T00:31:43.000Z",
            "fields": {
                "Name": "ALL ESSEX - ",
                "Route": [
                    "All AOG Routes "
                ],
                "PMC": "Essex",
                "AOG Property Code": "ALL ESSEX",
                "Manual sort": "b0H"
            }
        },
        {
            "id": "recAUTt2RMwtCDd1G",
            "createdTime": "2019-10-01T19:05:14.000Z",
            "fields": {
                "Name": "161 - Palisades Apts",
                "Route": [
                    "South Route"
                ],
                "PMC": "Essex",
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "161",
                "Calls": [
                    "recoOPhiwwyyBcz6U",
                    "recofw7CZsIGKGGn7",
                    "recFq6vGPppEjLgGq",
                    "recEKRbsjaPmLhr92",
                    "recHsQfM3sTyzk43N",
                    "recwZSLFBk1rd2oU6",
                    "recypsnOIoNQi1kS7"
                ],
                "Tagging Vehicles": [
                    "recnxXgjCAGc1q6Xa",
                    "recK8FR3NeAJEO4I3"
                ],
                "Site Name": "Palisades Apts",
                "Calls copy": [
                    "recbhIHOSTnsTnPWJ",
                    "recbaeEyGvElbNDx2",
                    "recyI5NMGPcAxtPtt",
                    "reclwwk0RZ51t1Edb",
                    "rectnbuQu8RcfiGTN",
                    "recmTASQEJQg0qOaI",
                    "recT3WLjdGaWy5VC0",
                    "recvguzxjJ2I6Nec6",
                    "rec3o314pzFfyTXcj",
                    "recf47xwd4glLlCCl",
                    "recLAkmEMZcdxKUHL",
                    "receUZOBuBoMlXWQC",
                    "recfIyz7hoVcRR0Z0",
                    "recXwITQAwOUXo9QH",
                    "recQrr3cEQDoZ36yX",
                    "recAOesEyRmSMKaHQ",
                    "recv5kImMiM0G4peO",
                    "rec1sRXdt7Vv80TgY",
                    "recM6UOJueocxfWaA",
                    "recPCVRI1EjgR2KgF",
                    "rec09fIYuWrkBGanB",
                    "rec2ypHwTvFeJpdAD",
                    "rec2UJvaaT3q1qmgB",
                    "rec4h0stV1KEawGkj",
                    "rec51AQ1kuOhX47xH",
                    "recfIAPn8nEEEnXjf",
                    "recqOuV7eeSaGo5wM"
                ],
                "COVID Closures": "\"6 - Wandering Creek, 25 - Fairwood Pond, 153 - Castle Creek, 154 - Emerald Ridge, 155 - Sammamish View, 156 - Cedar Terrace, 157 - Bridle Trails, 158 - Park Hill Apts, 159 - Woodland Commons, 161 - Palisades Apts, 167 - Evergreen Heights, 170 - Delano/Bon Terra Apts, 171 - Elevation Apartment Homes, 174 - Redmond Hill, 175 - Vesta, 191 - Inglenook Court, 192 - Ascent, 196 - Salmon Run at Perry Creek, 159 - Foothill Commons, 194 - Pinnacle Sonata, 197 - Stonehedge Village, 195 - Canyon Pointe, 168 - Highlands at Wynhaven\"",
                "Post Orders": [
                    {
                        "id": "attjMBU9IiGNhNqin",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/kd7CDW_eaqJZewqgYWU5XQ/Hx09ZZdqfcgIjkfei4dwzthy5iVHE9DYqByTZcex97gzjCC8YDMTfT_43hLuxG-uQRyfQZG86BbgwMJtHMsBTTBSZc6bdQ7qFf0GWfc-8bKYXfYW9gNELmkFLtgK-NsNRwgCOKp9yvKdJB2Zk0ROUbtGt2m5Cuxkrxb9Bb6ajnU/ZNsJ5J7u5p13bPrfSdwzZPTASPC6EsosL10GKYL9-kE",
                        "filename": "161 Map.pdf",
                        "size": 4411322,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/_dwNZcubGwwV26xP9XdgrQ/reETkOdfNxT8o1zRJdhwb5SbUAFza9LAedYFVD-zogPq9z-honeH5NXTLOxIGB53yVTS6ErxicEibBZahHQEihkSwIKEDClNcOfSDm5kgLRQgs_OPQR2c5YWgpfJfiunZqFzJoxT1WijCwDj6anfZA/cads1cBNGdTU7euRFIeToox0fgx2JHOzLKKCSCjlaos",
                                "width": 47,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/Kl4gk0Gy003Mq5QsmtU0ZA/NA38IWRP9eUuTTAGxx9XtZoExIeyiuPg_jIJAOOa-PHkj4bazeg14oeL7B6_niFDeAAseyEFDISBWRhaKKkkbBAlaZbtBFfF0SeHjK3j8CGoxw4fwBKRIy2AXCoz4h9aR7kuspkZ1ohwB6X6Oi-oOw/8GymwboQjdlSKpP-1oZChfyqJwyECwwkfn-rlmfIixs",
                                "width": 663,
                                "height": 512
                            }
                        }
                    },
                    {
                        "id": "attX7UEWyPxLE5zaA",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/NpQx5Ri5fqXaiZTZO4YxRw/vciwqCwlgDKeWilm_1TW4lg4TFReStIifEsZEDeZlp9juCx_O5CATmk0_GL9FIEIkP8lSE33jF2cOw7ofJDgTY48dquxoeHWRKOeDxIaQet4zdw81x_hSBbYcI9tTVl-m86nEgAMU3UdfCU2FnOj6qw3_3hhhO0Nd8-280rkwJ0/YqpyVr2-LbIIbNjZ5IGn2ix9CQS95s9D9xG5D73NQjk",
                        "filename": "161 Palisades.pdf",
                        "size": 81050,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/SCrG_3qo7JCs1RW52wDnyA/VJI1T1sP88oYRZ4g3DzckrgJRRQM7Z5iihxGdqYDIxeQICcfNVm5ymd_qWR6e59HGzvxAYk9lURDr40tdfq4xGfKy8lu0PgRYwfc4tbzgWI9IAPCZTe3zIxUchGkm54pEnzrKWD0ILzdRxmXrwl5Fg/LhOTEdwgSGzfljE9rhJwgItELYAgYnZzxPkRxPOx4hM",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/EQpqoHXrXEhrged5kEmddg/VL1dlCRcub2J3fxfClqBowsOyzW6U1DvMvncTU25WPs3IthMsd5v3kbGRxmxNxSedw5RC_SxHiboQlL266bQUSMfvlu7j93VeTkycNyAkkXBTcSB5bGh_KoBbpcPkiJJjnrwfUP5ciJo2W2o1Zs5tQ/aFWU1_5OqkUK86Um6TsH5x09ThIjFqBi6fbOtZKJdtg",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "attHCyvfkio4RGDLn",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/1gCg2sf3cR7gyyzFd2szlw/yXdOKAa_9C6hQOfDREQRJCmyE6zNJlQJfnMi1HbHoteV594Qj4RHPndKmFX6sdHj03XBuk_78dsDJllNRj8KDIhDvRR_NW8xx-u4Y7-3PafeT7t-6728a_ckv5jRnJxSVwzmxXe5zI0JX8tlBNZLnA0uSDX016E4RHiwItEccckA-nKgNumG-3BpHiNyqpuS8L--E-L9HTYXJCMSNo1ZiEojFRHFtY_I9Iu_2NUT-P8/LbVathPy9TmqlxKM15LT9ZzTuq8NEGzLE7DKvz_4a_o",
                        "filename": "161 - Palisades Apts Lock Up Guide - 2025-05-22T00_00_00-0700 copy.pdf",
                        "size": 1177392,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/_1LHdMwVn-7QnLaGoBZrXQ/ivjF26RXyXqJgCuxzSTeqhpwzkl8hbthihql0bZWRvWEDrQD8y7XTnvwK-e2HizX5bfvh0cpAGSBbdRYpQVQLPmDrvxksrVkFyL6O90hYlJI7Upx1qGNyCEZ2ngRKiMcZI6Ch1xe9Ne_LfaGwpU_Uw/QtBAlXPASt-XKdzjbGRolrTS-KYmrufKSZyW0-0gDQ4",
                                "width": 25,
                                "height": 35
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/biTMwdlhhKuUoU5D0ehRhQ/s8kisOwFaNuo0xZacn27HROc1cifkc1pa9W_XbSKamhqRo4sA-2PBIznu-wWLJQyJMR5Uv3-z1-zJ23GJDvX8GbqbFrDvbLtPDhmmrpOZ5EN-lWDL0ZsatQXkyuetefYeyzPZ4vM1-AKDzhsle5K4g/pM-LNQbsNcihFh4jd42__QT98VhAtAYrlfugUyENJis",
                                "width": 512,
                                "height": 725
                            }
                        }
                    }
                ],
                "Site Address": "13808 NE 12th St, Bellevue, WA 98005",
                "Google Maps": "https://maps.app.goo.gl/2tTvN17SzmR31Ee78",
                "Active": true,
                "Assigned Job Role": [
                    "rec1UASONUxcvY0m9"
                ],
                "Manual sort": "aO"
            }
        },
        {
            "id": "recC8sSycFQb3Wj2r",
            "createdTime": "2023-02-04T00:12:13.000Z",
            "fields": {
                "Name": "37 - NW Buildings LLC",
                "Route": [
                    "Perm. Onsite"
                ],
                "PMC": "NW Building LLC",
                "Status": [
                    "Perm. Onsite"
                ],
                "AOG Property Code": "37",
                "Site Name": "NW Buildings LLC",
                "Calls copy": [
                    "recqdReQi3Kk9s0Pf"
                ],
                "Post Orders": [
                    {
                        "id": "attimewcOn7wyFd3y",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/SPjpUNk7bJM06n5rZnYyNA/HGbI6MWERgM4L88IurUL2VQj7C_7w6nzfCCnABDmYNROgTi3EKvbi6YmG3H7GbLVF8JhatFHmsuBcz0ohTIKN9IpHmWiQJ2uo7Zsj_UjMk8Dkzb1UIYukluD5XSkVne4RkqcLZz1YC5ZcFExwhv8d3fyPfUkSPLA925sGhY8vV63IQSMpDaM5NjFxWHFQbA9/QmrXZSbyaJHAy5AGZDZloVSXNY511T0lgoighmAjx7E",
                        "filename": "37 NW Buildings LLC.pages.pdf",
                        "size": 1459716,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/r6FPIgx5evdRaTpq4-VO7A/TyBRh971Zp1yj2hywy8CmrI3FoadSwbcqVpkQ4AhiHGk-0pqhILyF6bmf5YaNGGehqMDOVTkH_IufxC4LuDCc_hijmI2A4bhZno3-BOIseChCcSUELGcBTdGmRdZkA8Eq0p9fAwlEoSf_FeSWu7ZHg/tGkoNDc3MKqNnM3xgIzJbct2rgy1GsHtwTyaCRmIxG8",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/YhTYHoXBOI8FONUrr9b3jw/k5s2mhefpiN6N0L0AQT1ihMEqWlGvQpZQ4zQSzkmDx_TuL8PS_k24iYUy3Lw8u2hSHYoUvLSeYWfhBO8nLOcFqI5oryuK7u5JtHa0W0mO0C3KUHxSsozUD6sEu_WbdSMv3soactDvskfw8Wws4EyDQ/rMF8fu_FKSEAPE6BnXl9cVgPIjGSmdM4Y9WOg9RztVU",
                                "width": 512,
                                "height": 663
                            }
                        }
                    }
                ],
                "Sample Report": [
                    {
                        "id": "attaD6BO7u6lrT5zP",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/S2K7sVo4iR3CJK7D_Oa59A/vPRDFkxW8hQYnTXuYmU_Z4LOnafljuWoDwEQPb01boB5rGTKs0KVTCl1q-z-QEtq3PrbKXoWkoPOiSss3m3GAR0hgHTr51jguKwGey-JToirKjn3WamywZW10p0fDo_UaN4z9DOTpnExgUzmRY2GcKPwsQm-wjhBZ0k6N_jxWHEZVrNpnRqOuXHKYPWf-S0uQysYJi9aWbyo9mo6yyRCeVoQtaQdAfK0DzxuIMjHuUc/cbtRCXKcOiZcvoHmlaBF74o7sYozA_RBk87Ipko9-8Y",
                        "filename": "Valley Freeway Corporate Park and Kent Pacific Business Park Report - 03-26-2024.pdf",
                        "size": 1963025,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/MzYpfAnguTmc9BaijxG0SQ/INqT4NtiKByZDVjF5qxORJLZwpy8LQzqFWSmbEwkDAJ8KKe34U5yCUrNdPfRKBWyDz0C7GeN5eJ5DkxZ9k7xmujJhQl8usDqld97sbnrx7z82IICX4WbI54h7mlFkyQbylec4hREKMZSUZDGWzgYNQ/e83Z6s3XYkdV82KS6Kel31A5d-pPJKLMXCZ-uDIoH6E",
                                "width": 25,
                                "height": 35
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/uebDIHvVLD_v-m-5avqyfA/tXgThdB1n2mASX_jKhZxc0v69tRaOjBRdLXlp6XAj1zwEgUf93rRta3QmkvIxA3e0VyfMCYlnX4XSbY-YMTXK9YWjRZpcmOl_owsEpI54RGefkpkMKtLFERiT3-bZH3KXwrWpQ98Od2LXVSZB8gfYw/L0zsndWRstBeB4i4GSjdbdABixm3hQ0hVFAmNsiEWZE",
                                "width": 512,
                                "height": 725
                            }
                        }
                    },
                    {
                        "id": "attXlhhMZS3AyY7T5",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/iZoDfylU9AFEuMlFFXOTiA/U3MmvZaUPasT7oTRI-t3B2ENrTkh_QrwmzmXw7kkaO1k3YugNa3yfhcNK_i9QW9ZyuRVlXCoQM0BhsgtSJGqHDsMJQL5yXvNIS_01IxF-hThmg94w8O_8DEf3woixRdbQMuxP2mGqowC2C3FLLwm7EqdhGk__19Y6g8x025VtIfx3sQzfBQMWWkDeufOaog5VLyl15i_nZ9TsDoY4Z-39wsvZnmERis8wnQz-QvTJsI/qrJ6o4NCwEtP85IMpsy3-59ib13Hh1W0gE2otZ7BadU",
                        "filename": "Valley Freeway Corporate Park and Kent Pacific Business Park Report - 06-25-2023.pdf",
                        "size": 4468557,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/1MJFZskPOHJdGHQrTxTO4Q/-A4eGWw3zA7U3-9TGnXK0X-t4oIgfNHtk7xfkk_idqSuI5L-OpUvgrnYvpUBXZwBZfndAjXip9h9kNd7_KNMbMobShHwwM_0Y3e6q1QinAzSocgTCbjOu8H4xLkf9f1RhTo3ya-hHhX0XCG6xzQn8Q/EN8iz6TNPX9jQZVjtpUowg40J83xUfGs_F0MuwkvUZc",
                                "width": 25,
                                "height": 35
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/8H1XQ7iQm8mXC6EqEVYEHw/XWfZQgwN5-Ih0QPZV5X3m3QKq0vEjU2AOO1kktsXzOg9s5SRnYKiiwwYESEtUNU4YCbgEDa14E8LVOTtF4XFB4MfEkzuwBRj8ZtpDI2nnH-OjIIfDYFWn-nMl0tgXOq3ZtyCwgsrZcXjTPfhogH6rw/Tx90i9180cwj7lgL24Z6ozZZgLKd4Nj7Taiw_rZM9pM",
                                "width": 512,
                                "height": 725
                            }
                        }
                    }
                ],
                "Site Address": "8623 S 212th St, Kent, WA 98031",
                "Google Maps": "https://goo.gl/maps/pFydXJe9j4zUJtre6",
                "Fast Field Username": "training@aogsecurity.com",
                "Fast Field Password": "Guard2022",
                "Active": true,
                "Assigned Job Role": [
                    "recQKYvEuPm5J05BW"
                ],
                "Manual sort": "a5"
            }
        },
        {
            "id": "recE3JTiecfqhrQpR",
            "createdTime": "2020-02-02T21:33:32.000Z",
            "fields": {
                "Name": "186 - Avalon Esterra Park",
                "Route": [
                    "NE Route"
                ],
                "PMC": "Avalon",
                "Status": [
                    "Perm. Onsite",
                    "Patrol Monthly"
                ],
                "AOG Property Code": "186",
                "NE Route Orders": [
                    "Patrol",
                    "Clear Cabana"
                ],
                "Site Name": "Avalon Esterra Park",
                "Manual sort": "am"
            }
        },
        {
            "id": "recEjmkdAJusTPE2C",
            "createdTime": "2019-10-01T19:05:14.000Z",
            "fields": {
                "Name": "153 - Castle Creek",
                "Route": [
                    "South Route"
                ],
                "PMC": "Essex",
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "153",
                "Calls": [
                    "recVdAMOQgfYIHvbi",
                    "rec5e54bjE9OYbr0b",
                    "recTJIIp8HTYFS64R",
                    "reccqizBJGnNQZNYO",
                    "recMnAL1McCoiy2fA",
                    "recsjDGZ8iEcn2kvR",
                    "recE8gdIAIdaY5s6G",
                    "recxDgfADosAFL13i",
                    "rec86leyXcoOrzU3G",
                    "recpjCZMTLmWFB5W1",
                    "recaH5wEBiYz7ALRR",
                    "recPoIFECZWQtY8Ix",
                    "recOdwVc9CAHjAlE8",
                    "recRFgHfY4chqkHrU"
                ],
                "Tagging Vehicles": [
                    "recWKELz0LzGWQMyM",
                    "recxIsj2TjkuMuZHL",
                    "recRNDqv1c4QBmv3R",
                    "recJT8BtUs5uqt2Nd",
                    "recunN1Kp0n2IqhJF",
                    "recByLlK7udJyz54k",
                    "recMf5GS7FQCgOprq",
                    "recILhW0agtIYSuuC",
                    "recN8SUNWtP9bvTv4",
                    "rec01GybJugXQydvC",
                    "recX2CUbnw2LiwgWm",
                    "reccW3mxgRKBSQ6Jj",
                    "recnN6KbslzKHqYZi"
                ],
                "Site Name": "Castle Creek",
                "Calls copy": [
                    "recJhGsmkcDmRYlHZ",
                    "reczuKbbebPcIQh3l",
                    "recmNjyhw84fEDS6F",
                    "recpfTtuyLfwjQNIo",
                    "recziIUAjjtYFZVo1",
                    "recwLUfSlZIynioqK"
                ],
                "Property Updates": [
                    "reczkXK9MUZlNcYUi"
                ],
                "COVID Closures": "\"6 - Wandering Creek, 25 - Fairwood Pond, 153 - Castle Creek, 154 - Emerald Ridge, 155 - Sammamish View, 156 - Cedar Terrace, 157 - Bridle Trails, 158 - Park Hill Apts, 159 - Woodland Commons, 161 - Palisades Apts, 167 - Evergreen Heights, 170 - Delano/Bon Terra Apts, 171 - Elevation Apartment Homes, 174 - Redmond Hill, 175 - Vesta, 191 - Inglenook Court, 192 - Ascent, 196 - Salmon Run at Perry Creek, 159 - Foothill Commons, 194 - Pinnacle Sonata, 197 - Stonehedge Village, 195 - Canyon Pointe, 168 - Highlands at Wynhaven\"",
                "Post Orders": [
                    {
                        "id": "attoJGCQcJyRrR9LW",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/FteKi8PVmpDkdCKQWT5I4Q/RxOCa2sYDz-DIKEcmXf0G1euDhSTKRoQJXWWDefOgMklhTOhLb9Ou7ZMltl-kITpq8UPOYSLaSg7p42KLOJrlUClIWT08wEJFIqyDql1OP_ozKzcouuDEe0Nej8u9z8WiFeNniIiAMpxhJsgpEVU26lPgttDPO7dcY0H_FPFWvVbkKxUvNMPuW_7SH5pkpBN/Y1r2JhjSzs3BDE3yLwNoT60AbtUipRoSMEw9hH7RSsc",
                        "filename": "ESS_CastleCreek_Premium (1).pdf",
                        "size": 10403013,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/4Y4_mcqvN2fqAlYHC2Katw/58DZpoGn0jVRixNpwnKZA0woqmEW3kdBymZUY8h6fxeQ2kds6EGW39JqZ_5YpJV3X53S59Ev13Z3lx_9K4aWnXRWhTXJ9R2LRV8NVlUBd_Y05dP4Us5mZPRsEX54Dl0Q9_5OaGDJbsWE2HFwJsL6OA/T4emk4x_FYB7yDAYVJbw1Th55dq4UWKKgt4lHQ5aQLc",
                                "width": 47,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/wkGzJrmKFxkgHa8F89T1FA/OtLQxAWiscCFRKXdKHGlieKzVrc7GR8PrI8UGRSCAaqOzhHxeHFyQsy7NCbmtMVzyeL-kxxMBC6nPV_gFjLg0-0nqlCne5ateyqAv0umrFWWv7HHBycD1LzKHKUoreVCWTltYD4JpIFayCDWXDZxEQ/_Su0uhx6xNk4SgBMFLSfN7oDhushM_mNNRclq66__X0",
                                "width": 663,
                                "height": 512
                            }
                        }
                    },
                    {
                        "id": "attnFjMNxpaA4j555",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/R8nS1bWIFDsBRLBfOUGyHA/Gn8H7snqvbDbBxqtAAj2Zj6Kb1Chfcq-gmqqgtZU5qYaLxbj1q9BUqNQEKAahDhW19-u4R45ISlY2doI6wtKXp7RBuxFeiRJjXcJ42VmkBb0782qOSQf-imnGd1kqkj0cT5b4L-paOK9ojfPtd7smIbW5-x5dV6BYwD1BsVa4OU/KTCgmaAr92zS4M5Vu9rMISLlDAs_uB9YnpveKUnIezg",
                        "filename": "153 Castle Creek (1).pdf",
                        "size": 302816,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/nX29VUSTPMfpP2-ruNA4lw/QHfAejdpfkLlzaKNi9b1Ffpv56eah5b3z7wVxHrCzoCqfN4rhLhBs78n4YWlxVMjDw2sD6FXtE0t2lvQI4y8cz4sam4NhamGxkhTycBTepjIzYZL-pZ9jlFz-a9-7f2KH3x51NT49qvlb3NHfV8Yow/sskntLzEpYP3_ljvBCRZeno5GI2o6LGFqeMr_5e_DC4",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/QwaqQbKdB3blxCTad9YvhA/do979C8Y1NNKCM8GI_a-8MVJ4AoA5VCoAogKw6NljoMXN4pfZs_Ly_wbI-J-kHxwvnWHEm9TfuML8tnw91rcdIaUqvQik46qBOvouZLBjUC4N2jSTmfnQKMVNkNpumir0hxH7KlZ5WSUvqz0Q2IGlQ/9qzQWZ41xRC65OQBmGU6m1yaa81f2QMSKey5Dc7L0Sw",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "attAt6FDnXg9OGbmX",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/f_6lrqeXfFm2N9lbOHBIIw/cZTJ4aGMKnJEFfUCHtLm9HAFNhsingLv4CXKWAq2GdxeAzyPBWFcI32OoFnBgwoQO9ozTjuOPv23k3FHRjSJz9O-ErBv5WIEPCk5-4e0XEdWPF060exnvMxaQJbzl2M1X_XdKB_HbmIZTXufWvtIxJaLjNgzDaCbTvtL7ut5pRoFI0ELWrBiiSivLHVVrHZCicUenLOYd5TEbL9Gdbidfg/gvXBXJucaH_kEkvif0bfjNATr_-TAXp0pgJpKRIF1qo",
                        "filename": "153 - Castle Creek Apartments Lock Up Guide - 05-22-2025.pdf",
                        "size": 849326,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/gY2nJLOMem2Vz9MpGDhC1A/uhkljDzbitZZQTXh2qelN69ATLydjuUG3WEqNPlGQfs16L9fxOKe_jfNPuDAet8J3P1epRZXnJWhM66FV6xY12EXQ0F14CDQW_5YFJpDbrQdIpkEkkxv1PZkoqKy-ovw0WtR0PjddFi7j7l_tU8TrQ/0uv91P1c_0Gi080rSvUH6WSipgoZZCjHLvDZSdaUJMc",
                                "width": 25,
                                "height": 35
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/qo3IvY7OkD_uUFSn6v5lWQ/KiftMLccY9lpDIm5ykAPyTlHOI3xOOQUuo_uV3l8mnzL0ldOpnCYETrMUHl-ogZiZtEWVBvB-j7O_oKmVfcmB_pPHndudqCLIoBlJ3axkgm1WMg6onilLHXggmxvJr3PFDVCCGzzrnbdgwTe0kzdbQ/xl2CFkEJcZtljTDs5j-fLpdrbIMU94ep9ZAgrCeDdcA",
                                "width": 512,
                                "height": 725
                            }
                        }
                    }
                ],
                "Site Address": "7000 132nd Pl SE, Newcastle, WA 98059",
                "Google Maps": "https://maps.app.goo.gl/zDQN7RsM3kb77r3E6",
                "Active": true,
                "Assigned Job Role": [
                    "rec1UASONUxcvY0m9"
                ],
                "Manual sort": "aF"
            }
        },
        {
            "id": "recGVLLozONB8Kd2e",
            "createdTime": "2023-12-29T09:15:02.000Z",
            "fields": {
                "Name": "231 - Crown Hill",
                "Route": [
                    "Temp Onsite"
                ],
                "Status": [
                    "Temporary Onsite"
                ],
                "AOG Property Code": "231",
                "Site Name": "Crown Hill",
                "Post Orders": [
                    {
                        "id": "attSFhf3hLpSCDIaZ",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/CO9MsKhcnDyHs0i4XltGDg/eaIK0p_VM_5D_i410gihct79UG-UArpAhcXchHmZi-7s67zTOjeA7aPHiY4QwpGM9Jmt4vlPC_t4TI6i9Rywq_cQDBAejossxG45w_VTusKLaRPTye4ThhzvaVb04hBaFjckIXrmNFBovk7yisc8oLcHTXBl48YSdZKDEMPXTBs/J_2oHAXt8BG_YMZ7BrbE-ofZpTMDDGmHaeufSfzkXGU",
                        "filename": "231 Crown Hill.pages.pdf",
                        "size": 730853,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/GFkftp_JE-FCd4nACV7c3Q/WhOQNGNIpPBd5QccMyIeuG-w_680ewSQ3y1DFh0yJpAOiE1xiJNMpVRz-4Cu9rjcaGLmiOp2V45AuEyoOgudAjaYsu3e5Iq7L8ex_LX6AzWH6mm5p0VBqiLDXl60Qak-uEkfCKyTCcvph0b3KuPZAg/_jpZypQBoumhmubhq8qUVWQWdifhurZR8J8UxVIgpgs",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/L18lGrdDOC90kUFAFSXCjg/bOjS2gmiM7EhQkxVChSC6U1TtDBTQx3cpWnHmP8xjlBWekjlN_f1Glb17yprRQTG448v5zsAL6epu-rsAqgXHF59XhCYe1NG8kL4q9uKs-XulJ-vVgcfRxEAIvf59ciE7j4hb5SsrK8-jfQ89C57NA/7YJnYlax-teD0pNYNKRE6EbBqvyBMzqMhLFV-MsGFxs",
                                "width": 512,
                                "height": 663
                            }
                        }
                    }
                ],
                "Sample Report": [
                    {
                        "id": "attSfSDem7kVBIiZz",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/vozxq05DqseSMt1rvDTiig/eDYz5Dzltqtua7QiDBLX_gkhSI_dVHfbqfwUrvet7T7VMezjPZAxmayZoALpI8liJ2sHsQ6HlkgdFob0UGAZjftpoozV5qpsgOesPYa_2R-MV-QWJKkRSnT4Hp19_DSML6isxW6Rbw1RWu_Dmc-uG6401zu9vbBVw9IaZI16V2A/8K5-64MVJKM2uuNQkGLhovdGhP6EGGVM4kAD-2yBkbI",
                        "filename": "2024-03-24 16.31.53.pdf",
                        "size": 11238840,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/dORoL3HXEJ1j4sY9NWiz9g/s7IGq0ORRHok_1HwYoa1sboVHiiP2YElrEXuTXQIeexHglyVqh32MyxG21RRJSP_4OxGT2riEcnLJehQcDBoiGSQf6iIWPcnipoObDPHYGjuDZFr9yRv89dOELy9UjZ3jkFhDT0hpGbvZpQzPEYHRw/BrTn4UyzK1Hklok9_cB-A9Vqg9ouvYXSABGhUcDlECg",
                                "width": 25,
                                "height": 35
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/-ZOYbcP2GVvNCKPWrj3ZPw/DD5UzrKz94izdHlOg6NgpmOzkTJQYtzDBAydcmUbpcWCiMcz0MaesodG7VtHdFd0neDuMdTpD2b-kh7zhrOtwl3YhiK162mdhNel8oNWlPuCij9X-exZZ3So48PQ0Bv5asB-HkeGmJOcFuR8bOreKg/kd4wLiZE53VC_NzHwXMyyTjdoypM8fpeis99-sbIhIo",
                                "width": 512,
                                "height": 725
                            }
                        }
                    }
                ],
                "Site Address": "8501 15th Ave NW, Seattle, WA 98117 ",
                "Google Maps": "https://maps.app.goo.gl/ucLLj6qe7U9dM4U86",
                "Fast Field Username": "Onsite3@aogsecurity.com",
                "Fast Field Password": "Guard2023",
                "Active": true,
                "Assigned Job Role": [
                    "recrkawhG2R7c2F0a",
                    "recG0GFN4vuUnJJNC"
                ],
                "Manual sort": "b06"
            }
        },
        {
            "id": "recHdlgW7hj9QpD9U",
            "createdTime": "2019-10-01T19:05:14.000Z",
            "fields": {
                "Name": "182 - Avalon Meydenbauer",
                "Route": [
                    "182 Bellevue Community Officer"
                ],
                "PMC": "Avalon",
                "Status": [
                    "Patrol Monthly",
                    "Dispatch Only"
                ],
                "AOG Property Code": "182",
                "Calls": [
                    "recPSlQbV7NMO1px1",
                    "recYMq63Wg8hKsTLF",
                    "rec6OjF2T8o5px0yn",
                    "recgWx1XHq0QIFMqB",
                    "recghy61niSSzcxIY",
                    "recBUxeYabADT5kVq",
                    "recb4TYEEh4U59Dzd",
                    "recL87jogrZOsUYuK",
                    "rec9B2fbOnmyRgcKA",
                    "rec34QDL45omgT4Zi"
                ],
                "Site Name": "Avalon Meydenbauer",
                "Property Updates": [
                    "recbdYHd1ZsHvoiXp"
                ],
                "Post Orders": [
                    {
                        "id": "attSMZlWq3tC37g1K",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/nR2oRpaLhY6fFuBO0IGvvg/uELyD0ClYEYQ_gD42BBm1I4WD6infsRMDpcvU5MXxHfs4HIgI_w9lbn6iEy_LdkchNnFlyav-CpzKXaZ2vebqGivSjSjNhqKT7epsG-LxYn2eYVulSReeTKmdhydklZPyvnBaAorcZZf636pxcSvlU1gKD4U1H8wL1sdnfr6xiw/YGI23fSRL998NWDcKAWlig-1zwMsdsI14RgKdgsQlvU",
                        "filename": "182 Dispatch Post Order.pdf",
                        "size": 54495,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/gMGA0ajvQ392xCQM2VXJuQ/AK_ZPG2huP_3ZLQCQx9PA2bsXfEeNhHEZSZIH7BcIF5wQ2ufRPdFoNyE9BcWhtD_e9QKjytHQdbqopeJ_CVSfAXPhrjKuYNtnilkvHujdVv186m7GGJk8iGLkyxTKJBoi1DHIEP5DGmduoRjFSwfVw/pmjfYZ8SVF_ur6qsiygMPlqtXHLZuesejxTr-7gbEPQ",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/s-LXjXCJ2CN8jSVYsgcMHA/6qBH4DBEhoOH97MVLga4gC0iWl56GCaoUgvGRPgmrAkxnrNGtilTTISlBXjGjAWuQqeEOAn4kuc1axn_0JBw-rTt8mwEZAY1G_wfEx_Zw5K6pflmwCWZpxPjpBK_5oJs6-YlP6LhB_U4rL7TmSoc8A/MwDBwnzM6NXRJuLeLC2L3aYU1h6OLVdv_Hq454Z9hP0",
                                "width": 512,
                                "height": 663
                            }
                        }
                    }
                ],
                "Sample Report": [
                    {
                        "id": "attVAxkLqgIBR3212",
                        "width": 3024,
                        "height": 4032,
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/fge8uAKH0j7Pc5Yx7Bpd6w/pMSUea2WtUj3Cj42zMYQpHLVwf8RDYVWcF3wxH5HRuFQZGcChiMaVmYM5s_ry7XaLoN0Q54MOnXif-3vQSonsXyKh2_f3kwCSuAVzeV9bLsGRd7yHGqdW_h0gWYF-iHbNFWKQNYMInYc6iV5Tme8REhDcHO8LXRapetVKxVZvwM/ONpDfY2_ANpa5pbj46Eekl67nS_mQfNFjMMOOrd-zxc",
                        "filename": "2024-05-02 13.11.11.jpg",
                        "size": 3882984,
                        "type": "image/jpeg",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/TN-md6B8pU-Lq0bPW0ZPCA/hZjNk-3tiWC07XE1AuKQxCBNvHOahJBeujVXtWICic2HUtTPCAewM_OOmCujUf6qAihkmzR6_jfNskUjdasVXs1RLWSkT2NeMa4m_8sCXVDmcsqZXFvRmfuFWyE2Ht2jAoEqWwXY5j7DTzJG05tkbQ/le1S6WNDoHSOfL6uqv27AvaW6319Lyd4CSlfGmvTKnM",
                                "width": 27,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/8hF3FQD4y1ll4PV5_qRy3g/aOMc-ubnh0UDZ6UFtETMQSs4Xu7R2p6Y5G8YgymsW31X0pklXHtueypr_1IsVbsZFqxfGH2oF8VBw6X0pybpLtQTpTiUCkHMZzd7TvDJD9gg-a904gVPaZoXveEzFG_zOvLPj80GXGUKdQg2BH8fyg/Lj-gad2C16wUipzQt6A4mjAQpe_KqlGomPt9Mlt_cvs",
                                "width": 512,
                                "height": 683
                            },
                            "full": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/BJbG7sMe4EAAaHS4rEsOzw/3wBrqUQuJOKekQuSqxOP44SEf9Yoyra5ZZYJc5MdeFgilt0DpvmQ7t90SeULJcQaHYxMWitgoxVSGT73Je-Q66pei8xOi5NBXUm-sY7Z1Pv73Y2cknCAIcMqJQiBNncMcUn60CRlIRALmHIBjP_tvA/nDtiB8eCCnZM8u-vJayFXKsQGwhziM29EVp3LpFBrxY",
                                "width": 2250,
                                "height": 3000
                            }
                        }
                    },
                    {
                        "id": "attDo5u5Xmkz6dRXF",
                        "width": 3024,
                        "height": 4032,
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/opA-tLq--gz2BEArOYcvsg/9zfZ6oZPnqDMRfQSw1Z0qPNHjxhbIfsfcaXnctcOLK0z1gongrcTvjnN9iicZDeLaF6vWlNCd816Qbxq2h14mRaBxawSIcDxxlCqL7epAm2HjsbeWXc3jLm8JB_7DngZYf6P70fWdhkXPn8YoewcgZL-WhsX6r7hEz_olEE9Wco/9W1R2qVExV83wGc2XZK_L1gVuwI75lMoa-Gg7VffpTA",
                        "filename": "2024-05-02 13.11.13.jpg",
                        "size": 3581869,
                        "type": "image/jpeg",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/ggXxr7ckWEyJK9jF5S3Ypg/sy7A8V0uCRGtooF3HOw1ENbMotlbmMEli4__Rp5s6HDhh2snhv_9WKCUVu54P4-MEg_WfqHYXmoakfhL_MCNfPHdduXp4l_2X5vzzaJf96uL9DBLlCg2b7spbuRzeH5GLsTUDiIIvAlLjyBwPd8dVw/cyFrTZFAbZHE0DN4xi9m9jXyIvRi6Lzs1WIOxhKMf6k",
                                "width": 27,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/qPIDwpNS0XVL7V8WpD70PQ/oO5eOxx7H5Cp052i0VRayp7lN3OpNSm8nN5elK_GeWoQLXxEPWq8r-cc4E8AD7GbqyOAHbzUFUG_x0ngPO2GFf80mpgRrZ4Ljp8PSw9pAabRlJ9nOuYRpwTVLwmvAoQaIHgvstVjyWusyVfAMqruVA/lwCqs-jvYX52JqgVW9PpOfvavnAsyP3aIlyk4nPbt0A",
                                "width": 512,
                                "height": 683
                            },
                            "full": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/Hw1L9aIa7VuWJnezzvyjeA/ATw0aag1n0G5hzSYsL8IthunRWzusQqwtgkyyEpV6Lpxkj2MDmoHOElS3zkvlfqvARjBmOEuAQi7QcLuk7LQDOqnYTymiqdKKttFCpSfSzUBeqUtH9lHKQXR95dI-Ua--XlL61wFt1RRnltSQ6hkKg/w1sKTje723at0KfWQTbhJ135fnqWrJbK_rr5PoYXGDw",
                                "width": 2250,
                                "height": 3000
                            }
                        }
                    },
                    {
                        "id": "attG8yG4aN92LHIgl",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/sk5iOpIiFiLNpJNxQkfuWg/xw_qq8K-nz49EBWl9CBonlzhVBkC8J2309cqDX_6gnuMHQOWDcsBG59klZVmH080YPMGC9i3VlX3LZaMFfL6xTM9SqtN9DREctP0XhK01ypZ4r6AzdZCVRLJb_k87ehf9MNyfScfRK1zyjhbY5f5rl_fnYufl45IopbIxcfkJu8FywjsPu6LKbI0A1Pg8J1-/PLpimHoUSnmbty2WA0zYm8FoLpA7g97TSQApuSAPQF8",
                        "filename": "Bellevue Community Officer - 05-01-2024.pdf",
                        "size": 1580154,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/Nv4OanbBoje70u3HwLkrFg/WbUz600ykxP0tNbAnm6ImS6pDz6YJtpxt-5Fjy-H4mJA3eYq1yu986w0Hgi8RZ40C-c7y0AqfrYBrEY2FXWJnFvdvTCDMno7KI2brc4636FT_r7z4S_NHL85xZ7QI8__5XLvMiaH2hEXbRoo98M6Sw/d3nk-aNzkzRS4Q-lNhjLH6_9z41OhqTNkfIFEXKM44A",
                                "width": 25,
                                "height": 35
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/ZIdK01MXZ2gZz6aL0h8HXw/PG27BeTWkwW_ftZOcDtiG9KBmRgGGtjKzfNdWT6eAYowyNXf-yx5eOSF0qlsFJ9dKPZXJq0hQG3t7QQwohlnUvK8PRLjTGHJUqg0_l0QI1vl8fExaM8n-RAPq3I1OsbB4RVaLBmqe1MvZKnMPyQoTQ/hDaUtcX-dDMc3IKgRwzcQulK1LZyU_ydIT-4uVwNVJ4",
                                "width": 512,
                                "height": 725
                            }
                        }
                    },
                    {
                        "id": "att0DEg55c9T4ifDD",
                        "width": 3024,
                        "height": 4032,
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/FHjUZ8FEFsOdWkLFwvo-KA/GEiNZd3xbf08Zy2XaHYXlImXOLp-7IrFZxrJIrQ94koOKHi3YHlpv_tjvT-xlRkbipfIMMi9z6r8nZ3245DBLYDlr78QjVKwB9VnnJm98UVKz5d-O2_IG-23hZ5qBUWLCO4w9wE3xpO7vu4_-IqUpjOn-QQ3N_VTSMOsM3wt47Y/qygezlzALmvG56Kt8ihcy8CeDdXXPr9KbevS44CVx-I",
                        "filename": "IMG_4323.heic",
                        "size": 906962,
                        "type": "image/heic",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/d7hpQi4vGcxS0OU8gchu_A/m9KRc1vbqxuvhA2nDG3hlTo7X2Sr6Mf_tx2D2s9ppMAckNMDAK1ZfHI3APf39yx9Kcl8s0q1eE0d5X94YmgeCB1OpeymR3dtMCzZgpsNepS_rJDQlFC8YkO94LQfRYV2UoVl3EX4q_bjiuLaNbiQYQ/3ySK45HC7vqiT9Qfm-jKuVEIWMrgT57ZPAQ-jupndfI",
                                "width": 27,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/dffjLUCR93OvGvfjAhF9Gw/eOkjc4X-XcwD_t_DWLwujz_zlvW-9qZzxlMa2B69S_XnAja_IxsW_iQ9AsnkC6oh3KEuVi_-gY4SNM4RbTen49Uq1vc66DpgpN7JyecpBQpLyp_A_e27UaYn0iyW_ID4uNftWQeCq1SEBJigQbEJ6w/jAWZqaU2DJndfwDOfU6iIsDi5QbJkQK6vsNK9K_iw4I",
                                "width": 512,
                                "height": 683
                            },
                            "full": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/Q5si3YLy4eoFVz7YSOBTXw/x8d1UO5JljyaI20gYxvnTlBQzARBPTnOI9K9LTp3pTfnTKDKeFIwK1HY7r9w32WvEXaFo5FMIuURrYQUgwz3JDhlt0DA2DzLj48o0ebEmZaJhSo6CWxypSyJ7p1kST2xyE_tVl_tQ5X1ZhVEFXlfYA/ztZJ-nCUfUNTliKRTPlUKRopuarYKF7Tx7PPAzIoZW4",
                                "width": 2250,
                                "height": 3000
                            }
                        }
                    },
                    {
                        "id": "attHP4PPWne0xSX3K",
                        "width": 3024,
                        "height": 4032,
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/qyWUDEma_vlZnCfScxsbCQ/UcrFNKPiei5SOX5glRBjwpEHFt-sK8IDDvfe44Tgy4zfZV9pjlrGefklajLm7P3HySEx87IEARz_1mGgDcWH7x8VdpQoLvpYt0_GP-sQEutkV7OdfpXvY7AGzR5-5jE_1avxPXfDRhhdWR1RJOOTbyslAT7_m15Yi9O2EurwRzo/y5ldkyP-bDsZ78m2Te1sQAuC7YfMp4V96TQ6h-eb4LE",
                        "filename": "IMG_4322.heic",
                        "size": 953554,
                        "type": "image/heic",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/coAk3-Ivyeb67bhMTJtW1Q/jfhI8hu94CT4l8CxxpltssdQkI_zG0O-wDfhQkTlKGcHq4hhOl2WNoPV5W3CGW2kQLHoSfl2442Icb7cMCv_TdQt5Fl43D2LCuDtVa-MbmQgSt5Ajt2aa62QxKoOhRjONuHemaEIQKq1QkCMCryMug/q6Dq9sqzL3PS6VvteLCNRc1ayUD-_dx5W8EMSOw6xsk",
                                "width": 27,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/qG7caM0XAO1xrO8R4a-awg/eq-XvcJFBguMfleFBhmOX1qGfX9y5xBwejcVoJCNGOpHuK-qMCVFT4sigK1aBUVDTQUmZqVuewv3Y9FNHJWG45tg6cWRIwFChM5JmCsJwCQJYEJbLKCZ1s-rsRfMLvPO5TLaBWTu4WHexik5pg0YZQ/teyA6JjCEnss7A8cRwcXUOpnf4STb7h20O97cKEd11c",
                                "width": 512,
                                "height": 683
                            },
                            "full": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/d8aRP_mjW84C6meUm7yNiw/buhJA6HoFhyh0y9epawwaFlHJG19-ErHuWFcOlzsp15fiyqICB7CUkXo4v9xXNSfSJkrp2b9BwnQVrbDFzdeEyQ0XO8BWfS0clG4LBGoepBt8AE0Eg93CVeSZdAHFpFxhhFJKqs9X2nom0WkKnTh-g/tIogZV0RfGkoo4hhbnDIbu0PD0I0pCvmkhm0xVsUcic",
                                "width": 2250,
                                "height": 3000
                            }
                        }
                    }
                ],
                "Site Address": "10410 NE 2nd St, Bellevue, WA 98004",
                "Google Maps": "https://maps.app.goo.gl/fvqN6LW3K4jtWMA18",
                "Active": true,
                "Assigned Job Role": [
                    "rec66CkdWQXNH14i5"
                ],
                "Manual sort": "ai"
            }
        },
        {
            "id": "recJLTT9OIWUvNePe",
            "createdTime": "2019-11-01T05:05:45.000Z",
            "fields": {
                "Name": "168 - Highlands at Wynhaven",
                "Route": [
                    "South Route"
                ],
                "PMC": "Essex",
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "168",
                "Calls": [
                    "reco9Bore5fg0lBk4",
                    "rectV7GXpCoD2IsKf",
                    "reciwMFXNlXTox50d",
                    "recvB3myw9zAy51GF",
                    "recMy13arHm1c5KLF",
                    "recCy4EPKAcH9C4mG",
                    "recFi10I3nstQFNGD",
                    "reczoY5eglRolaIb9",
                    "recftb0eVj6AylBZS",
                    "recxDc4SVtjS65zx1",
                    "reco1Vc1RFMsfjJ9R",
                    "recXgeIybMsKtPbBQ",
                    "recX3GXzq9QEHI96a",
                    "recDJ8zUrYihMIZhY",
                    "rec9288fnrZjNiHll",
                    "recfMB90DALqFDwfB",
                    "rec9CIM6oOFbBS14Q"
                ],
                "Tagging Vehicles": [
                    "receXHkD65Ne3zETv",
                    "reczg5jFySF6rVoqT",
                    "recKjVRBZq4d6jasJ",
                    "recDa48aKAtqFJ4pW",
                    "recAdctwN8J26Nhhy",
                    "recaBik9cQoo2zTBs",
                    "recvkmd5g54ZL1l8k",
                    "rect4MgPTETInpdUI",
                    "rec0YznimHz709TXV",
                    "rec8pR5tzZVSpA5BG",
                    "rectKGtqgHKQQZnlc",
                    "reccyFYa8pTK8H873",
                    "reciDjWRyRXp52r5r",
                    "rec5cRXxXmd0smHQm",
                    "rec2tDyOScQ81MXCO",
                    "recSB14noFpSq33gV",
                    "recLi4j1ExzyP2UwI",
                    "recF7zz4fFS7TG81r",
                    "recnCLZXXFKgocCnh",
                    "recxlTm9VTpGF1GHJ",
                    "recQkKPyOa7h2wQmY",
                    "rec9sZonVUQV2o3c1",
                    "rechclHDLqEMwJ7lI",
                    "rechLHREfFAsKA7PH",
                    "rec2jEOnezrvUS58r",
                    "recTSF7DTwry2tfx3",
                    "recmNgPzFb2zTeCcv",
                    "recsSiQSiQZ2HNUxq",
                    "recoVF73oTsq1r2il",
                    "recvZvmd2G8WBa8Y6",
                    "rectm8By0VxmAuDBv",
                    "recLBAWUTlajfmG1f",
                    "recONeFojdU0E9ISU",
                    "rec3w6iUJaHJjDamc",
                    "recqKOH8Wm5uEqNwF"
                ],
                "NE Route Orders": [
                    "Patrol",
                    "Lock Up"
                ],
                "Site Name": "Highlands at Wynhaven",
                "Property Updates": [
                    "recjihI8KNcg2NBJt",
                    "reczkXK9MUZlNcYUi"
                ],
                "COVID Closures": "\"6 - Wandering Creek, 25 - Fairwood Pond, 153 - Castle Creek, 154 - Emerald Ridge, 155 - Sammamish View, 156 - Cedar Terrace, 157 - Bridle Trails, 158 - Park Hill Apts, 159 - Woodland Commons, 161 - Palisades Apts, 167 - Evergreen Heights, 170 - Delano/Bon Terra Apts, 171 - Elevation Apartment Homes, 174 - Redmond Hill, 175 - Vesta, 191 - Inglenook Court, 192 - Ascent, 196 - Salmon Run at Perry Creek, 159 - Foothill Commons, 194 - Pinnacle Sonata, 197 - Stonehedge Village, 195 - Canyon Pointe, 168 - Highlands at Wynhaven\"",
                "Post Orders": [
                    {
                        "id": "attg4r53bhVM6MSm4",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/0giNMBv8Dxi2VM3AlsWYZA/v80SLub4FHAzHdIVIkUtECpA4A42PJGijDo7WwXZLi4Nl884Bz2zH1Jzlnpig2aoMRobn3jVqokK6B2v6YxlSNdpFtUNqiOAmVx27BB-b2HQKPtSMsEqynugh_kv3f_jvTU2R0695bEvL-peBfDKNZmdn4iOPyIM57DMi3GUdic/76sAKv8mDpfH3AqEoWvKvYec8yalhGrCutoVY-ZbkMQ",
                        "filename": "168 Map.pdf",
                        "size": 9545533,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/Cbp1S3WcGPmmDL4LvqpBkw/neRbm-9zyMUMen4pC8zRmds5CykZHW7Rq1KzjZu0-cVhHLJJNMvi3NuCZUSKApCyXv_Rp9XNYq6AyzDyJKB6aKVkO7dmhL-H_r6JV4yGxX_MhUuKU8KZ-kuyGyot4ll8-1sbZQKiCycIPMqIAXW5Uw/TeyE94vJxg-WI31NAJpUxl02QtesmnCl6smYE2CHfjw",
                                "width": 47,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/qMAMVsnOOc-FOGph52PZwg/JiE93Kabo_pEz0lMx_8J8B10zxW-p-5gk6e4uMWTDIE1X3rChqRFYIv_-NVhCgi2l5fc3jV2ObQNvcIwnqG93sHZGjh5BlAzkL_urijo30e8rCcW3YfQtJaDbl_w99LNL2OyQtasg1qrkzDsb85HPw/0qn145n0LvXhggLvpNl02nlFcUV_U7NGZD79oYjYTr0",
                                "width": 663,
                                "height": 512
                            }
                        }
                    },
                    {
                        "id": "att0qbFGeSuc4Zzcn",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/5IBM_ogU9pM6s9cGbmqAgQ/2Y46LIGHgDOT0OF1mtBFCSUhdPaIrHrfDLf3BUtw6-zMev2_qO-_Q5FUTSwciQevlWEjNGkHYvRk5NgoV78Tqm6bChTNOiyu6fsuf_kK_Imsy5DBZD-_yOntKcnXtJgVlztlpAz_7tOdFgj9GeVPZd9TLKp-_bC0WeOF9fUzM976PjfbGkI9dk5NnV_7kVbO/ORJ8QoNbABlQAGqX9K2pOR7j7SMhkQCV1NhYLefGjfk",
                        "filename": "168 Highlands at Wynhaven.pdf",
                        "size": 302034,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/tnqtPcFyb7RakEIOFeDD6g/twrgN5e7ZbRtIlCqujYXknjC0S8oiqXnEalKE2fX-iMkcbEZDN0YhHpgSf0gDwRqCDbE1UvjTSEUa6T0l6KoknxBV2ANx8plCAOaWneSu6AbNdFRsrC_eCRsYzdScIYxP2nZb7BIKNFexSNTlr1BOQ/u_-m0ks_Z6kXv7T66jZNus6Gs4-zHDxO8G3CFkf3NRk",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/fyhIQdOHzgaUv1eFE6vu8g/XThUU3yeFBxJXgaH4ndUEH02iQH_KoHwwcL11NYvAgdSqPQzTppRcDmN9H5BjCBKegO5JVt5T00ECBbO5-mbU7kAtMs_GSok-sDWMk2hHzCaoT10hAhOIbVxx6ICRTV2vjh4a7uSNfgzJaabjAtz1g/Wn5mqTIITKT_L4U6l7xETELXMaGq9dNcWd5_OH4TZ68",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "attxZKgSrOqj4UuAZ",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/BvnGdRR7EMkv6CJCLiZxLQ/w1VZe0exWtnJn7KGf9VhUUOm0lO64BPVBgOukfDQe-S6FDmDKcukmt-eUncHzoQ6YZwsaVmAAXrEsTsPtu8U2J9yykk3YBhmOFxoKrGj7JiftBL9AGJ5iCysYXuuVdBc63hWzkRHuiowMxZwiRFKosphGItjFvV8xjDzvqZVLuz6flWX6fvxhzRRspBT855BvDV6NaYjaC79JooaVXNhjw/gWHYhZamTd3Dv6W4PUnWB3l4iXFc_tdthu6jc0p33r0",
                        "filename": "168 - Highlands at Wynhaven Lock Up Guide - 05-24-2025.pdf",
                        "size": 716288,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/WDgSJK6zikzxV4QfmLlh4Q/46SFDDTkob-70vPvYuVuts-u8C_nBScv3MbR8I1siTjq2geTUhz5GckfFHXdga6J1j5WgXzWn7Jn0fXW08I69bB2kjq___EpXNEXMRCZIuJrRuYC9NbNdSHFmOgsSr99Q84BnyLrgUCYPgFAwqY_jQ/BxC265QgAO2QFWWqCf68laCfWnsLR-So-CAj9DOD8ZA",
                                "width": 25,
                                "height": 35
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/ltEP85z0WYwes9awHZvSRw/81YZTvJQCDvzugC4QwZnZmoOA2trH01SQqpEeZlKYfFlCXhpZJRxRCjZ--rgpY1gk0EKy8mcf-QI8gDQ5dHvBLG6DBkCus1Jq3dHapNHKuJKP1TN5yPzv2Knb7mvzQRpSd4hn4thBgXX1PhiIkSRYw/w7xjIxceX72xVMNWcHmBmZipGdBhyPnBz7qbaoubXXQ",
                                "width": 512,
                                "height": 725
                            }
                        }
                    }
                ],
                "Sample Report": [
                    {
                        "id": "att9WNFDgI82vw4YF",
                        "width": 3024,
                        "height": 4032,
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/1Jz0AqK0tkLIChdp1ZOC4A/JYicmqVvQfmTo9aKg-a9gf9IGx4ME6myvnGfFPfrmKinLfmGPc0VoAoPLbcc-exHfKNzfIYns1hZw1hEP7NeYSn8SMBnyd1MQFA-RjPz41pB1U5CVzHMDv8kw3qXXT6p6M86b0Wi01I15EJ1Qxe_s8DVnahWpPYHkAr1gKd--Ww/I9LwrCkODnl4lC1im0KKvrm9GDoTL2A1u-BQ4Vbuai4",
                        "filename": "2025-05-18 04.30.31.jpg",
                        "size": 3885006,
                        "type": "image/jpeg",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/jsyaWp9uA1i_0ixFXQenkA/1AvOLbfaWBsBKskBs7aZbsBWbtXL8I0Z7yzJEYNkptcZafBi3_CJqYNsLijuWd8hhTdUDFJa0_quoIX174TRF7NbNcqtPNoWd7ge3DjlK3OIbaIk2_svuzBQ_TGw7XODugX9IAqPIBR5kQ4WqEs66A/-IEmmzDTgVS7RupWh67h73bOA6jSee3m76n4t2tIgXo",
                                "width": 27,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/oaYW7NzuFoivSMCAqeTXTg/RHrfVJjmbbTfIWSYTooPXu8WdkCvZ5OG3uLVrNBrj9EpMMvQWW0OInVKoeHeuRozkBaqCq-eo0Qm22rs6-HH4FERxDuqqry2V1GLoqassZf_CdEx9IfWKZwPKVdV8MT0XkscoOilpAFhDbGcc_b3zQ/95IYgtpi3tNxhZeS37ZVW-VKkTKYvo9S1RB3E-k0Gu4",
                                "width": 512,
                                "height": 683
                            },
                            "full": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/vnk1a6l6TZNH3MFu4z2w4A/BOXEd0kdWXOd38wOoHEw7R6kCAO1zKnfHN0E6f7HjRREXF7J8LCud62AlCfUwWqRfzU0LNc0yqamWLGyIdt2waiddhfSn-hSgNlLghUBvJ-BKp2SyeGFJij281pyppJXBGyqk-qt9cC8-pGLS9FeGg/EUxJAW7r8kws9D_o8zVJ6Z-wzkZA4Zx0bu8DfYj_sZk",
                                "width": 2250,
                                "height": 3000
                            }
                        }
                    },
                    {
                        "id": "attGEqh3nhWfEB1tT",
                        "width": 3024,
                        "height": 4032,
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/q90Nr7v2zzI4BYCbPuncDA/AIXveFjhLmyZLrZ9nSwsVol6_aNYYvQAIVsnr0PuNNuSDOK90Dm0gBOL3BjguZBAPSA52titOyufSACtcyn3nPvZiOVg0_uNCD6akneczFHwSvMdGJaGqjkFktqN8vtkP7isJX-RPNu4L6ceqOsE5OfeN0yq6fS7Nj5akOyWIHc/z2YSaDiQpkKA8BfOiJOncOZ5svFtyh_fS-qa73nrgFM",
                        "filename": "2025-05-18 04.30.33.jpg",
                        "size": 3906766,
                        "type": "image/jpeg",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/h0gSzxKZIFZFzLqEKjHKEw/KozrrC-vMjZ5B-tnKZiIkWf1bcHfxNPfN7AjuR0e71mNQndER4TsEO2X4NHhvLdvYXDO8hT5kRCQES-UV8iX_2NVP2fQ6X1z5qb8aQiyJssQwxoxR2staGt7uOLTJTvb4aT4wyy63UxyxD9fUzxINA/MemHPLuYrOkehyigZyCTSuA2yKPu7Nygkq4vQdrEiNM",
                                "width": 27,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/L0SclSSlYRK0cqasZAEGFg/V7SMBbl_psG8VESObso-C6TrTgM8b6f1qncVyrBff7x45817Gry8q8VgxQZNlInOv-RZULIn9SVbCRl4DaevP71Kpvd9YL29Bok4NffH5NesG8PRHUenZNsXzEA7JUqRRgxFe2-DcyfvjkZjsohYbg/Lcjx3tzgTGGL8SjccRIm_i67SxJNKhi6skEDNZ5u5Ho",
                                "width": 512,
                                "height": 683
                            },
                            "full": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/1k36wU1HTdU9eWBRAwv3LQ/IxNTPLRuep-nz9__Mc6YvC8q42l5-P6WvXi9puYRE12gJXDqtphp8vRlZ6TmYMs5if8Bd2gD0Mn3zVaDBSqZVUc61PdtpXDnrU4zVvbmfI1eRowfpeZrlZqSAFIUgmGuk_SHOtmzOSu37bQVPIVlHg/dy2Zxg9OcJ9vcRNBZzWOm29bKwQ9m3j3nBG1p_7B7OQ",
                                "width": 2250,
                                "height": 3000
                            }
                        }
                    }
                ],
                "Site Address": "1460 NE Hawthorne St, Issaquah, WA 98029",
                "Google Maps": "https://maps.app.goo.gl/7gJoGmb4VQLzEnpn7",
                "Active": true,
                "Assigned Job Role": [
                    "rec1UASONUxcvY0m9",
                    "recjCaOzof7MPipJg"
                ],
                "Manual sort": "aV"
            }
        },
        {
            "id": "recK7Dj1UUzfV6iBt",
            "createdTime": "2025-01-08T21:53:30.000Z",
            "fields": {
                "Name": "270 - Totem Valley Business Center",
                "Route": [
                    "Temp Onsite"
                ],
                "PMC": "NW Building LLC",
                "Status": [
                    "Temporary Onsite"
                ],
                "AOG Property Code": "270",
                "Site Name": "Totem Valley Business Center",
                "Post Orders": [
                    {
                        "id": "attygz14BceRtVb0q",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/XcCW5YOQOEW9BhHeVJiGfw/INuC2lgRFL2TMRhjiDqySeGR4u2PbUmd5KdockEsf2119mGxd-9UmruvJpXnfNMVZfBqJW4sZ4IgojoI_csKwSvTwiQcUCqT5uqolmbrWzZS4rV__Csn2zrnXaT0ZBK03SG7fJLy3p7Y-8EjKxjfRIO89qWTX6XucCMcTOQuP7WgZRKGBGG4DpBJFXcVVQww/ElUC2q42NXyjYpfabzujLHi2HnY04-JUbzVQ9VfDUew",
                        "filename": "270 - Totem Valley Business Center.pdf",
                        "size": 128410,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/x2oAy2HOTwZBas47nmSdSA/k-AITLN-14gGYG8k5QrirNRiFojmcD9l5v9PDz2fPH2bDlQEr9E5zhkIwSy3J2F7ancYHFzaOJWDIktYQHRJ8O73gusBcN8dTbUgkCCNjmJUGPRIhylI7-prefWbHmvocy8e-TM-wuuRhzwtzEh6-g/7frr8ckLVmPWAtBx-OdyVE_yFGLzjFwUAYhEkDkrI8A",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/PbBwzi28FK2QawYT5FoRMQ/UB06qft03KTu_qP1o9zGad1gdmRVvt2tY1P3XsEXIpeTRlCgAEU5uNzm8dQfAEXzOqOVt5BRKKnVmiKtvF1M925L1rP_t7KReU1bfj-x7_kzVSBmrYzo4YfwnIZ882yqLIroTxgx-t66XiHi1ofrNg/VVXiubk_M72mkwH6hKEh61bITFS12BONl_fLa-840eQ",
                                "width": 512,
                                "height": 663
                            }
                        }
                    }
                ],
                "Site Address": "12912 NE 125th Way, Kirkland, WA 98034",
                "Google Maps": "https://g.co/kgs/GmsqKKy",
                "Active": true,
                "Assigned Job Role": [
                    "receNSeoHAWqVMuda"
                ],
                "Manual sort": "b08"
            }
        },
        {
            "id": "recKaL4VnGRZFAcO1",
            "createdTime": "2023-08-10T23:52:21.000Z",
            "fields": {
                "Name": "163 - Piedmont Apartments",
                "Route": [
                    "South Route"
                ],
                "PMC": "Essex",
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "163",
                "Calls": [
                    "rec68VfxR2rBOL0Dk",
                    "recjbdePoN5xtxmey"
                ],
                "Tagging Vehicles": [
                    "recnQQOfOzXi5fAf7"
                ],
                "Site Name": "Piedmont Apartments",
                "Property Updates": [
                    "rec0jO7CKIU8WhO6F"
                ],
                "Post Orders": [
                    {
                        "id": "attDIM0X5aIkBG09V",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/fx2rSxxa3ZwIT_WXizDMaA/rCsxKo4Dr9IWjsCTLrrXkbd_jt96P5LCpseFI59cj3k5xFrJln-y9mCiYZziBKH-jFW_xoWsyy4mCGwXBpn_Zpncj3czZXASWKgHj9rLslNOJwN0GzaEW1venucxXU8W7OBB6aR5ERnha_uBi7zvUWnvccvNYkHq9cYRADDxMDM/sWLdh3GONdTNEo64hnZTWt3wP57unRtPy2cihu_pcEY",
                        "filename": "163 Map.pdf",
                        "size": 8324051,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/ZeS1qgfrU5sg8KUyFNwtRA/6qnJqn4TRoop0EEgJvfjKbrv3sLojr8Ov6x2mA0blrqAtLdbsIf8jlWCEyf3rpnw6nIXtF1cdcaaUx5_d9MyMVH_9KZuhjCZBl5ijtW5gWxMmwa7XaoE39Yj517BoomNuaYB863B8lgEO3FMmx3JxA/4mDIlU5WfVJXMLwn7aTkEfiHu3WOM5MVj61RyQ9HZi0",
                                "width": 47,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/1st6SkfybCzFe1CI8y15Fw/4fB0PnW7Gv49kwmmyeyj_34nLAXMQddrKa_WAwoTV4FnShVMaEBR_ntRIgmeXnQF0VzN97SlOrBfuX-DYmPvp0mGJ2F7gYRGbMFG_ESfaGanNMgBfIk3fUekaBKr5_WEal3QSc9vrgHW7gMC4kXDLQ/OSlwGW9G00TCrGzQAZopf-u96A5gT-WfsHWx4U1uG6A",
                                "width": 663,
                                "height": 512
                            }
                        }
                    },
                    {
                        "id": "attQlaE4NSFLLRr5h",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/J6KakOtUBVzwib8XCPppqw/A5hj2VHnnfIwpnXS2lPWvi1nW0kii4ViRYlfoi4d28TdH5NYu72rojdSsF-pMaAkx_77Jn6dVyYdQMw7vWC4UsEWzKeUkVWyoJD5QQbXQuqn1PhJzHF9Lmm_utccSzjnlnZUjCAH_PJ6EdyLeGHCPz6mUEQ7nE2r22_Qzc2jsww/pxNCIO-Zkt3EBLv4VZnMZLaU5p6Kfsq3zEg956ZepRE",
                        "filename": "163 Piedmont Apartments.pdf",
                        "size": 44988,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/TVYzxt__cPMo56i00T3cfg/OpfYajxFjVfsqlorIOC5tMyXO0Zp376zVVjKiaZduVNUKq_vY47Y5U7-54mBq13SFwZzJh3158BL0bZqgJwJ1A4DW4Tv63gzq4javlS3TZHwS-F-5S345MEbKOQugCa-YDSY8mf176uSMahZ7Ll6sA/xe6iyVz-qBSqR9Myjph_SzAwVlTkUNbkP_Nter9Fnh8",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/YQHSp5helS4Hgtk-q05Ljw/s8maYHjD3dI18nJF0upVs5-E2shHHkuwL9c1J0P_oJ3FiGo1Bl_Vz2Cp2X8VdTdJXLmP4XUeiaC-H3BiMlif8mIwulM7f_36Zx9A77IWuywJWo3UrDBbxyQxOJfK_MXs0sIzAESUbrw7keUY0C6vFQ/OB36S5lrgIFPseCiqQVLQTaFWDICd3KZeV-ATDWlZKU",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "attRsQBNnSqxGzkhD",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/u5HHY_YMkf8K6Xx3bv9M5w/JNS4SikKZoBO1ScOCCs0-I7VTZattXqXAIIO757VZb4F-8lz5yC20oL4cuOCNZUAlMoZYPcEJbvYvM5diEtE3vs57ri3e1KICCgbmKugeDlrxn3pPWUBRqjekKRqPwgF3TgLa2rDWvvQ32ViJ9GLNa_t5r4MiO3eUmQ23cFtCgA/ngwIZa7Q2X5pF9S1Mclldmyf_Xj1LaST2_ZvseuxLoI",
                        "filename": "163 Patrol Guide.pdf",
                        "size": 6730420,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/cUvvtl6W9-QjzgZtQG2AmQ/hv19fNjcFCZGhbVvP-XAU-P4ecav36GRPnWzTbyLYSpBsLZDnAG4Xz4a9OQJ8kxxMJUeMvVgKJV0fckyXnU35crMB008e0PLr6VcapOre77NMn9iPPjUj2uLWH4btj4H12_xf0Fw2n7EPX92yCQYNA/jve2eyHihCaxRNLZdZLpOtfi1a3Jmp9oA1roHTuZVUI",
                                "width": 46,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/RDlrh_63KFN_Xh0kwfdmIg/_M2Q6TS1Jo_an-WzXvs76Xb0Fw2Hgy4tx8G8-GxCURsjfr7318s7uNXveP_zCwsL4mHz9ikVvnC8_WgbVgIrPZ4TrCmrczbr_vE9Ahm7d_dNmOtSdXmSgDbKgCtf4LjJW5QS7c7javAKH6hpmSXgng/UY_B3b6hjKfRM3Wsa2LFpg1h9dx9ueb0anIn7-JGB68",
                                "width": 661,
                                "height": 512
                            }
                        }
                    }
                ],
                "Site Address": "15309 NE 13th Pl, Bellevue, WA 98007",
                "Google Maps": "https://maps.app.goo.gl/A5qJRWWguNs2xaFSA",
                "Active": true,
                "Assigned Job Role": [
                    "rec1UASONUxcvY0m9",
                    "recSuySrlOlBV6uVo"
                ],
                "Manual sort": "aQ"
            }
        },
        {
            "id": "recLfpqmvG6p4eVNv",
            "createdTime": "2019-10-01T19:05:14.000Z",
            "fields": {
                "Name": "180 - Skyline Redmond",
                "Route": [
                    "NE Route"
                ],
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "180",
                "Calls": [
                    "rec5wnhJjJURlpYOq",
                    "reckg6jgk0gpo7Cgz",
                    "recWkM7tI4QXfZU0T"
                ],
                "Tagging Vehicles": [
                    "recs2HMfAewQZGxBN",
                    "recZmHins76DseK2a",
                    "rechMLF8vG3XKYArb"
                ],
                "Site Name": "Skyline Redmond",
                "Post Orders": [
                    {
                        "id": "attNY9plwyGsC8jOr",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/DuzoEVB6PlGHDpqIO5RnLw/bAZhu0qSiLE07PJgDo4C3IR1oUq5ZG-2vKNIYjSy7Sgwmc0-adDvRZQTwKoKjk2OhwxAXYewbyeoWUTniGGpUP5r_nbeQzajePRdBogGhT4nilGFO-svoo8akp2bf-RBcL4SkTtoZpygCpHuUzcP3ixBMam233yR1YSASKvFOW1e_t7wtx3wN_-FLGBI9KLH/6PIgb2Er0qQIGgfFwIFAiIq_g288q22j1eP_-J0bzyI",
                        "filename": "180 Master 1Jan16.xls  -  Compatibility Mode.pdf",
                        "size": 26148,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/F1VMZRFhPhsTqBozSJFTEQ/rvx-YBcnQ4vS4Aps7d_fjuvZHZaayOabQfCnJx7jK1Kww9GYJdNI2ttUwJ4fBSxFpHlxqqUyZfhhLXKCSI5gxAVwhDNIqDew_Y8d5t6qilgT0rUUf0_Go1_jqkcQafBvR_UoB8l1CD-mNI-6_TpevQ/Donjk-VQVCntty4kKMLAGASUaWnNcH-esAgv1HTIPqQ",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/ALOgUqezWNo3xdP3UB_zxA/ZJ3c6P9u8a688tY9BXsA5Eh-JEQrUzG1BxHElmAZ1wCLRKc-T5CFfp9ujAWXYLuBkZoWxbBQATj4joOi26JFoOWtEJJCiNIBBIAFpjyjlh1tKR-xVce5FEUrTxfSAz6kZi7MPtwgj-oelrFsUliRxA/ZH5JBqZyKi8jrFEMD4Gb3qNGskozToJRTqKghOPKYqo",
                                "width": 512,
                                "height": 663
                            }
                        }
                    }
                ],
                "Site Address": "7001 Old Redmond Rd, Redmond, WA 98052",
                "Google Maps": "https://maps.app.goo.gl/r17FxvsMDux8Ufhb6",
                "Active": true,
                "Assigned Job Role": [
                    "rectLGnMglyXQB2uM"
                ],
                "Manual sort": "ag"
            }
        },
        {
            "id": "recLpPnZNmiKKFriy",
            "createdTime": "2020-01-02T19:41:28.000Z",
            "fields": {
                "Name": "All Properties  - ",
                "Route": [
                    "All AOG Routes "
                ],
                "AOG Property Code": "All Properties ",
                "Property Updates": [
                    "recnpjHoeq9yUj5Jw",
                    "recnK43NISLnkaAyn"
                ],
                "Manual sort": "b0I"
            }
        },
        {
            "id": "recMQqMq617uW5Ro7",
            "createdTime": "2024-01-15T22:14:01.000Z",
            "fields": {
                "Name": "290 - Redmond Together Center",
                "Route": [
                    "Perm. Onsite"
                ],
                "PMC": "Private",
                "Status": [
                    "Perm. Onsite"
                ],
                "AOG Property Code": "290",
                "Calls": [
                    "recyz7YJMkCQm7Egw",
                    "recVRmTfsiuDwGRVd",
                    "recxMblHBQvds1xjO",
                    "recOsixFaCyljsSbm",
                    "recXAe46tX1fUugI2",
                    "recuzSaCE1meWAkBD",
                    "recdrVmn4qegvnsLK",
                    "recdP0uuVG5Wt8Dnw",
                    "rec4Od7fUkBEhndTk",
                    "recb9QmCT7KOTPj54",
                    "recP29N7v7tiVu07Z",
                    "recgY9PW0mhAaewQv",
                    "recIQZYC4uzUmYl0g",
                    "rec1yApb3ncFyrp36",
                    "rec0CVLX1IvpVEqKF"
                ],
                "Site Name": "Redmond Together Center",
                "Post Orders": [
                    {
                        "id": "attmOQbN1daLQX7zW",
                        "width": 10800,
                        "height": 7200,
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/GIfeFJ0wfJdyeJGRXdqBkg/FsINbD2hHKQq7kUCjav4Qpiup5U78szA6yzZE2nX33ViKhCB37YMuWCcPImDSq6mUUz-vjbBEEsvfrxEvQbAylhqK4keAvYmfNqFwBt1WHhA45wfB4OEhBBFu_Gcy8CE421UJzHSx6KzyUa4GS1jsjZC2EtD51Pj5LuaQBYQTlh4WoPgIHTxA9NuHMXvRdzb/mhu0CbQTzrDLn4X55KGHy_kQ2yuRGErFksetZAE8Gvs",
                        "filename": "Polaris at Together Center_6th Floor (1).jpg",
                        "size": 6601560,
                        "type": "image/jpeg",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/rlDxrQAU6K95A-zELOV6rw/-qumwD9j3IbAwHz7YrQISZ0xHio5LNmXePZrecmfhtxgEZ7dCp1qDLeaeb4KdfNrW1YCsERWWqJRd4RToIO7MHjau9fF_PW8pM43f9WaLsM1CRrNRKA1BHkHFBB9vA_QIjgr-GHs33Z8nIJA6dwywQ/VLHcLWbjatYjqCj_RRPj4yAiVa7jJOyg6YsKfpt0oj0",
                                "width": 54,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/KU_A_sNEjsYPDo7NlGvZYw/ucjGPEMcFd_oSKgfEzE3NiXG7aW8dCsRqvyXV4PDJJbffYtqhlLfpWZNzt0_w4LORbu1V44EH0tcFGqPlm9ygkBLcqSsYr4gJahaOxSEXpOTNPLTHEZMabyRTgZqh8gddBmUZfZnnZAOhLo2bjwO5A/Hrn7EUKRL-1VGTiG2R5BMU9vytYZntmzRmkih9y8D48",
                                "width": 768,
                                "height": 512
                            },
                            "full": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/nVSL9rwGuiSo4xzIaSSedQ/fLQ2ay8nssZfW8i2D6V8qkxP29zTkWL6mL0gkwnDkPgUl-3Mx7kacIQbeew9Jmoqu4scgvST2nkNp3pDSq8tMXPASsQBmB0QmZ8Q69s_vE9ZWgqsU4xN5r7KEmhts_1mh4GIVjSn-tfO5tv0-whzEA/z24G7KOvzQzV_szuykH5noQP4bhgj1v_SIMGDHFWF8Q",
                                "width": 3000,
                                "height": 2000
                            }
                        }
                    },
                    {
                        "id": "attdSf2xJRuCbirfs",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/xVbWUEcav-wXxtbueS6URA/wykJ3pDnKXrRefp-PPzp2Ls2eR9myNVN42-EtPBm8xL56j85uTk72MT53EGfoqzcax8YtxDVK4-oOHjrL5AZHtWM7Z0mFA7YSWQpc4wDGM-tVQaPSnPf329QwoKZApkJMuT3DYG1E28ZBOQXqcLUGZwKNf580vcaA47FmQ02PLpkcKSDcmf0Y9nkBfSPuMDd/ix9zG1AwmxV1XCP3rHEuFaAhPjg5PZXErdVF-f2eoSQ",
                        "filename": "290 Redmond Together Center.pdf",
                        "size": 73524,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/yjbYMun1yNwtNG3zDTXh_Q/VS70soKs7BDbwxBEzLnwrXF-RpVW1XEW8UP0nEyxSfWXhCildSyk3MweMfZT_iRWL5s8RKEM_JZ_jcM1cbkjegl3HfX4O6NxdKPjmYKad6sypmHf1yLCamLuHRRG1xMK8FM68eWeu8CFv6CWwwsLYw/O38U05WWNnq9AyI9IduFVbHWHq6ggMFXZKXQ9xymkUc",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/BcIwF74Sozb4hyZ0caSQqg/6oRj7opyRuKg2thwqW74SOXIrap22OitNDK9SmBs08UAf_SlDtvypAO5_NkiNAZwW3sk-TjxLrIkhhuJzBiBAGv737sCDxjr6MDEeiLYKIKQdp_J1RL09W-sZwA35gsHY2Av3JK-5bGGX85nYH8HRQ/J1TfrnXZ14fUKuGoO4PacL2GZZt3pXE6PLPmZH9_hnM",
                                "width": 512,
                                "height": 663
                            }
                        }
                    }
                ],
                "Sample Report": [
                    {
                        "id": "attfUnMXskS4Ig60G",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/e2hOGiyRNlaB9EHAYSS84g/3NpFmairJlemkzvGEVNHi2dqPMlCvwTwUr-ihCauAU8rzv8LsqQIhtTqhfemBpC08WYP8CTDJLA59vIkiBHZhS7CdQ-KevhbH1gQ9XeM6_-cS0M9oSUdgZkdc3WLUikKdjRktOk4R-9STTUT0j93SdSolCcHsLfLpVFq9GQBL_ER4NjIWBwYLg7Up3XaVW-CIpNHIv-ElObkfDVnDCJ_-w/ks31uDHHoBY36Ors6K2Hq7L6wuGNHsyU_kb87SAI4ig",
                        "filename": "Redmond Together Center - On-Site Officer Report - 01-20-2024.pdf",
                        "size": 2154577,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/hn99WKKxIqPtQpLEhi4YJQ/wfzOgch9Qf9XYXkC418_cKg8aF5WPjFEwrXpVcfgPojdYgb1XGeskNz4gjpUfqJ0UtaCapCapnkyfj7q9gz9146tgq4_lur2UyixG2TgilRBsNhMkXJmtg3ZIhoDxBTmVcZQ8xN2DInc0gLusm5PMw/UylfgCby1f226XMqfl1NJVzwjkPcP5uayE6xqebE1jM",
                                "width": 25,
                                "height": 35
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/pGdkzvSgeAm0NWrIP4cEPg/R2JsAjFUoXgwNsWt3OrcxAVYu87IQ-D9OZDsQrm0RImDsnEWoIp95MlmRdPTSB6yQ9QQBmVYZyN242JiggjIE1xzS6Jd8qolOh9jUxLiCuTZ_uWWpBIWMN3tb3QIAvepGa6KWsud9fXBvQbpQYvL2A/QzIfnLJSJktstMHDWXg3QvjBxD2K43T6I5nnOLpSOuE",
                                "width": 512,
                                "height": 725
                            }
                        }
                    }
                ],
                "Site Address": "16305 NE 87th St Suite 110, Redmond, WA 98052",
                "Google Maps": "https://maps.app.goo.gl/EbcVd1xd2t1G19t26",
                "Fast Field Username": "290@aogsecurity.com",
                "Fast Field Password": "Guard2024",
                "Active": true,
                "Assigned Job Role": [
                    "rec4KfPQ1i4Tr73rc"
                ],
                "Manual sort": "b0A"
            }
        },
        {
            "id": "recNYnypfDLSTIduf",
            "createdTime": "2019-10-01T19:05:14.000Z",
            "fields": {
                "Name": "160 - Newport Crossing",
                "Route": [
                    "South Route"
                ],
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "160",
                "Calls": [
                    "recD8sSWVCKcCReXT",
                    "recWySoKYVn5U7xaN",
                    "recOu0SVqTXG7QUqu",
                    "rech698WQOtcrXbVr"
                ],
                "Tagging Vehicles": [
                    "rec8VTzRc4UjYStZY",
                    "rec6Z9OlPLDypDXXL",
                    "rec20HLBvJss1U9mt",
                    "recnY3dohrhK3s1uh"
                ],
                "Site Name": "Newport Crossing",
                "Calls copy": [
                    "rec1kuVn5Jq6zm2GF",
                    "recfISm1U9GxxBAh9"
                ],
                "Property Updates": [
                    "receydzRPQJsSA40p"
                ],
                "Post Orders": [
                    {
                        "id": "attKuOBGwp1sNI0ji",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/qBwyUZMhhKcwfoahHuAhSg/s8ZsYGvkvcTXXLhoXT4gqMyDk_L9bxD_a751G44Qk6pss8nkojTH7IsHwvvq12-8z_3dPN6hh6-8PwojAFPVhJoj_secoDlcLt9xrLIf5HmjqZ5m9ivKvpBjJvyJxBscF0GEFyqsdkHsGg7SbL8hRg305M5o3IuUF803CeV9NQw/aHHe3FdcQ7I8-1KDaqT9YRjhSSLtxpNkOjecqtY0L-4",
                        "filename": "160 Map.pdf",
                        "size": 315096,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/9tIpydn9L_i9xT0fvT6scQ/mAmVDPJSJDR5lW6cGgUcMXaMHQoDSR3a-NpBJQaNfR8vZwxmc9cZU2Bknd8g0FApivlSWdpjlebDshrcajUYd5EFVwWXz3dHl4evu_wMiAZNLwzf8mHnU3xdU_mf2t_dv8dTzS0rUn_a-iIowcVToQ/YQPLpPyZLUbgkicZqgU08eIt2oJZaiTNtN5MtZxcqDk",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/moIOnEMDDzYKn51hI9HkAA/x0qO9tTUNVhrPz9Fb_Sra6HlxDmoM7wG3cbS_IfgnNXAmNgCygtEkdYjwCL9vqEwg9fxX6WI36WX2LKjqb23z3uvodkCvvJtvVmJEw62Rb3aRZy64jiYO2wsd4q0LCYBr13hgyFN5gNNGnp-GacFjQ/-60aw-VH7zE6J2OKwUnyWztlHLdltzyb8Fj1kOArkiM",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "attFzXsvbPUndo088",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/qKnEyGFrYHm03ZZq2TPH_Q/pkMTPAjgC1POQCef4YcVU0e4H98eJTbM8wrseuNmZWpVp_92NeZd2Z7pW2AIc7N5m14HjxIstso_fGLtUvzYqjiI971OSuojF4M2eAPt4biVWZqUIeQnHFGML4C6Jp-8m9qpNQXT_8-BnTN0IlIT7cyjyXB4lBHdDbrArtAehec/h7qwEshkvJ5M6s5hTvGn5GRhsf9SUO-lw78rNhFd740",
                        "filename": "160 Newport Crossing.pdf",
                        "size": 247278,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/44ajQyaZGbpVsVJXW31N4A/ZUmx-StBSkPbWbYhkvUN9g1g86uxFEUa6fEXI_4GLkSBX-fQvUu9DNrbCUg2UKcfQ2D0_q3Uxv6cjtmBwWdJZoFGUfLGOdgM0XGYOlOTLeC0vBApdDJWEPHCj5M6zpNI1D3GUQDp5VxXaz5E-hI9_g/H86jgGJ4DjZgRiftm27ooeAQOIVmPJ-uEPOU4o2iSmQ",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/vzhWc0rd8GcMIKGFg38Shw/ZP_zXjA8LDtOFq1MSE-GH4qvsfZirUYXhptWbNtYBeh8c4xwuMIZ9Pnk8V3IERSkFcr_AWTFJYouZw37odWpdH5Nc-TDnva_S4hjzJZFc5twQSv3agQ2HY_pHQmLk6rgbvgBNxCC31rX9UqUCPJ2Xw/AZViOxJ-PXz7f6dyCjIU4wGLRijvAj2B2NdvWGyRDic",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "attN1Ad3qHjH8xlNz",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/xVyz_5LCr6kkwIwUYLv6cQ/WeFV3nCGJW1CIL1n9zVfUL-MjF-Lxj7i3X8bHNiJXzZGt0ncYu-BGJ6n5yEfKiSJnvPvjbuPwFicmv5BORCA2AJ7VrI1NoC0ZKOE8rH3UyWPpbFxovl5MyzFjWoNqJ7wR_lUszu_5Xpp7wNEHfLOuXhJkpZ3yTmoJqONvsMf8j1LCfZ0v63kpLZT3eDJmsixlwrpcvcU1MJg1Zh-9wzxzw/cxiJrwfcJkkoyJcB74jHn0zNKlw8zVEyh8yVSiUODck",
                        "filename": "160 - Newport Crossing Lock Up Guide - 05-22-2025.pdf",
                        "size": 846245,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/jILVWKd0XD9Apc-xy7fjPw/0OM3ERWr6oY_dKjo8q5OuC6RznzhHxR-0lWynSeO5B-sRG8hIq4qq_39EU9wU2TP0TOxqtM8qxTPRF6IXOOikitFWJwsf-Q9RE9o6Q8L4PstNZvb9NCfXg5BzS9HcoJq5EE1qTdZdfQ1NE8d7o7F_A/og46dn9WN99d16GN0nFqix7_2JarQZRauPIiI3ZUvfo",
                                "width": 25,
                                "height": 35
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/ekJvTF_egHpx-xIbdk_gKQ/a-MqSBQ_Zozc37-Xye0U_eHby0nd0XraaRyFeIrMQi5Etmd1t9uu9KJwBbZPsg_kj6ppO_pWRNfzR2R1iU4H42-0r2pHiwGvzyMzfqne0ziKV5Q5XfQVzTXPgGgXAn79Q4__PHUeBMmpaWRC-l2-BA/xCB8DDgCvXvGr-rkhe42R2EG-HJ6_sQSssieUT3Tiyg",
                                "width": 512,
                                "height": 725
                            }
                        }
                    }
                ],
                "Sample Report": [
                    {
                        "id": "attS6EBc0LbQDolY8",
                        "width": 3072,
                        "height": 4080,
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/dTa9T6hbghSLbSp2l05tLQ/fwNPqWfbyVKBOkxBCw5vg-2ARuE_JDqKNCMIgDRrnvvueJj_trORAlQ2INnLdXtfRmkyiLHqgzLlHUeGo6jWvIy7TKZga-pm-3QSVDK7GCPHMKHaEJlBnnlM65vjljxQcpAcp9Ugmn-nO64cLOcUQ0lLWQl5IDsJZYkieg8pmKU/aTzjggi22xQAfarYajwAJu-hAti_ROc4eRGyuRJUaWw",
                        "filename": "160 fob SN32837.jpg",
                        "size": 719657,
                        "type": "image/jpeg",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/-JkYECqt8OMS0UuF_IEddQ/sNcMetDTJB6MBaRzBRbpU7xjEfIi9wTC0T5BHaDk41rdZyoK_8lqYqXQHiLXEHGfRqPe10EMrmqbYGnzNzN6yoUkY-ewqtSbTCCvwlGt2cW6QpsRUlccDqMsAPansk9DvsrtZsDwHKAbQWajkYzWhA/SyTRtwMkGydoTmfAaS4pRf1GyftDTQpy0nGLaBLZiAA",
                                "width": 27,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/FLQ6wcnn7R9WV10N4iOgJQ/A8Q_GL9uZTSNNx6YWm7WpFMUiywHsNKDCIamTAzyI3cushT3cOEAoiAjSY_Zw00IyoFV9FjImLn7xtFYTq1Hz9X4Dkf-QZ4Z2BS9aL-XIzdJD7EWMHjgFN1zdmOpvehmb5tOqzrSz-lqsED7ZYrBjQ/HzYVqDzaooox2RhFZXb8mfkmD8ip108jZlUTD7OXxpw",
                                "width": 512,
                                "height": 680
                            },
                            "full": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/8Po6LJ1-MGcz9UoCbPvNfg/1j2s8MvJNHUTOcjLBifGwDnHZ3fuFhO9HMiadwBVED_QAP-s7rZRLl5vaRCjI1jTDIi1MKcY9NyqLNLsf_Uxgj0BWAFbEXJxckZ3htBg4q2gP38c6tnk2gmJA3mL-DcViCzhRTcYunxwYyclpaN4Ew/SMT-bO-xQCVbCqtUugV-bLd5iDoGuRg9lypDYJ5vETw",
                                "width": 2259,
                                "height": 3000
                            }
                        }
                    }
                ],
                "Site Address": "7311 Coal Creek Pkwy SE, Newcastle, WA 98059",
                "Google Maps": "https://maps.app.goo.gl/s1BLyHNarnxyXbS49",
                "Active": true,
                "Assigned Job Role": [
                    "rec1UASONUxcvY0m9"
                ],
                "Manual sort": "aN"
            }
        },
        {
            "id": "recNbkh3ZhfVAbJpS",
            "createdTime": "2019-10-01T19:05:14.000Z",
            "fields": {
                "Name": "175 - Vesta",
                "Route": [
                    "NE Route",
                    "South Route"
                ],
                "PMC": "Essex",
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "175",
                "Calls": [
                    "recODX1FEDuiRUE8g",
                    "recSBGINt7Jc0f51N",
                    "recxsgPSeWtHqbkiG",
                    "recQ0TTAHvgTMZjMD",
                    "recP4VTPKGYKQvT8e",
                    "rec5ttiAIcU5slCRQ",
                    "rec2vjpo4u70Y2QhC",
                    "recLNJX0YP5YIYHPi",
                    "recsnyUFGBbOjnIml",
                    "recNtEoM0G8vsWEZb",
                    "recmOtr7lOZ3eCpb5",
                    "recj3XixvitVgRmNk",
                    "recsiybF3nC0qLVoL",
                    "recgx4FvLXYzayLkJ",
                    "recov8mktePh5ClZC",
                    "rectEvHpNxrGLw96o",
                    "recYIO3woCO7zaVu4",
                    "recIXCqIY7qFsYjQJ",
                    "recDZHuIr0qqqntx5",
                    "recDBpBTmQHSbdoxU",
                    "recUl90wvxFHnNJ2u",
                    "rec1Q6T732mCAh2nJ",
                    "recFwty74jwjjM7kG"
                ],
                "Tagging Vehicles": [
                    "recNTCLaKrXYcyAdm",
                    "reczflyd3IkAddrAY"
                ],
                "Site Name": "Vesta",
                "Calls copy": [
                    "recXQHQ2JZVRtEESw",
                    "rechfRfHxMvlhH42G"
                ],
                "Property Updates": [
                    "recMKeHO0uQUDpHL7"
                ],
                "COVID Closures": "\"6 - Wandering Creek, 25 - Fairwood Pond, 153 - Castle Creek, 154 - Emerald Ridge, 155 - Sammamish View, 156 - Cedar Terrace, 157 - Bridle Trails, 158 - Park Hill Apts, 159 - Woodland Commons, 161 - Palisades Apts, 167 - Evergreen Heights, 170 - Delano/Bon Terra Apts, 171 - Elevation Apartment Homes, 174 - Redmond Hill, 175 - Vesta, 191 - Inglenook Court, 192 - Ascent, 196 - Salmon Run at Perry Creek, 159 - Foothill Commons, 194 - Pinnacle Sonata, 197 - Stonehedge Village, 195 - Canyon Pointe, 168 - Highlands at Wynhaven\"",
                "Post Orders": [
                    {
                        "id": "att4NL2gjejsE2WKp",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/tVWGWo0wfQxNRYfYfM33rw/cFe0qMS9XBenbejyJ1qzSR6UvX8LwIs8Ywg5OP7K-T9E5H-hbF03pJI9eD0V3xkT7dx6gyInyaz8OM35dZU9gWUoOJr6hkEOkMdJrS4fLoecp1wFccuEmLYVtXqC8jTzQpqUXksdsP66sPywSaUy6QR5hJ76Y17K_cjQ0_aWyIs/dhMdNPtTmAALHKhVN6lVbmmyK6cbxG8H6rNa4cwjlg0",
                        "filename": "175 Map.pdf",
                        "size": 1062590,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/fyix90OM-JAjOjONLsglfQ/cI9MhxMkbZJosiO-kZVgu7nVKl3DfvArfa3rNbo562W024cLAS1IYx1o0i8OaltY4sKqthehKr4deYP2j9ANw_sih88t04Yg9RBwDai-OIgPrBpRag7urSnhQ6Y8njbmdUAzv-UEdNlTw_jnPbNJzg/OiImpMlPnAn3SDXHDcz3WgTnxm3cMd66EymDcr91IYQ",
                                "width": 47,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/15A_VNFtQnRjaGnA24c2JA/qXZk_VQY7pIqMke0LxOlyyVGxajLmU04y-wA2xj3HIhjA7OpbBAMAWwsiHLFHQy8VByJ0xyP6J49jgeWPVz34MeW2p-pP_dp4CBsOTtmCdmZZ7Si3FKDhPDS4HZvFGvJXDa5LE8kApPBwplY0mHMUA/188TLtZYcFIEVfSUtqOKDc-P-Pqo5PWuFV6PjQURKo0",
                                "width": 663,
                                "height": 512
                            }
                        }
                    },
                    {
                        "id": "atteuRhd9lgeO57nC",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/JyHFFw_1liSlogd4JnXZOw/WWHGTdRoFVRNNNkHCwKFA0DI1hZ-ISHOVKprWcYBd2DknN2_jRp-GbhkRzLrDhAHxLZ9VJgqncVt97XJ1mxj4kqMcsYGdi0WQixQ1Wrr7y7J_-GxokK0nS2iSM92bDhtcLui_DNjASVfCEChMDoGEfUXEGidIH9UWPRqyYRlRiWQQui3Em1gQozTsQbK9A93/PhTkpvZUY7VkVEN_vqSulZ0Qjw5FuZFFRyJicLDvnNE",
                        "filename": "175 Master 1Jul12.xls  -  Compatibility Mode.pdf",
                        "size": 31556,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/6i28PerizqdxUJACAX8lRA/gTaSt7yzAakB4MblUfrzT8z0MmyYln2CHIL2KBm-ra6qhRZS_aF3MerhfXlFapxumjmEhAJnQHgWVrWabiiuGENRD9BZwdvnLzD6MAv5vJ2ShOloHE65j_Evb9jmGq3c-BWZTF8OCAs1KuEklzu7ug/z9sx6xPGrHI8dkXvIU16Ia26lyNkVSLYoaNBxbJDCk0",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/1Y9iPTOMC8lPY_vqJcGw-A/8anQNGTDgk_TjvYNAZaREI467DX2v-9VH582DuZw4lnhno2Orl8WeTzQ30sdQ-NSbGqOB2qWQM2-qgiKV5r6ZUezWXOxq48CWcb9kTq7dRsNLp2JhBd2Hi4ymr0uEuGXQR6xtWoRtpA3jrelCOoong/hbB06BxKggl04xlPceQJPWXRLmZ0Vj_qyBUdIzfrinI",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "attCdryp2xp9PH6Sf",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/oOtZPxi4TkOLAwhDV9Bpcw/2DPgw1pqkYkkx3mh52DfkyXpvpjjpUVjpydI7IyMKMksrkRs-8QcIUGIFRM3IfZKsXNJS5ymiKVuFAr4euZaJwqmCg-Px-g84G-EwFFxJ-0rCne27p15axHvOzH5O23LXl_R8rt5-jZfvKIfr_OPlcS2TxS9c3MrmDneIZazgzaGhH_f2ezvEfx1-PaAf0-z/2eLFGW7RwJdaP_-nfzsgomfTZKLrRQK4xteVgP7S9Uo",
                        "filename": "175 - Vesta Lock Up Guide - 05-22-2025.pdf",
                        "size": 868005,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/iH1oPXszHjvSy3QzTzHDEg/5vQa58dgi1M15qACB0BlldatRMxnRMRj4HCron_ROmT0BSANkoapBZC-lvw1S3mV3d0RytPaVRQ4D_bAnoC0P2itQfBaVn-S34IYnTjxISgoZaQK-eFctJx6CogRA9Lg1vTFshMK5ZNm234meusRwg/PbCnWCOn6t4DNnIvH6XeEPoziR1ouAxxtRN3tFs13Ng",
                                "width": 25,
                                "height": 35
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/n4_HnF3WjipnRldiFQk-Zg/wqPlliCuGeX9p6nrwbhr_9-8iXb3l2P2pNxP3mxuvusvJwsT9IVzdrXmrJAml0ucGw2BlapGiY0fbarOWEAPEIY4XrCBaIngReBPjfrTNz6-A7_wK49E2JzuwLKD2RXl1CFNkUCyt3UzqSb0ggoOtw/egjAWKEI8IzEHRpWZeiJ9vhTWwy-pPOwzlibhiyCOFc",
                                "width": 512,
                                "height": 725
                            }
                        }
                    }
                ],
                "Site Address": "18666 Redmond Way, Redmond, WA 98052",
                "Google Maps": "https://maps.app.goo.gl/7rBgyZkiuLZaqWEH6",
                "Active": true,
                "Assigned Job Role": [
                    "rectLGnMglyXQB2uM",
                    "recAkCwkvFpM72dkl"
                ],
                "Manual sort": "ac"
            }
        },
        {
            "id": "recO2RS1w0XDkBG6D",
            "createdTime": "2019-10-01T19:05:14.000Z",
            "fields": {
                "Name": "177 - Avalon at Bear Creek",
                "Route": [
                    "NE Route"
                ],
                "PMC": "Avalon",
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "177",
                "Calls": [
                    "recMAiS2K4UGiL1GH",
                    "recskSIwwR1k6l6Tc",
                    "reca59dIspmpTHPo3",
                    "recTFD3A7sWLvxv4N",
                    "recmnx0PZBWoW4icZ",
                    "reczIJP81v5bRtptp",
                    "recyIp3qaF5p9W8zE",
                    "recN6PQ7zWqfxl9D3",
                    "rec5qQnTFthQFDNH0",
                    "recKtkho77y8iJkB8"
                ],
                "Tagging Vehicles": [
                    "rec173IWyFNI52dxC",
                    "recdxfj5I0pJV9vb6",
                    "recORq8U474gsEgIg",
                    "rec7pBjICLsY215LL",
                    "recDSuHmXVPmSQBTP",
                    "rechVjwumJKaY4g0p",
                    "recfJLTtzrZIkSjni",
                    "rec2v1dSWx0WC0W8i",
                    "recRpWLEskIuv9Kqz"
                ],
                "Site Name": "Avalon at Bear Creek",
                "Calls copy": [
                    "recHFm9cB6d9lwcAH",
                    "rec5PU5FPd98UOk9w",
                    "recH0MfEUA4RkH8AI",
                    "recsQ0NdSEfRLd4dj",
                    "reciVFOQPTQU1E4xZ",
                    "rec2a3kBAKbk6PRLj",
                    "recnxU4hAUHbmaO5F",
                    "rec3yycslNCNSuatB",
                    "rec75wAihNLld8w4a",
                    "rec5IZvlLwf9E3AuX",
                    "recph0mYEKO2PrAna",
                    "recsjl6SZ5ZKATaQI",
                    "recNkWxu5wtEZDqbM",
                    "recStit3iUF1nUjiC",
                    "recDBVO72V7rzTIes",
                    "recYVUShXDbjaWPik",
                    "reccTNPDAvmDVYbRH",
                    "recHcNQcAnTapgvp6",
                    "recs33YK5AIxN6wWN",
                    "recwfMbljw13JmL7j",
                    "recVo3P0ohTQ7UbHv",
                    "recSGBTyVScgvdtJi",
                    "recqhznNHAbBF38i4",
                    "recwKw8lvudkAuZlm",
                    "recAwBS3JGWMDKnfn",
                    "reczbJByMoYoudXzk",
                    "recRPM1QU4ztkh3sx",
                    "recKyE7CMLyDar7VU"
                ],
                "Property Updates": [
                    "recMEovUShYpyZov9",
                    "recxllLjIbw1JTb4W"
                ],
                "Post Orders": [
                    {
                        "id": "attWEeCbeXHI813Fo",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/oLvVIH8CxA_ZbbUu8f5SYg/GjUS_vi56Wd-2-WWd--5iYI3WzhhZHqweJ-A73siRix6H-etIMmut-nwBMNq9ipy1pgHVEcFKqW_YY2p0R5zdvw-SDBeCjysCMX8ytwIpQL6ESHY-FMxLc07CrDv3rVMlP6ApeRzxoua0xrzqM2y_A2BSQ_YMAkDxJyyqSTv2yc/kHS8AoRY2W3PtkHw8DN_ya9sFYqxG8UDWWBTQzNykOw",
                        "filename": "177 2022-05-14 00.24.57.pdf",
                        "size": 281733,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/_D5d3NpixVTyQx9Mw_0Ztg/P6hKTIr3CJeoiW5rIYMcG4F_llVOFnzjbFjgwsghmWpiRS7Dmb-2mr1rT_4-P4PcDJATDSjISd7d7PqZjnHGz_0lIIR0lmKCp_mF_XO-gO_ggP3O9BdpUWCFqiXJdb7iZ3kgALa0MA-af_6zOTqCWQ/XpglcZ8KrCQlB7CpeWNEShgzpog_5Q25To_ns_2d5g8",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/n8-E3mWANFkd288xgxbe9w/e3ITQtzp1lHnmMtrAgvHuNRANNbWmYCt4D1BWKt5Eer9N8xMK-VwcGWY_T1lwy_b0VYuCa9brCMLljPDeC4KaluXrpMwjcIMq3bFYRavWBgN9dSrV8chglUXYVKFgUepQfvwt-0d5ojNCohXjLIaZA/rO2EOylNtcD0NoBiQLI49UbhqwdD6aSRBIjvaL6UjWM",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "att5BRudweZquizYe",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/JP7DypZ1qYQX3c2tNx_8cQ/LFaS8unDiU8troJ3XeyNw2BlzvniJ3Kpdkej77SOEBOeAv0KYri8whdHH9dHXufJzYe2_DGaWydyaCg6bNoWgX_u-eNRkMZwrwlFW5xJrvUdAzjRznoqZlK0-F1YG0WslQr68MK3GC6Q_JA5Dm15oBViQ3kO93EnhjcxnkOdl-oqOYT2wF_sHD-jgkQHDOKq/XRJvooKsFhLNYbMmnR-6WMt_wpRJzGDvB_DNVF8lKFw",
                        "filename": "177 Parking Reserved Space Map.pdf",
                        "size": 696968,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/mpRhcIhHO3StEMWbCouefw/bJh5lWVCKPfL7kvPq4K3pu0oEBXq8Wq6OuSI0h1dpPb8QnWzitbrgXl4weumkCKqVpIipJrMmMnQB7z0SAv0GQ5tgEafi-mk1hQoGi-23BEUO_SgnjOCOYm6KJgVq0wmIt2-yEmKPhTt8b7nlyAkUw/O6r1GcJUupuwn2Jv8W-EUA2tA8M-NpWqdwKkuCNUSh0",
                                "width": 22,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/sxzEqedcX1XwPIFOTJbErw/vx_nmt-fSMUhtGufLIcMTF2dxSOCZQP0Apaz4MUkuYDEo_YiNRzRlYhOkoUhiN-sL6XQc3C7_MdQ5E_yAZd4GvhMm93Kpoo4f3gmu-2acxOpjyOyeSTKoRABGLx8ItyHfODeuJElbuKB3JsigF4Mxw/DNt323QtG8_5BOkkToK6bRr0wJwN9nr_cz5pKPLFMhw",
                                "width": 512,
                                "height": 843
                            }
                        }
                    },
                    {
                        "id": "attA3Cw7Rn8CJALDs",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/iczofJU-9SjJYpI2JuFs2Q/N9GYfOoL52Dg4ErCiSte_-SFVVxk3ihyOgJiW_aisXm8gyACwQhKcEMelUbzzQ_TOx5J9PTEPPJKjv9hyLPLBEdO4pMJSHD35anGwA3tb68Pv6ji-le-ohSrka1aJrMGrwq5qdnTJTBrHhzmkZdMI_vmXhG9BwQAmATXsg5z_gEdnleELdJ3mHAy91xYWF0F/Xm1QagFQJBTlzBXbzG7e1ze-HL6CotkaHLu5ovueoqw",
                        "filename": "177 - PARKING ENFORCEMENT.pdf",
                        "size": 32327,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/Zd-RiTBn4ZEIkKEv0OVlUA/Y2PGgqv015rQa-4PIaRIrmmMMXxi7yOpVQl_ICmdYdWFSIW0z_ZWsYJCHxfd92hkAgY_ZxxwZ3yOQ3cfW1N36YTiYx7VIqHh_SYZJuA-RaD5BasBkaOK-UH8oDqBcO-S1dJqzg_c-tz_Aj-kBv3ymw/I25MywrdtAlbVRGMYooJijycgQ2ELzpNoagMIgXy7AI",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/bl-pSXpW7oLpH3OY8hoyZw/FDASzFGnfMd_RtBZqXpI2hQRtRyZKsoLQqQTy98bM9PVpJGqhsKiEJ0RXW_lmJuOKb2flSGdJOiQXdtgjn023mv231lOaYDw1n3YU9mGBSjwBO10ny99X9g4lIRK-CNRqCp0gL0pt447oVFJ8fkmPQ/gt8DbWzpCTBiiF1N-tzGORUimcsiakhxCVFK06UkOh8",
                                "width": 512,
                                "height": 663
                            }
                        }
                    }
                ],
                "Site Address": "11305 183rd Pl NE, Redmond, WA 98052",
                "Google Maps": "https://maps.app.goo.gl/5hcds4s6UvjzEsQH6",
                "Active": true,
                "Assigned Job Role": [
                    "rectLGnMglyXQB2uM",
                    "recL0l9iRkwYhef8m"
                ],
                "Manual sort": "ae"
            }
        },
        {
            "id": "recOA307dK8HbJg8b",
            "createdTime": "2025-03-19T21:17:46.000Z",
            "fields": {
                "Name": "178 - The Regent at Bellevue Way Apartments",
                "Route": [
                    "East Route"
                ],
                "PMC": "Ram Parnters",
                "AOG Property Code": "178",
                "Calls": [
                    "recgFBtYFOt96qJcZ"
                ],
                "Site Name": "The Regent at Bellevue Way Apartments",
                "Post Orders": [
                    {
                        "id": "attaadFUoNBgEVq5o",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/KEYFbs5Oe1ZbaaV0_zYv6A/yihVrGUHm6PEJSeM8qF9z_LQB9RxSjzEo26TsQ_XvYOfsN-awSPV-f3emU_Rlielp-n0BoAnLSDUy9HDDNz5MBnZIKhwF47lt6H6YUV0EsfT6sHtCgQnFdSdHbiMI8GBjKDZg8yVj9f1xsfTTPGLDcdSTedVEr7n_9918oVreKs/ofXwKRaHi3wZOOht9QuzKpea-8EJBeaVop9y7DelLNc",
                        "filename": "Official Site Map with Unit Numbers",
                        "size": 3629961,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/xo_EvH-2qU7fJqSxXvOvHg/0guR9qPJG4fZJaHW05cZjgTQriOpjgiIDq9OznOHWhB73HOy8Je_sIhjfhO96oUztn3GUp_VQi6cl-MeHuc0QYDL3GVqP1KGDJOZGKkvb6JwPR2j0v6ID8rDdRnPv5ieTLtEBsJbJiDHKdxuq3gK_Q/Yo4HfTNV2Mh3KNoW8m4yD2UnL_rRkwfTsQyy4cH6IEk",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/dkgPn2-m_FEoP-_ocsh0rQ/16m1E0js9eYu1iKg3NNbIOo8iTdQTpBWH_6B6gHVzOvy0h2IZW0aFtJUFqntsgpnaFE375VFLYdoN9Tle051bLGjuGu5-yZKAenKwICU1ocptNNxElNnh6FVuGuOXNJf__OQwvyJvcI-mBpavWZqdw/VxqLJyh4JVjvz01ksmOjzkiAYYyjDBQ-sfDSWkSxfx4",
                                "width": 512,
                                "height": 665
                            }
                        }
                    },
                    {
                        "id": "attfVXzOAuGnGSay0",
                        "width": 3024,
                        "height": 4032,
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/7nHA023_3BVYIO4EJYGByQ/pom384K4ffGGClSkjh5XHBPpx5hjEuUBYREtcGL7YSODsNeTjmAqLt4N4_ZtYRnKlrg5eE3-sYSVsNgIxUPpLU4RD5t7uVYbUZyXDxObZZnXGT_omDbNs0fT7tEmKe_ZqLQrgU1gIK--mwtYMSTtIycic2a2D8DKo6ZIvbLr0Fg/p1IYkE9NBjm-SSDulphFk2UtqfyDo1V01SILKjjoo5M",
                        "filename": "The Regent - KEYS",
                        "size": 6258222,
                        "type": "image/jpeg",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/X8qUoMBgg0J5p5368NFt2w/RUT6CUOZdr9OjqZnzhkaX_M_66bMRKo0QsGEp-dYMkkfoI7pgka59cEEdXqPunKN5bdqrDdXL5AQO1rqdC7BG9KNFq6v5LTz2UBSJzek66SXGV0tu05ZlaCEzyRq6W5m7BnI7ft15DLjWeW0qds4yw/BFm_5yQ2gXxvy4n-GkFL9WAjJtXUboPibaFNGaUN1R4",
                                "width": 27,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/xKwnBjMztI_tkdDrphTUqA/imCGDNnjwgOTbkVSuWz470TLDoMIJlEQKheD-8W36VCQRMJ1mGEqGpYi6L3YM0wne2hv97AMUTLqqlkpnylZOuQJiQVsLg-tycvS7EdWjIqPSIbgb-NnCuafltIIUOZxDbCyzyBIN3ZNCJcDUINqBQ/sv_87_hVOA2Dy_Ie3PXdCt-1wfw_xXY-0wSH-jWU3oI",
                                "width": 512,
                                "height": 683
                            },
                            "full": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/rpop2Tr-10dTQTeK_9_6Xg/hAXfWQjhCK2wmN1phYG91Ja9s0DSzXI4t3zyLwJf9VdGcwDKP5G1SsWWiIigT90iVmmJw0jDE5LPqmAUNdJi14XBVt-HMf23s9u0ZQ1x2Zg_VorYVELag-yoA6dhCYBQXJeozdfzrXL5drMlR-7nWA/is2v79Y6nkO4Xz0yJqviR71rDSZA1KbdDra_8Vg19Fo",
                                "width": 2250,
                                "height": 3000
                            }
                        }
                    },
                    {
                        "id": "attdzMYNpDDW2JlZw",
                        "width": 2472,
                        "height": 1278,
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/2iYxDUAqrEFeGoWAkW4ZfA/aYMVfE8HND4e_W8bjOI2aO0yZWk0xPPmu2YNgh0EBdNGFsxuSrxBlauNuEMlld0YYZIdqDlp_Q1KrasK6sHk8sbEngJ17NyVNazAEST0RKZ3ipao4CB-wdoIVqZR8JnfeUfF1tNI4KnXswgj1ia1O05eJBnKwPuunMrXWzL517k/DfBVGIMuxkDHCVddb7R_5AJ0fn6uDRvZFbiRP5zHS2k",
                        "filename": "Patrol Map - 178.jpg",
                        "size": 1022792,
                        "type": "image/jpeg",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/KUXaF1hKhqcfz4YanoHSpg/hOucD8CM1uSqGR2VvNlRVwAXssBuPjmOFSJ5a2IwGnqFvcf6YU25t4dG9As4QaDISoXEN9uKudbzBxsW4waWbK1cHVL_smhy-6ynWSvP2p2El0XhuS1ED79nXgKqiSec_qIBahUNEIapWsh3f0Y2Ng/HWsWDDx5CnaMa6VSsjMkenTz_WeSB_QnjL79Sta24ys",
                                "width": 70,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/xlutJEJEsMX-18nSI3_gEw/Jw-Ft9qxPfRusO5ZPi1qaEyua-POuWprpVo6qPL2lLqBsPPOhQlWMy3mMPaGWVd_Hrw8Lu1aITUoLHb3IKnY8cs-NorIdh1WEhF6uLw4bM1xA0Yz70W6hOLlaRq1ABTqXvdJQPj1dyQnB36uIqQyPw/gLB0ykadLBJBTrt9mGicoclfhByMqmpYKcaAkRs_PrA",
                                "width": 990,
                                "height": 512
                            },
                            "full": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/S57D7QHoHEnWW_DoUc20lA/cG1uS_k0Srifd-nGhKTHA-8-KfLJI103HHrkpS5qXHzVfqOxO5vdvWtmj114dlzan0vzmsiBidMD7dAGeEk1TB2U6sGSnCpoIP-etTBGLa_R5ZulRthiglmy0IIIFQXAKmQgvMVWcisjG_zHlpRx_w/8Xrw11wuZXb9AEfFFR8sVjbLhWGAlnujRNTtY6sCnU4",
                                "width": 2472,
                                "height": 1278
                            }
                        }
                    },
                    {
                        "id": "atthZFYuzXxwU0B0I",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/0gIarF3-neB2VsJs8i3P9Q/CzwZkdByw-UBhgGfnsIJ6Z0z9apXgR8jjH1sA9W3Xz1NN6rCbLfhRCSn1G1fHVXR_oM4GbByobG3r0aH2h3Ea99LMbpNPQU3PeTZB3oOHxavRsXvicWQwsRJUxLZRS8ckHlP7w6IfUocCLSZPhIjP_YQKBz3uN447CdYESbBHbAta9vPwjrPk0S9Cu7-hkzK/JakxahILpPChK2oucv57BORP9UrD1TPrZH-g9jEzPGg",
                        "filename": "178 The Regent at Bellevue Way.pdf",
                        "size": 48118,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/vsySqaI1WQL_V2ghTYeS7g/oXPMoZ8G8FEvcLD6uelY6P7o6pKAUljc19LK3vsgtvgq0NwlitDUpGBpiM_XfGPi7jOOujybFZ-OZSqwcqJRo4EgoEpF9yOQeCFXOBYkhm1KgnIUyQlBHE7aIlturreDQ5bwkkPkLace1GhTjhM1sQ/ItlRDpsFiikOwmbQgP2p9tZOTnbnlVR0HdJxd5jE-so",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/8Zmurm3JgC4eq9ynayFxSw/twW4lJeO5ps3qo674d_LIn9GwX2ZQZR8YTPwRcZA50V8t9whgb7BrHlVvO3W71-NLHUkLXAd1Tt20DAzj420hQQg_RRzTNZbQpPoWJJ6ctEUh3ijAMGRF8umdmodmdDbe3DLPX5pq3rfH48xGND6UQ/7qPCxTZWhAmXPewRqsZCue0VsF-3K97vJWN8SW7bYP4",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "attd969CjwBIIw2w0",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/HKhS-TtTTQZcVM5mNFuUlw/jHl9zW4Uy5t2FfJO1Nio4-it2nSSSjEAGIezOFA67mnxIB8HX_KK6qlyUOmTRGQjq4nTvBtUazGFjmQAz_2i3X9dwkIrCobb1kZNHAXZ6-q8U1Sft38XUeTcBm7WKXdiASZKmUyN1Mt8mDKYtARsPgjvwWdtbWXRB1z2nfC-j624sAe-vFimiqZC4rttCL06/lCrWIc4QgxzcihFTjdauCebmhomMV6phwvmqWO7njHg",
                        "filename": "178 The Regent Lockup Guide.pdf",
                        "size": 29943845,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/8X0MgDkIZ_cVq5McFIhVLw/liTMRJGpgnAcYMacK2qSkZ-08-ZHv5ZLADzOjfBC_YagtGSRaZJSmTYsLHc3MlIwipoZBKFZ2FwKqdXJW4W36cFkfeEon5GSfepRwF8CuTU_1YYsweR4hFH8FwqIAO66d3Wij4CeEvYfUQlQrovemw/cloOMpf6v9jSQMH3RX3wXVug2wn5As7bEN2U1uju8IA",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/sMhpamNrkI9NKmYITBsCOA/Nc-Qw9sIG_4Lx5DI6S3DIfivcMWRDkXx-2V2nyrM5giIM94L73dX-_CelAkDhvZD3Bin8fdHyO_f-Ke7Fdfqvw9k10MEprD81vbS-fmExeBgSWp90DOciTW4ZwAWfOVPhPuj1ka_X19kisNqluhKUg/UKeM8EmGfOhPm2zc5A312c7wPoI03h2bqXget0u2AbY",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "attrMQjscDvW7k2uc",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/8Ss2pqn6XbQA2EDM-7BRug/VNAdbUfSysidVJgxhEig2QpI_KShy5I8QBEUI9EKbYPMlgtqeWORxOwsfxoNt9nq6NH-VdMejHAYbOgVFpha_O7_qDvtZYsaR6KpAvtOdxMsIktDkgCJ8s0Wi2QdV76IlQ-uRB_eK2pDy-uNt78s1_5T53KX6ciYhwCdNCla1KnguB7ANaIeEkWlNtACjh6W/tt0Y46K5KAr46WUIkDdMChD06j9oD1tILRFpK4q9qJY",
                        "filename": "BUILDING NUMBERS",
                        "size": 3978789,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/_U615ezzIyE0wlamfrokyg/MCAPaJ6kc3U1wS5pPKxB7qvEucquUoFmPGrwNcxIPOyBrHjTKvOhzRaJEc9OR0uj5pySjZA0SB8UTgqzLkQNAVMhQ6GMbQvJRCSaqk3zDh7bB7V_FqDF1ZXizpNy8LGoDT6yuqzqDY8d_aZhO8SkIw/xQwvJ6PSeleEShlsQRlbXeMe6Z_sHZBFEIlmtCcOWEQ",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/ec2Axlbm_hbfzNqIBX6Z5A/WIa4dsfUCOAIbmES5btE-wk11o6LNmEb1eDPNCwdlwF0_m-vUT6-otOV2GNmx0ZIJ4oYKeJcxyl-EhIyGOjKL7t-SPiA2_egwHKZ2scHgaM3dH5AiBrE0NvRucmo52SghT1HvyJk6tkKFN39HaTCdQ/KC9JOUq6WqcqQIyTOnvu1XFpztCsB9dKhwoaCC9ua8Y",
                                "width": 512,
                                "height": 666
                            }
                        }
                    }
                ],
                "Site Address": "10600 NE 29th St, Bellevue, WA 98004",
                "Google Maps": "https://g.co/kgs/49Mpje6",
                "Active": true,
                "Assigned Job Role": [
                    "recHWTzg8sKgV28Yr"
                ],
                "Manual sort": "b0K"
            }
        },
        {
            "id": "recOcPX4VBGB8wqWm",
            "createdTime": "2019-10-01T19:04:58.000Z",
            "fields": {
                "Name": "6 - Wandering Creek",
                "Route": [
                    "South Route"
                ],
                "PMC": "Essex",
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "6",
                "Calls": [
                    "reczV6eDgvBhdj7l8",
                    "recxzTsMXjfcAZSS1",
                    "recTgkbStxhF28cvW",
                    "recOWpnlGqZcjpSiT",
                    "recjRHEqTI2kkLLae",
                    "recqqzm8LYRxDeQ8R",
                    "recs22gPayTyvWsFG",
                    "recVbOklPKTZh0zvc"
                ],
                "Tagging Vehicles": [
                    "recwyzMbREUZhwmgZ"
                ],
                "Site Name": "Wandering Creek",
                "Property Updates": [
                    "recEVI6lJE467sQv0",
                    "recAwgWqntCLom4X6",
                    "recYV2V7YHmoONcKe",
                    "recw1pLNxJHnePWzB"
                ],
                "COVID Closures": "\"6 - Wandering Creek, 25 - Fairwood Pond, 153 - Castle Creek, 154 - Emerald Ridge, 155 - Sammamish View, 156 - Cedar Terrace, 157 - Bridle Trails, 158 - Park Hill Apts, 159 - Woodland Commons, 161 - Palisades Apts, 167 - Evergreen Heights, 170 - Delano/Bon Terra Apts, 171 - Elevation Apartment Homes, 174 - Redmond Hill, 175 - Vesta, 191 - Inglenook Court, 192 - Ascent, 196 - Salmon Run at Perry Creek, 159 - Foothill Commons, 194 - Pinnacle Sonata, 197 - Stonehedge Village, 195 - Canyon Pointe, 168 - Highlands at Wynhaven\"",
                "Post Orders": [
                    {
                        "id": "att6TiGFJlehWoGEm",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/qD_5EMNJ9rxtBlRgz3QC3A/GDxFUM9kPQDcGWCsWliTRUlSnt-dbT8HhOJ_BQXdw8XODiWyXjSC5vpmSQAONbefcUj-QbS913G2e8bQ-VMm1XK_mieTivwVxOKyxFJrtqR8BK3WRSsBo8zGV508RDgsPACBXrjcR17auPTPDnAl0VesLfJ-84dZt4ruyyLy3tQ/BfUaJFaGl_7PCJSfLMSYL_d5bO9KeqMc_0DZ6glY2E4",
                        "filename": "06 Wandering Creek.pdf",
                        "size": 88572,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/AJiWxqGlqJa9ZLtXnL8xzg/DQAup5LiJt3m3FMUgeX7pFH0cUEvmaSomP-XoVgoqf3VrejJV-0uFbJA2BRMPi4Ac-KfPQ4xv_xnTWzgKzWEJDrIt1kti7YYhCjEmfJsr0zRLhbrT9capIWka22JQI9_UqLBMHf-5SxTSl_uoROBMA/3Bwv5lr-YnnbrqyA2ECvvTV1ApNsTidOCOW3CsOyiHY",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/tJ2GPeeF1E4XjXfanrxzsg/1VI_ZNQ8aE5zkPDtPjzKG5bEotvkadgrpJ3VLJHh04i0t36cuHaFTAWI07xHSJT6XykXBQkuqqljTdF3MQLSCRL0iVOm33g23lqt8AgIEqLfB2x35Lj-Ff3oihEFGhPBBziBUdu7wyzZ41mQdTYsiQ/6pjswwPkhWUlpI4nF_E2gmmncy8aAmFvqgTWOVzxjV8",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "atttopOK3a3MH5QRe",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/AEYs0nBYzMapgSvVAhcqWw/rseJNTnbcD0Yzk9cWmEukZhgmBPslMB5cyZtD7zDzBRcjIZ_-IE3cVDLelxB3gsRwbIU09_9IzYEUxi-lrlJyCvr8vAGGWRfDAurzcTDcFIQUPGxAMJOPNgS-_WA_9tZsdLLEaU8AizlfUmPj3E7jOKS9gp8BU04VUUSuIIpipyK5Qm7wDCxkthX74ludl4P/ptKV-UcyOUc_8e7IPto66V5cfIG5PM-vH9y2Po0QnXs",
                        "filename": "ESS_WanderingCreek_Premium.pdf",
                        "size": 6832432,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/MJx-d7T8McWG57-JeV6jUw/zx7BaVg4JUvEj2fWbCXEhRNxi-bW24MHRFT7oxh61aQIkQsO4DhBn8bu_e9TWRRzSCpl-eeyghVDA5uDHl5F7M_kkvb7PMvi6i61ooFf-96DfhASyUZ6EZCnsXzdAmtaCfcTpDkk0k7_RXf9M3eXjw/B6R2ce-fII8CmczyG7-TXsonTnIQ9FvZWvuCEWAlViQ",
                                "width": 47,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/b8TSnpV_bJTTfX6g_ndx6g/ZTjE_iDB00rXjjCEBx4XtPJaMkpGY_Uf86EKEsnICmqLdkoXmMSQnnThUX1UppRkflBPBasgmuRrINyaEvdzxgJhm5H3ajlmzFIpCWmGyv-sjZDiqa_Ry7kdMd9zEfBKk5XSiIIyTuBZmmCU5s3-2g/3Qc7Ip9zuntm-_j5nh3iI5kW_klDLoF4cbKp4YDFY_w",
                                "width": 663,
                                "height": 512
                            }
                        }
                    },
                    {
                        "id": "attgM35U76tIyegqb",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/YsivUHLQ6Pgya1uItEzzXg/4Nrl1BlsKRdV9oq5lNfuthno320c6HVlSiL2vfy6GUcEa2QM_9LsR-bngzkG_Q6onq00ETsdLOdxkr7SnMxKV-TMDulQ5jsS6Aygi5Q-HwsSokJcJaXSYTHdvS6gwssYnwgbFWgIuMY3E_VRZouoKbUyWbFRTJtlFOHUFinfhbGZgTMCgQKUPi2BNaOyzL36gfCoSor_Xz7aoFUmWgkUBg/eMAbm8N6LiOYC2mmtnkJTjpRkK0DQTqO5nbojw8NIpY",
                        "filename": "6 - Wandering Creek Lock Up Guide - 05-15-2025.pdf",
                        "size": 815233,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/MAb15uqK3lgbEZZujRfhPw/I1gKXD2TC5A_Jo_TTgAQt_cazp3idhzQPa-i7BmpbzkG6CQWxYm7T5v3BN2UDhzok7w7orY_xlFfqzUhNcagWfTdEYhBN1qiGijYKVBuYlILTdcYQaH29jIbadXX2jAufITn4xNpfUHHI6mkAxJDRw/6H6yxKi1fBrz-iO3qE5Dex8NqdJVy184WCoxCO0yAqk",
                                "width": 25,
                                "height": 35
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/IqvDo-2_dhE0Uh4NWZV0dA/QRZFtm2PhOfCjav-_8erRGjm5fiMUtBFtG0rpjuCujGvVImiNCS2XOsE2jC7lRTfj4Ex-Zpyr5lZKIUdYfYpi2OBFvjWiOOkLXUdaR2eBjdT6_tuXQesN_c8BftDmNVsdbiWALRk_oR241quknkERQ/NoM8JSDzCuTZ3EjnGvwlkALEl7UjsMijgOo46fQsYwE",
                                "width": 512,
                                "height": 725
                            }
                        }
                    }
                ],
                "Site Address": "12910 SE 240th St, Kent, WA 98031",
                "Google Maps": "https://maps.app.goo.gl/eqBvJPyk5F2YRfhc7",
                "Active": true,
                "Assigned Job Role": [
                    "rec1UASONUxcvY0m9"
                ],
                "Manual sort": "a1"
            }
        },
        {
            "id": "recOuwCVjuICyP7Bx",
            "createdTime": "2022-10-29T12:16:13.000Z",
            "fields": {
                "Name": "181 - Avalon Bellevue",
                "Route": [
                    "182 Bellevue Community Officer"
                ],
                "Status": [
                    "Dispatch Only"
                ],
                "AOG Property Code": "181",
                "Calls": [
                    "recHK8jVZ6hR9URgN",
                    "recDqeP4LpdwtGlza",
                    "rect6hbBAjAC1lC0d",
                    "recTuvBqJzIsxAnrt"
                ],
                "Site Name": "Avalon Bellevue",
                "Property Updates": [
                    "recaLzlPDYOlx3oP1",
                    "rectQ4D6RIdCxThaw"
                ],
                "Post Orders": [
                    {
                        "id": "attZl7FjUGdSrUTxY",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/nRYbGXgRRkFix_ecEUtQmg/1UjpR2z8-5VCoBveEwPTF9J89QT8Ed0XgjcaviDVRrRCWNGATc8ksSF-iFUQJspM2-RtBduU7IN03_DIQ5tMRnswK-rEtD79MA_zRrcbQ84jRiokhJhDY3p_rD5j66IfgSTeb03lNFVKzJoeCFWbxYQmt1XKWNRdSppD4HMM4lY/pCKWu8xlO6X3AoOIzgL06cXSiGRFZ-xZMkoXMazdshU",
                        "filename": "Community Map",
                        "size": 546562,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/Heh6pbOyf1Y1UZjR6OQLUQ/-aJgTUl5eZyoDNaSqe-4nHkwRY_VxPhBvA_ZsPL0n35t8yCTXQRJzXdTZEJKvSzFvBMrcbjb3AY1EWbZuQyE9BBqSEhD9RycqTeedYG_cREAoPZchcmAN_QaNy6TDxK5_fnIugg-KOKAovJMxVuePA/Kr4W5ZgPgsYFrF6VJrbFwWPnP2Z40AtX2vSJ66eK3_k",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/1LunQkLQDbV8IS56apTOew/etfn0eYnIJ0g_lJNali3FkVP6hqdoxbMejGYfTerxxeWqX9_Z50I2isxmrUrU1i_tevcUai0zfozMDcDO-bKURQDeKQ57YCH_RyNcTQD601ycNJd5Fr8prm0Zk75b2unLXrBzPbZNsEGf43bC1AgWw/SAat5x9j3MuiLc4gYtTfoGcIDv9xumh_TFB5cVq2SyU",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "attMk54dpgxEfXrgD",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/2IrPAvC7lpZvhA_2iEac7g/Tvsj2qcfxlnG-_kLNZUkHzSC7hA1Bu8sEieYImjUsKoXurEPuWmjyE368zGdeF9Hk1lu8yBQj9NKVfowBm7AmR5vezdvWWutfMnuc1aDuX61qwvzbdNUfEcxpgdpkpN659I9NOGaFd84Kf9uNc-08FNmmVH1M8etdNhoFn8z52Y/irLTx91HC2uji4CWv5fr4zJnUZQi1LDRk5_gW3MNdH4",
                        "filename": "181 Post Order.pdf",
                        "size": 56119,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/TX6WtvKq_GXTJWrZhJ3c9g/Zlzqe7o64jqjG9xTEdqHG6wL8allhDQPK7zbbcoxNdpOJZ2LBTKbr9mJK20Qtz6vXaFMY0LzLpYJXtDQBfUx2SzZCAY5lRDleimOViDUvxyk9w7r4sFiRgiQqYSQwlkbonqHQ_13iCaPJgZ9dz_cRw/PfZLH3-kDC1oAavAGR1cszXLBiCICEexgiWJ9wYQIsM",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/jXvQkQn5zDNVNqMNlMGfoQ/2dDLH3Nh6Zba2Mc9skX0sigBoGM4-52kUb-RSWU_aeoqYSXXTOGmQssW1Zw5CtneVzh-4VryIL8HDMOB9f6mGKSnR2eOP-euxnrnvmpwtOwRLGrF8lCTQNSOIVuo6dH8iaH2TF78EH2VYzWZyYj5PQ/RZcuciXpFff4s0Th0CpI37AsgWYmrKdhBU0P5VEfrjw",
                                "width": 512,
                                "height": 663
                            }
                        }
                    }
                ],
                "Site Address": "11000 NE 10th St, Bellevue, WA 98004",
                "Google Maps": "https://maps.app.goo.gl/HjyQeJdAmhVNf22fA",
                "Active": true,
                "Assigned Job Role": [
                    "rec66CkdWQXNH14i5"
                ],
                "Manual sort": "ah"
            }
        },
        {
            "id": "recP0IMs5Vx0GN1Co",
            "createdTime": "2019-10-01T19:05:14.000Z",
            "fields": {
                "Name": "198 - Corbella at Juanita Bay",
                "Route": [
                    "NE Route"
                ],
                "PMC": "Essex",
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "198",
                "Calls": [
                    "rec42edgUuBGikaIA",
                    "recDHWg522PQQzjzx"
                ],
                "Tagging Vehicles": [
                    "recXWNtGdyw6Lf82Q"
                ],
                "Site Name": "Corbella at Juanita Bay",
                "Property Updates": [
                    "rec2KFN9UwkwrnqGb",
                    "recVYPOsbX3QXIWqi"
                ],
                "Post Orders": [
                    {
                        "id": "attU0A29eg6HpgqWj",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/3rqVArfBKvEVEtXeh77LvQ/U8OviS8ZZosLuc9KRob3A1FIIg4RWc7pOWp4jUISpQeqWcZPWvHvXKT2UQZnBCt-A_WtgEk9Mg4KJRAOQnbVttvr1CSKU9UOK_oaYAESiv-Yt-iXDTR5n7W_RscLqMEIZ82dz_0AvLhOEr_7hX9uij4YReUbWVD_xxmvUn1ycHw/lXMC6ZTZOuahjZ051vccqTLGtLow4PwKIMl3SzTT0kE",
                        "filename": "198 Map.pdf",
                        "size": 18105506,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/qq8kBFT9qW1DvvYl3_NZFw/UNDNvsk4M2TYn7xy9DWyELgbCjmDGNHBBz4nFYv1JO1Osw1tL91QkTtu3DFKzLLCzFXt2xb6WyaMIzgRTO9Q8ldYJtVRmUjws2qQhfV-tvnyAV028o_rRab3IAWOkcnt1pyjV287j5QxoSaIGsKWFg/SQ00QbOsI9Sr-n55_c2wmtpqXTr_WdhZsAhMvDMOx1s",
                                "width": 47,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/lUZzmZFTHnwFX009EY6pJg/j-uVJEjzvp5y3my0zRlvGWqm_eKCcLFX7CrVPb4hLIE5brdYBt5I3CsEpILrlsseE8fexjclDQdAnYwqIldeKqwLe9ojlRaaAVAaT-y4jg_kfhMv4B_UTGsXdwQAmySOsJ-65GXLHs6HN9WhGC_reg/bFhktyJkW3a6UZUtRlZ8yYjs6M9fUiL5Nv-uJy31Fos",
                                "width": 663,
                                "height": 512
                            }
                        }
                    },
                    {
                        "id": "attlKfxFzBHP35KNh",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/M0pKDk-vUo-aZaWp0KsxaQ/_Tc8a1NVAt5xfhylHAQYSx3o8hWfj8jkAQt0mofZicwhaSgQ3ZMSTM219NhA7no5Du2MgNkMrwwcbjQwxcsm3ic3F0Z8iN_YvN94jawPP5f-useTpINobMhCOarHHNPYoiyeHhj_qRx9JIzkeAGWVXvUNiOvAOaRdjE-nGZaCeY/iGV4nDIXwYW1w1eb0uXUjxk_AyHZYZ4Om15u0bpIC68",
                        "filename": "198 Corbella at Juanita.pdf",
                        "size": 298006,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/RWeja0--zCbXOEJsKd6fdg/f3X4L8v-NNwzNKiSrt4Prp_Jt0PKBadxOnAo-QtoVeCNKW7wVxBsTMuLqUgfD3EBk0OKs6jvoYAHAV4U3A1atoIE94iwzpmwVj3_oZDStoAS38u35RfFo_aNTW_PHQ_9qIW8pJKlPeHBAihw14BIgg/ezuXy8G62RxXER9OuD9inmfwh4MnDkkHCEEVW9pLkfc",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/PTz3RytHOuTAGf_nJahmiQ/2jI_zqZ-IEIZ285kuf3Uq8Wa31rnr9gmt7UA5Yy582-fgS285JYO4w9D8utk5fufqrl8QPm2DghaOLSkWqtjSeUmvngEJujPCTTw6VGteUAdqh53Xsm3OUfaeTOot-WZE76Dj2IWQmC1HkOHakcMTQ/En0ENOeanEpzgzL7pGbGn8YvQ9a74fKBYr8H6adBBss",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "attGyoW1QkKH7Sog6",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/Q1joHKkVT5q4WQiTOLIDNQ/wXLgayjdVesyR4CoLyq-nIJCXOEol-TzDuBhhjXJeffqVWKEikxTKHjZTdb4UgmCj1Ciy7Gy4nsjNBewXHTxbvBJUIOuIBOAT1X24LR9sd18oTNx_KTS3vboVkzsQ9YX9-WViP1sRZ-BRqimMsHikGUF8t2cwvFZBCS-q4w5xq47lHBGUNJGuqyQ-2HWuHPXR2XBO00fi-Kj6U85zEnC1Q/Zpy_liE4PW-M-cnB-oZqPHNxTsz-f1kzjtZsJeqmYSM",
                        "filename": "198 - Corbella at Juanita Bay Lock Up Guide - 06-11-2025.pdf",
                        "size": 893211,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/OumdJanKIq_xTBz_LXq9cQ/7Jqt6oGJOPejZse2OEfqldb8b6STbUxFfGNC7VIOqroq4zpUokFy2GmBezk0GJvx4N9vFfwkAFgS6roouGil8L9UEobfGqMgwz-JWgFSRoo6-9quga6ZPO1Qcct-WWwUqUemYVbxcm9I0qZdacgmaQ/Ldw114_-NWr_86RJGZo0dELypdQ79sYx5ZjeoU-YnPo",
                                "width": 25,
                                "height": 35
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/cSLEF8V9rtPqPklKDfe5TQ/idFg73QgAa4_5eVLNvAXJ1_HxoUopJXeCsPcfdu3ieAcooO3YW9D5NGoELTl_lT70W8dpcmqYdQbAzb6F8eROhTO5mC8Pc74V-3cHcFf2rxB6Cz5YBmmWIilchdnlOAhhdt0tHNftKJToRpEVDlK2Q/cek29DSxMQT49gmN4O7pt1wyU_RnVQlC-rdho3cFuBc",
                                "width": 512,
                                "height": 725
                            }
                        }
                    }
                ],
                "Site Address": "9536 NE 120th St, Kirkland, WA 98034",
                "Google Maps": "https://maps.app.goo.gl/s5d76tDH86HssKWe8",
                "Active": true,
                "Assigned Job Role": [
                    "rectLGnMglyXQB2uM"
                ],
                "Manual sort": "ax"
            }
        },
        {
            "id": "recPzHhhp3ln1QrSS",
            "createdTime": "2019-10-01T19:05:14.000Z",
            "fields": {
                "Name": "39 - Omax Corp.",
                "Route": [
                    "Perm. Onsite"
                ],
                "PMC": "Private",
                "Status": [
                    "Perm. Onsite"
                ],
                "AOG Property Code": "39",
                "Calls": [
                    "recsxMwyqkMbalnso"
                ],
                "Site Name": "Omax Corp.",
                "Post Orders": [
                    {
                        "id": "attaA7Fllh8CU6vh0",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/t6bgYG66OoQGLCTTbJynJQ/KzOtsHyQLM3rjfvrkT_6trgvtygqF-4nfBsOoXzz97PzB_i6adPgvL_z5WMR3hjsgaMAFsjTbCgQ6l6ja_-Hj2wmdrCOFD85nnZVmS0Ogccoi1V2eOmhxL7e9RN07DSryUJV9bdUObQiV05A1q-SUfJ16d0TB2-WLwwmrAuUGKs/_U6PDBu_sib2xrOf8rrTf3pkW1uBYWDiKP3KojLDmkU",
                        "filename": "39 OMAX Post Orders.pdf",
                        "size": 25031409,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/y_tQSUg_h-0BuVSAPJvHDA/oSNbT6bUkFWRnekG6eSnM_GH8SpvkZOQxQEZRNL8cHHRbaWtbKN66Y5DnQieS2e661UdfwN7KkenZufsMnbZq6cQa2FMK1kKme1yzZ2GiYJlFCbVfKabdzse1jkFIaPDpaJB4nrHtyOcF1KfjGy2KA/rkL-33dxsbJ_zipNsrxZYcClJq3XnnhpBpFyz0yj_FI",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/WSt8O0DSQEXqHeL1XrweIQ/wFS9x6Iz2R4k8bRp8AfXd9TjkmgfyH7tF6sqn2UfMUZ-9e2cy6A76pXHfGLnp4QSAfYYay4Fa_ouxUWLIWdpg86LLf_en0iBWVElDLi6lbbL9K9X0g396iAAAA9OQgpqdaUQIe4Jv9J9iBOFMCHIrQ/9uVv0SwRz8o2i75KFeY843r6XM2If1KzI1ciCd3S7Fg",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "attbQnLrDPQTapIUP",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/OSCixs1GkK3RKDLjj6xjaA/cVHjlvEkionwbffZur6_4spHd9cxozHc12dWUwHZA4gj9jjGfoh0vJ_quLDtwIdfGvoIJZBkux17Bu9Rh8Ewr8Grv3D-4bOpLyTgspL9sjT-A9LeUDDyhInNxX_uojiRRmRpIXWg05h-9g_WW9JLmOYfm1vW5MPrKeAl0666-K064kzBo_pEr32uNgIRsXU3lLhOx7c2HkHvCqUsAoRPAQ/HhxGlihqtgAtGrC7yYxjkhWttVbLl0DdQWv2amMZB1c",
                        "filename": "Lockbox and Parking Instructions - OMAX Corp..pdf",
                        "size": 1718871,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/f7dDdWqS786w5tqI09EL-g/gOvlotTXT68wHU2OxAYRHCEIk8Bs-M4LJF3t3CipE9H0_YKJdWEiWulpP7u1EmdE7onZJ284Wj3zJRdsH_6-5kUtF0h5jG7OQeaZZj4TG4rQIJgtkBy08l7pMKwW7-eLIjRxEFCU8CMOYlc8wH5hWw/0KGvZlAcFsqbr7cSc18sYuGlctt4W6wSYiISpVtx84k",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/DO9zV8zNL0rCQiAVzLC5UA/qhkgGDDQr4bYEGIjw3mA24lzqX6aIdW0Pdu5wjs9LxFQoRvDk2VfHWMnB7ELr4bO4a9gB-nwniX0u5CfUOX_1ocJIass3IzwrvShJrnTzxV6i6VeNz9AoFtMw-xYNOASzfDoAz6jQiW-lzfJc8CO6g/lRaX_AfJ1wcXOpft_DCc60WRuAwB3_FMBauxzVJv0Ek",
                                "width": 512,
                                "height": 663
                            }
                        }
                    }
                ],
                "Sample Report": [
                    {
                        "id": "att7Yv9wAbWhHPaER",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/trqU5doxrQkKjHVZUGdREA/gDv7Jnf--x1ZMyiJ7G_wKxVV2zh-RqHMSsJFtEE17zgMXI9UJhlF1Bix4MrMCG8Spl443un9rXtWU47B9n88TP6rpR21nje83JuX-yV-vARhq4fn4mwY9CIWa6ADSxU8Yl-klcgp0FGRwxZ_UFFymGo6_6R8yu66xWyy8_Gfbs0/yS3UANQfDQ2Rhii17hL6K4PWKwr6JXqvPaOHzHGWaXA",
                        "filename": "2023-12-02 13.46.12.pdf",
                        "size": 732416,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/_e1mP0OoyfLbdfMY_iz0AQ/QqaCtEfb_Fk2H69JvEUxMTJGAUM8MA25ncfD6-E1UVvndZUiBvKj97yKXNClR6hngV6ZhAtZjNeSKxs__IxeMkibJCYTEOD6CT6Du9OSqz7yXn5-CtuUVF7kjALXEvA8zcbF-1sH9j0K1AqjKeLZlg/Aa7fa6AUscy53wUSI7Ous1qiRC1h1blux3BWZZcI7iE",
                                "width": 25,
                                "height": 35
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/kCYiuw4LPBR-r3XOKDWDdg/ZOLTxtEOVsF3exmw7XOYwsE7-i7heulS7rL5UdL7BCbNyeFe4lJtmqqKxsasTxUuGrVvvIpWYd1NkragENZ4fuZDffQbw7t8VtrttNoUuHwx0KsBXLLkvPE_TwffzkmuF9mX5_19j9qxhlL3ElgShA/VfuhLGuX8YKV4TG_x27TbZinvPWobE8ZawdkPyo8BN4",
                                "width": 512,
                                "height": 725
                            }
                        }
                    }
                ],
                "Site Address": "21409 72nd Ave S, Kent, WA 98032",
                "Google Maps": "https://maps.app.goo.gl/dUnnhbs3HZ3FEZGt9",
                "Fast Field Username": "39@aogsecurity.com",
                "Fast Field Password": "Guard2021",
                "Active": true,
                "Assigned Job Role": [
                    "recZ4wSPYBuFJuzHF"
                ],
                "Manual sort": "a7"
            }
        },
        {
            "id": "recQwngNu5oGVhkU3",
            "createdTime": "2019-10-01T19:05:14.000Z",
            "fields": {
                "Name": "170 - Delano/Bon Terra Apts",
                "Route": [
                    "terminated"
                ],
                "PMC": "Essex",
                "Status": [
                    "Terminated"
                ],
                "AOG Property Code": "170",
                "Site Name": "Delano/Bon Terra Apts",
                "Property Updates": [
                    "recr1Bogp8Q2Xpb8x",
                    "recLiUlBjTYvfDn69"
                ],
                "COVID Closures": "\"6 - Wandering Creek, 25 - Fairwood Pond, 153 - Castle Creek, 154 - Emerald Ridge, 155 - Sammamish View, 156 - Cedar Terrace, 157 - Bridle Trails, 158 - Park Hill Apts, 159 - Woodland Commons, 161 - Palisades Apts, 167 - Evergreen Heights, 170 - Delano/Bon Terra Apts, 171 - Elevation Apartment Homes, 174 - Redmond Hill, 175 - Vesta, 191 - Inglenook Court, 192 - Ascent, 196 - Salmon Run at Perry Creek, 159 - Foothill Commons, 194 - Pinnacle Sonata, 197 - Stonehedge Village, 195 - Canyon Pointe, 168 - Highlands at Wynhaven\"",
                "Post Orders": [
                    {
                        "id": "attPV5VCUsPAxreQQ",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/KHepxQnjKyrhL_CgPiYPBA/i7L-UfHvJS7dNmauNjyDHf0CUJYcUBaynXkU4h7gpzem6I9fiZsFYj0XEOhJ4kz2oA9R01ya4Atu_HYx-UlPHie4Y1q95gOV5ZEqjtFEDXhdOQO6YrI_u2yLTd6Ouda9iPbu9UiRtuq1UoPERQS-97CmkfhE0ryAWMbYvQrMBAk/rtYIg16F6ucY5H0WzE-q3CxCq_qY2IXefJRWiWLW_xY",
                        "filename": "Delano_Floor4_SiteMap.pdf",
                        "size": 403647,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/8xqNboEPApqJWUzFtqr4tA/Wz3yFz3AwHCPWuGrdRtxLDsLyBZ6GF3uoIXCQtcaeZLFoq6wif3QIS1LQZjN5y0C8lfgJHGBn1_rLtlZ1AhFU5f3E2YAFy6WlzVqfhbrCgCZ-vCcZuPKHXjZEDdQV-tgt2Iw0rJkqGCGEiSt7eZggg/QRykjsr05XqebI1hwGtK2XXuAoFNOOUuXco6b3zFIy4",
                                "width": 47,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/C8qda3uCComsfFQyVEenOg/1vEiBxzitVvinzuvYKQMyf306ryz6HJ-SW3-OoTiTBmYRj-w_yabHLONiNc0OKz3rVjmFPt63IwnI2nw7ZpSQr9C0I4ZTCcXHv2JxM5DTwStLDUVI0w_RO8nn_66fJSsThsr7ETk0c1oolTYFEc9ow/nVX0OiY0iXEYTy3ank1b3UKtdWQsQcxq20swwQsNGao",
                                "width": 663,
                                "height": 512
                            }
                        }
                    },
                    {
                        "id": "att2GSHB6xbZXpgw3",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/S67vbxF1GcxJ1u72W50ySA/KxjgsSXNDc3PbzpL_Car0uf91cV8xiAuKrVMk5tLRPQJgXv9nJYSJ0UMGoRsQmRr69xZu88oZrh_OlI617VK2TPfFZQWF0Kgx8pS2YnRMOURdRAD0pXjKhglEGwunDpjj2J3D13UgZho_1tXm3plZzliMsNQGqyKcxJyocaaxMc/JrE73bTrPkW4YwxIe2LotmJb9Cte7Sr_TgM2rXQyz6g",
                        "filename": "Delano_Floor3_SiteMap.pdf",
                        "size": 688314,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/SjClfhcHaGI0OLAFXzxtIQ/yZ0XXOyaYnSWx5Lddai5eEfoc7f7-uoDeIn7EWKRbp1gkcY6N4_CD0vfYQryMgNCvvexfnrb0EwHzOZQIBrnpSkcTTvwyACsdRg4dirHMn0u-nNJUvBFok9sPdoed5gHprzuIkc9loIKW_C0tR8nYA/riSNT5Cq0wbzSr7yTyWFguJCscXzEkffaZtVApyZwmQ",
                                "width": 47,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/MsI6z_Tx4BsVBYJb2xhqkg/q-6oXyhqPhiAH-h7P3MmfstYXGZdrULoKN3oKUlnWD3Cl7-T1p_HZfmedl_qNzlVyWRvCYLiUJjWQO5BoYNOX7uImWEjHeTuKqh5ZQesiHQE97qBXZgm7tORbHDMD3KWC6qu3q3a7z6zOwR5RN6YCg/QP9js4B7L2TxldU3CLLazjtJ8ASm7UqRlKMnCBFzBN4",
                                "width": 663,
                                "height": 512
                            }
                        }
                    },
                    {
                        "id": "attH7y3a42oOwg2bK",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/Lwe1c6J6Q27_iuhhgrdvvg/yLZrmJ-32KEzk8ltPxYoB7TUjhQiBQnovmC30OZ1pkXUB6fDwosnw1nlb-HZuaR8_RTN8wUOQ6E6u9Ofy9DrWv-7XGU7T2WD2IipxTTxL_QZB5RNaUHOLPO98GQ-0siUUF7nd8AdxIpoY3EEdOy46K2B58GwOO6Yfr9gzTPbrwU/J7wuE9S_NeaXmyGP90vZuowjbQUu0vsyc-CYguqiXL4",
                        "filename": "Delano_Floor2_SiteMap.pdf",
                        "size": 465602,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/twQj561fF6zKrdeFurYX1w/frkVEAQIA1Ghp60MfOhV-OY0w5oAPkYycrq96EnRx2msyZ41LvG-ysfOwChUwQa0nEwSDFDBPXMbk_a6b8klDTDFL0AEppsGHeEPHXRFu5Yyb3onGdDwh_a7kB9NGggF9EsoIV9Mg6Gcrl-CKV14IA/O9rGfpZtP1Y2LxFEKD_bd7FL2aoU25PwXpD8YjpCmcw",
                                "width": 47,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/Sag30VXCpnIQJpbG-8W_9A/sbsQZtxcIu0CROAXOTHmg6WNSjph8la4xWcDriZjURVIgIVJwhNVS1cCS7s9dVrV4YCo_FxvtZ8K98PdK-KpaXuUmtOPD1WHIxTp1SGW9b8PamirBxbBGy4BXlWrlZsntGzJ6r3RoPVTazwnmI7nfw/sM5D_I8rAtJVC8vRkMNY47dIRdQupq7RE08jNF5B94M",
                                "width": 663,
                                "height": 512
                            }
                        }
                    },
                    {
                        "id": "attJw8wZ2pv89za0j",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/LizgQvQnd2oYhcpcPVs_Fg/8krEYTzuf3nltMNcIRGtZjrbTdBOty8UwIpS9OO5IDTZ2XRVJ1r8KElLf_bCB-O-1aGlRtQRXIiQzr5fr36GX6V3EiuHnIXZJr8ArLfAG8JMYDnvptlMQ0ak2u3B3pG_vQgU8EpL2tUxrvYJ9wx043t6XZ_6XJEIwqPBWIcsZFI/GHXm6F9l5jJ257hOy_6KA9iONuCFCc677TK56MBa_lw",
                        "filename": "Delano_Floor1_SiteMap.pdf",
                        "size": 531259,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/26ybmQkNprEnmHZE95dW1g/npZfNWTW2ovtLS8ct8SUZ5Acg8yqfJDVLQARR0RnFH7zaMgT6D-q-C4FL4qYgetQX8rxTiEW8_QfAV9STj889L9lGZjA_5dBY55jzu0HR4riBUiBM52uuV25QZcAnUx53YIrpUJSOFvWnYU0RJofZA/ChYIaR7CtfsPZQ4qPRlitWX1FM17yvM47zuuMboSyyM",
                                "width": 47,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/6gXxDguORMcg4P7JCP0gRw/DJpBSliUgZqp6wOkueUejDWO12mfAeH4qFPzeWKoU69vdiFD1nhohs-au9sxt2Yj6Q5TUAMt55KU-ARDIlkfwci5olMjOpAiWWD8Pirba_AyIs0lOeO0HK0Ot6BtD1P5LYxoLKQEK_Hhr_mHvGrdlA/HUp5ZKhvHvX-Lz-u5OXd4g4cr0N9jnWm1bjqPoIYyOI",
                                "width": 663,
                                "height": 512
                            }
                        }
                    },
                    {
                        "id": "attAzAepl9RBTbq5K",
                        "width": 1242,
                        "height": 2208,
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/nZhpIUZv1F5RMYK-Kl3fjw/UKm4mBQOhFBilDaiv-UEOiHIjxfJK2CcT3IhWd3NFnGFJqPMMdR8Oqf16wuUgUGZUaAtElZ3eGMpbGKUOHu8J7EMS-3HW518jign1sq4LnyaaySdg4Dqv8EMBrGcnUMsaWkH5c1H0dibL4fgV2aPinxvLYiFQlLJq7ekTsQ84FY6RYmJjPWINDQhy3Tqfrqi/Nt2i-fyBE0C6cf2lNQAK-P8f7xqhMFBQyWuJWugsM50",
                        "filename": "Delano_Bon Terra Building Names.jpg",
                        "size": 650311,
                        "type": "image/jpeg",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/3R6dV3-12o1au5HDqRo2ZQ/cgv0eUHZoKNd06DIrkKXfyqsQqqvWMXuWsfGSlg3duMgxNdRsarsZOYF9I_w52YnhcHktjwwi324pqCW_qCSnfKhvIvExwKsB9PoTO08KGnatCySPKrNNOrnJwsug97vlcsX1EpA8nJIqKm5TmkhIQ/BVzYPTyxtTawQGu_oAodKpxA0xRIlfhoQI1GcRN-G6M",
                                "width": 20,
                                "height": 35
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/rED6Q7DfZfIWVChX5gfL-Q/sPfFOy1xJmO7-lz7_0YvY_Bx2ATO3l0vl4pXMfuK6ocj1y4E4Y1MqNCKnorGP2jcwK3NnXsxCOnr8rKuwYLJdtk7fbtggjPTm-7AFs1VeuUZMrIdvdbkJLkxUmIcnaMuTv7kkwmH6stsnZ8YGuhl4w/4y9MfyWqwiLlUaOcD3KyA_yEU5dQveSObZ0V46CLBfo",
                                "width": 512,
                                "height": 910
                            },
                            "full": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/5J422yBli38hjfnsIaCXDQ/va1wpo9ezjuw8G9wGY4FUW6xaTmG8nL3Y9g7NNz8ZXMwF1nEOKSwUIm2hy4mR8oc6ZdtGiAeaUF6iRjgGmOMV-vo8wbqRK-yHdaxnPZHhE6-Y1YsPkHNoTQ2MgWWdNqRZdoj8BhtoZBM_QotBwgiYQ/4lvzBv0j3VyrXClk4UURc4i4YSlQC6xlowxIcS9Hm4k",
                                "width": 1242,
                                "height": 2208
                            }
                        }
                    },
                    {
                        "id": "attDHEwqSR6FST5vU",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/KJp_bb8tNWI4BSpmqfaKiA/uDiUmtcWjFGwIXBmhmRI6YnUEJ58cW0Xev72npnj2WC3DbAaUiLP17Vrug7vS59OrPrK8w7Ckw1JFxvpJfa3mJu9cJhcwUqDHMjnbv7fm46UauNw1ptndGlTt-lSx9yM68B3eEmFKDsn6bKmfCTGCdjP25LzX2YGx_Uq4kgTUaGG621ZcvkZ-Fp4jjZdgbJi/2EUrYkFmE2L01DhbYiamh2GDGEbBjAvL0iltKk2-fsc",
                        "filename": "170 Master 1Feb19.xls  -  Compatibility Mode.pdf",
                        "size": 28071,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/JfI-JRGCqAUoF0faPoDBPg/uMRYwxy-hMfAWYeFDn168mKx61siTcUUEt2gYzuo3kIkrmhjRlt0ZuaJblWeBJuh6uF6s1rF2YEE5iwVEtU0c8mGITzg2shxYghtzX7v5iJb0dpe5VlfaNk2RJgSHhlWGhZPcsEyXhX2uhIcohzyUQ/v1oieSfuoenElz62ZmZJPITIDhP9QqFmTkwtXQrbvgs",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/4q34P1qsnjxqV8oOmQ6Ozw/2NuLIklKICuJhgWZX1cpQNGn7FWjH9I4iER2U7grPeZ4veSwReMb6FtKQ7i_KpzM7qbaMP0JMPiamOByOft2MozYucI1_aJcZ1JAKs3HJfFgmRD10wu4XgKbPuk1lr32-E7ufmsc8l7zvN-Y4pkspQ/vbMlMNXlEzKuM7m4YiSxYj23jRNpZzz3ofBKhO_EIVA",
                                "width": 512,
                                "height": 663
                            }
                        }
                    }
                ],
                "Site Address": "7805 170th Pl NE, Redmond, WA 98052",
                "Google Maps": "https://maps.app.goo.gl/to2MorNwfXuBwiyt7",
                "Manual sort": "aX"
            }
        },
        {
            "id": "recR7yXfckljviVPS",
            "createdTime": "2025-03-19T21:16:30.000Z",
            "fields": {
                "Name": "178 - Peloton Apartments",
                "Route": [
                    "East Route"
                ],
                "PMC": "Ram Parnters",
                "AOG Property Code": "178",
                "Calls": [
                    "recqmokpyzTmlzogU",
                    "rectlXRs3KNbO0h3Y",
                    "rec9doYwjwr4Wm6LP",
                    "recsQ4sJvFbQUkM8t",
                    "recOO8PWiEt5Q7lwS"
                ],
                "Site Name": "Peloton Apartments",
                "Post Orders": [
                    {
                        "id": "attkKlGFzjeHl3CFm",
                        "width": 3024,
                        "height": 4032,
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/Uz6STcGssHwEF6rJ2BEztQ/HG4yWxYULhKpo4vrjUVdPVFFKOi2jCzePqqnXY3dGExguc4W9SExA11uPa3QOyL9GkYOCy2PJ6uzfMc2-PsrxPHRBeyYJsJjJm5xaCswNebSgd0Nzae7fJxw1GqMrdWkcKEaLL5MQA9Bw5-9KwZe7HYhKPB0LBQahFVah90Sqhs/QY2WOeuXnPJYJDKKYjzYWdR4OoLxq1wJHpkFs3M1wfw",
                        "filename": "2025-04-01 13.27.45.jpg",
                        "size": 6485893,
                        "type": "image/jpeg",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/FCln7_1WmfXgxneeXFMxdQ/5Q5d0vVVk1OW4DHGIw5lgA2KBlo2-7Y3Po67iu4rNcuM9VnGRa1fNHk7IcIarM2me8MHWqDynPWbIGOfKdhBrVjNWqPpC7J9JfeaCud3duH0lEqLLdzTbgxHzSE0SEiJoq1psQ4LxeUNAsg8kbsyZg/2xGyuRK4xySt17hNkbdDF3kVyEVBZ0E5gSt59T9fyFA",
                                "width": 27,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/xs54U7tIeMi-Grk8pFOeyQ/K5fd6vArObjeLtsnVWwLWiSjZ_-1Ssj1NFwlJox3WYzwDtFvSwsy2z_2FcLKpSdm0ltXaHWBxS9xsw5IMFqdVHz6YTMyHWpo3aNN4wrpBDkBncfy3zCV30s3RX1CrAgsYlfa_juvMPMn9I1NGYk56g/VfG3EO__VT77_04qqLvjvxNlNiZKV2PrmNTJek2HCyk",
                                "width": 512,
                                "height": 683
                            },
                            "full": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/yXPi_bLIQbAEbRRsfbqlvg/lDbFUYba3BBYaHdKZ3JkAPqJ4DuTGJ5dQcHd7EeJ-rfslEwTDeVFUFa0LljsQkuWdM58LYOXR5lt2LTkqKIJUN2Pcm01WN_gAfQKwjZhMJXUruv3OAQHk5Xtzx5L_RBKkk4rdDXYKE_KNRe3a32EjQ/HZJlwRe-r3Vyo2lfXbXGpekTInEumv7alAHyD1tAhPY",
                                "width": 2250,
                                "height": 3000
                            }
                        }
                    },
                    {
                        "id": "attlIXYmJDXmDr5ND",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/zyGHuMTEOmBlI2Hk567dgg/0ZgLGB3b2ErE0xAkxf53qePIo0Dx0fR5zRabwV4gYHMNjiN3efgBmxbY3aRA5X89LrqbblbqHZdGIz6fIhUE3mQJitKGFR-5sw7sAyUCVvJSmWIOUzzruVrQS2_UPh-rn72pWnhqe0GMWBAKZf_GY5hygyv-bmgfPZ1uRRAtu1qIub-bIY81lY1zFHVKQY4y/PQ5JAkaBzbhHf43VOhdCI2N1lBqL0FzfDobQtARKPqI",
                        "filename": "178 Peloton Apartments.pages.pdf",
                        "size": 43141,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/tij0GymCQ-dtYgGj1TT6Ag/6a3lE6R76r4b27--cWlDXTzUhAtlET-snClGkX6mgdGfXqWloVBy2ZjUya0ucxrp9k5Dyz2zuRAhsmMRHuCaqxrZzcCBOPWuHsCUGqtDYor4s99TQ-e8InhYt0Vx-Pe9LwwUkypopwgP2XfcsXi07w/JFQytInu5NobULYdyi70K5Q2u6VkbN81oxw3wYFOG_I",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/8Roxh22Cgd03_F9AM6fnqQ/peqoiYZL7LVf0kb5Z6srFDaK0al0x8Gq34YvJOMkZ0i0xCR2uI_02L2QPvvUojOODL6rDGYqwkM4_wnmLZ7PaFXLkMoJIaMxo3rX9UXuZb4xtAiUKMwwZi6FuHJ49xDxyGnvg07SF7D0rCtSxrRAIA/EVF7qaxGHAw92AbVQJvOf5kIULQXxFuDPv_QS1EIPZk",
                                "width": 512,
                                "height": 663
                            }
                        }
                    }
                ],
                "Site Address": "7435 159th Pl NE, Redmond, WA 98052 ",
                "Google Maps": "https://g.co/kgs/nQvayWt",
                "Active": true,
                "Assigned Job Role": [
                    "recHWTzg8sKgV28Yr"
                ],
                "Manual sort": "b0J"
            }
        },
        {
            "id": "recRLIZwgYvlahdCF",
            "createdTime": "2019-10-01T19:05:14.000Z",
            "fields": {
                "Name": "167 - Evergreen Heights",
                "Route": [
                    "NE Route"
                ],
                "PMC": "Essex",
                "Status": [
                    "Seasonal"
                ],
                "AOG Property Code": "167",
                "Calls": [
                    "recUaz1dwteTzNZyZ",
                    "rec2tu0bKKKqrhmEt",
                    "recjAyVQM9HQQUvtU",
                    "rec84jT8D85HjKgio",
                    "recqKbbjjxgE35GQE",
                    "rec9kU1eTPr7nYTta"
                ],
                "Tagging Vehicles": [
                    "recoGuoekh9DvMhXJ",
                    "recfOfEC3yjsi3NgO",
                    "rec38HL3u6KaGrkDu",
                    "rec5PeksaNuJ1LXP1",
                    "rectEkeDwzAGjC1hd",
                    "recRLbaPDUMccv7Nw",
                    "rec1dDsaZFWNJhaAB",
                    "recw1Qet7PmzjTxe0",
                    "recQ3jnRfNf8E0u3s",
                    "recA3aCzswBPPiu2K"
                ],
                "Site Name": "Evergreen Heights",
                "Calls copy": [
                    "recxBbg1ytR8KYlG5"
                ],
                "Property Updates": [
                    "rec2KFN9UwkwrnqGb"
                ],
                "COVID Closures": "\"6 - Wandering Creek, 25 - Fairwood Pond, 153 - Castle Creek, 154 - Emerald Ridge, 155 - Sammamish View, 156 - Cedar Terrace, 157 - Bridle Trails, 158 - Park Hill Apts, 159 - Woodland Commons, 161 - Palisades Apts, 167 - Evergreen Heights, 170 - Delano/Bon Terra Apts, 171 - Elevation Apartment Homes, 174 - Redmond Hill, 175 - Vesta, 191 - Inglenook Court, 192 - Ascent, 196 - Salmon Run at Perry Creek, 159 - Foothill Commons, 194 - Pinnacle Sonata, 197 - Stonehedge Village, 195 - Canyon Pointe, 168 - Highlands at Wynhaven\"",
                "Post Orders": [
                    {
                        "id": "attkIRVCZVi71J21b",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/tVADxukmSA6ZIDtCmj5DAA/vJdNSl5DU5BWuow_SG2WZFIocLrqm5GcK28OiqW-ktR9BlYcMrWIcTKV-M3xldw5Ru5lB8BlYft2xnnngM7vHFoEtLpuPoSFBWi-yA2ghu8Q4IA6Ixkkj3gTa8xnw8AEwioHf-_XIeu666omEWAaN3zHXQHNNzzWFD0Q8UUf4Zc/ns6Bt2YXIiMobZMVp3o31p9T6X9kto3DxLt-3gGIDb8",
                        "filename": "167 Map.pdf",
                        "size": 19936081,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/hq78XAklFDrfECg8kzg7JA/b5hX2uBXPKXNjAdcvWe9rAOCuKKq5A3MwRKuA14LxAV92NB2C5CE-Gs2aOqMQOYtz0jywF0M79DN1vBa3bzbpL__chLq-mRVShzGpi173Jq24ZKpYmD89kezOsycnISQGUemeFSx7idYXYkpIc70AQ/DyTG1TDJddmMCZPVN8VK4i2UCrSXaDRKxwGM8Jm-1Bs",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/Ywbk2TOCcAf9BlH5zFsuzg/XnsWoq6bk50qGiw96S_rElPEFifot0L5kWSkf7Ap9jMmNZvIAHnUZWABZpKUQqCTdKWRqLWRFrFV7hrbbzxx1eZgEzpj1x0EJqr4vK46gkK3ThiV0PQorzfK7AxNu-b3G4iQWfKoau-6X17JgtbecA/Rg0daqvUHu8cvRCKPVLjdyKAkpIWiOT7hhfZOQM8scc",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "att7j0I48t7WaiqS5",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/HuQv11lrGZOyfwWrf4jYuw/tqqxwFpncskiyc1C4nm3KaDumHlgBnCQ2B8O4fnZ1g8dto5LuyQEqslIrk481GN5w-woqoyvEhkbcSQDZGyZGR5i1II8XNnphZ6TeowKAL7M9rpNb-DAhuvHfsJF7gJVSStjSE825ROlSXHMay0gn72MbLvgIdy-qNfvzikoMwE/KZH3OgXKTBT3XIEsolEd9ZhfcK6tlqDXqzHqjzBk6ww",
                        "filename": "167 Evergreen Heights.pdf",
                        "size": 298289,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/LxsXfhHrtzyNEFskx-iciA/TGQooefX8pFk_WcVfpOWhB2lBpQksFbX3CCchwalcVPChadP4bAFuc9SgGBEAsVUMgHgi7U4sUVNvWdvdgsFy9OQKkFEqjp8jYYjtm3yBiPrz5eS1zlHQY5ewRJ_zvPAk09MXkyDgX8dHQNE3GOUsw/ZUYcfKHGr39utjNO56CSgO2uyoeWK4jduaggxlDEjn8",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/dnBNtAxjY-YzJdXLTdIgPw/aEUvaXfwg8QMPCs9RUu4xyx5W_umPiPtS_vYH2zDpx0XcPz03iJ-P4x-CvBJQ7q39C6fLZZdFNq2uAMwPpbKJ0jErbYh8dHcwtvDn5_kjjybvQ0H8QdICk9wZO8Q5zjJJZJInoqtjOSDsT1j-BAGsA/jPo4w_Ma2EypKZrtl_An03GqXLDY4BGUoaPlkftcdpc",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "attOSgH1W18QLUqR7",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/-HVElAi5Ul_Y_oOB3SYf_A/sXTir3EAmOfLno3BLXdJjcAMkLXfA7zrgisa_q_l0Rg8WvIMKkYdvJgjSz5JhpKz_EyiCmCkCPazUK7tv3JYHwcjKC9N8pXWe2FQZ8ufYJMuzPsrdZKjztK22mdr9maNwH2MQXKLetAHs5ShPePUNeqFSLlCDg7qlzEhqlGCbib-SCqwOJoD_8jQQJUOYrM6141JwjMmI7Qqjh8LbEBwEg/O2tu1G1OkyarE8emOONIYZBCDZ0Id04MmYBDeEqDBNI",
                        "filename": "167 - Evergreen Heights Lock Up Guide - 06-10-2025.pdf",
                        "size": 1022625,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/lcxjsWwZuRm-yefTPKlQpQ/t1jS1ExzAZ7dsQkIWjbRMPfnyZjx2oFpZEKcyhP-qdU-e1idoM7tGB56RcHyR9_TkE7oGZdrqwJ_V1OoMRBzBmtrOSO1x14_EPe4OXDtpPQCbE_pqbEAIbXFDcOjohHYzxkbSS3CA1RgenCzHjppCg/dYVQiGayZMm5-Zd1axLshfkA8p0dZMGXgn9K0GYGSTc",
                                "width": 25,
                                "height": 35
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/SWdXekVYP9V0sda4boUp8A/2agX73kx1URKOPL7OmzrInMo1jwj8PJo1vtPEL7aVHxuNocWJUG232bU2asHT1Ms4CTU-QkIclh8kw0j2JNYXHS-x4n0QX-iWKXNzpR8cNazd3BnZS3WD3a77GP_efyD25dn45T61EF4-mYwxWaPaw/F5ikRk4Ar4Wlie5SCnUpDNPTPOTr01CvBrkzwlz9Ftg",
                                "width": 512,
                                "height": 725
                            }
                        }
                    }
                ],
                "Site Address": "12233 NE 131st Way, Kirkland, WA 98034",
                "Google Maps": "https://maps.app.goo.gl/HhxeCHQYSp518JR58",
                "Active": true,
                "Assigned Job Role": [
                    "rectLGnMglyXQB2uM",
                    "recBaIARu4NAm3VHr",
                    "recxppHQlQvDXX5y0",
                    "recGy3l7i0CE1MI33"
                ],
                "Manual sort": "aU"
            }
        },
        {
            "id": "recRpKwJFVY3Xrh28",
            "createdTime": "2019-10-01T19:05:14.000Z",
            "fields": {
                "Name": "197 - Stonehedge Village",
                "Route": [
                    "NE Route"
                ],
                "PMC": "Essex",
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "197",
                "Calls": [
                    "rec23VsVW9ONgFVtn",
                    "recVkR3AaWePbtLC1",
                    "rec3mZCkb1Qn3ag5Q",
                    "recfhqYuz3LLdDUaE",
                    "rec7bYtzQ9sOzTO5e"
                ],
                "Tagging Vehicles": [
                    "rec6NHqxbkdfdyMq7"
                ],
                "Site Name": "Stonehedge Village",
                "Calls copy": [
                    "reccWK1e9Wkdekcot",
                    "rec8bF0pIag1CkcHT",
                    "reckx1Wp2j1OF4JBN"
                ],
                "Property Updates": [
                    "rec2KFN9UwkwrnqGb",
                    "recPmE2ZkU4lAOif8"
                ],
                "COVID Closures": "\"6 - Wandering Creek, 25 - Fairwood Pond, 153 - Castle Creek, 154 - Emerald Ridge, 155 - Sammamish View, 156 - Cedar Terrace, 157 - Bridle Trails, 158 - Park Hill Apts, 159 - Woodland Commons, 161 - Palisades Apts, 167 - Evergreen Heights, 170 - Delano/Bon Terra Apts, 171 - Elevation Apartment Homes, 174 - Redmond Hill, 175 - Vesta, 191 - Inglenook Court, 192 - Ascent, 196 - Salmon Run at Perry Creek, 159 - Foothill Commons, 194 - Pinnacle Sonata, 197 - Stonehedge Village, 195 - Canyon Pointe, 168 - Highlands at Wynhaven\"",
                "Post Orders": [
                    {
                        "id": "attj2MFmCXHKgrmwj",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/dNShnW3GAovXB9MBanb_3w/1RLI3c_--oBjaLIQx53Hh0Jlms9YutGQ99UDO87_cfni2Jmll-60VMH0q1ziBpSxogPAWi6FKbgrZJMTzHP0_1-eXPsVxZc0BLZkbcN16X4IkR-UQklrBe6ZMZsYRoaRK_QV1kP8SFHnEtvdSvsK99NPxxT5qeMwyd8qc-ArNts/ZX5e_bcEm17vUUmX3deWM-XrawWjfJWpRXcPm-R1S-0",
                        "filename": "197 Map.pdf",
                        "size": 10291719,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/BMWSyktQXYG9PZ7MOPiE6Q/887sdDthORD6OawwbPA8qbruCij6cU3ooDn_WNOtS6fBPlGTY2U_ObWmj1sq63eSYIINmYqzG2ti-t_t-XNEWjozZMW-r0W0n95nniEL5awHWx1WhML5_6T-9CNWvaD9glHeaB6brHyWPM5Gbcs7hA/4yHf5EjpJ0uq0zAfubvS3mhXoUq4SDBAOQO4c0slpB4",
                                "width": 47,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/gUNQKQI-Lls1kF68kxPimw/WRjMwwhv3SKTYWgp7hTXz6x_WA_7TO4VdJMZrr5zjzmNhK6trWEPjNrfq2AXEcz_NXj_OoWjmBrTa-JNnk_EoxvzRRtkTSy5GUhv_vagX-JBtzBBJmYod-GobhIhhLuxRY4Xiai1-9DUJmJtDMKjLw/u3cKmQCb2lmpKt1RfWELHZ97JY-f_qIoPg4CEp-MDSM",
                                "width": 663,
                                "height": 512
                            }
                        }
                    },
                    {
                        "id": "attaIwAzzeR66e6qZ",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/WJGmsW7_BDu6S_kCC3nIHg/GJubuThueHJvOl6lKBR44X6-ycU5JUf8EU1dpN0w4pj8bEPT0nx4AkPiGVOwke63ZSgomZLS0NWI7uAF-eulTFWdTpc6D8iOlUJIGqnzbIAA5PUfZdc8BeOtU-Sf3J6Pc5wtI6fgDUBmsCDUsB6t3LhnaiWOrviAmNLh38QKCDhh_bLlVq-BC2QfUYwAToZsA9gs_32EPRXqYmy9evLL3g/ALGC5nT6LqJyiK2d04L-HPqTRy0XRnwncyLoynTp1jA",
                        "filename": "197 - Stonehedge Village Lock Up Guide - 06-13-2025.pdf",
                        "size": 1113766,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/9Ngy6BaX9tHmk5lL1GUU8A/oC73uwToTdbnLUvOjACp7JWCymHfkWt1E6mHepGGshYh7EHI2muWL8usI7f32wXRECsZdYzVHno--S9ifQ6SpuKJrwttWtDyX0KafzsDvlJgFSc3-QBsOtpdjEs60g5g2Au2si-91HUO7PuVU0fe6g/NIwlMCPkmgi3wF6MZqPO3fJ3KxyXZrH7a929la8jrhc",
                                "width": 25,
                                "height": 35
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/aAjzEuxUDiVoD32pew-b_w/Nu0G7pLPtxgyxsmcAasJ5b3xfPzQ-6gmPpIGsnv4yN-fpfUeF4pKHT_pEbQUuUbG-hXNQsGeYb2oadG-tu3TyNBdTMFokZIxuluW0mWjn529-a5eJXOuxhspLrGpcDd4ESC7yUfZN0-3GMTxlBW9NA/NVXw6SieqxWxSSN0Kh8itpBM5oSbcz_9rCPbB3J6lQQ",
                                "width": 512,
                                "height": 725
                            }
                        }
                    },
                    {
                        "id": "attXCPZOiHnbTd41U",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/_XDMFB1RlKlpc410Q00ahA/xeuDqBc7wIqIIeuVZuLD7d0fM4PZe9-xmCSHhBHWNjo3l92jOdleKR953EuBRZtFxhwQygm3wSitLO6hGb8E-8wCPQcereQyo5WUwqMrOofXQ2NeiYXa8nzy5BQbD8-Q8MF6_6I_y7jIle8zmasY06gIUhQ-f2tWgmVfYTNpd0acVBBjw-xQL_ivGOTNteiD/vwz932MqC94MLBXjQmXv9py7ibA2mGYzEjEPzW8Wt-w",
                        "filename": "197 Stonehedge Village.pages.pdf",
                        "size": 46590,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/sk17c3jul_75tws9DgMIPQ/bobhXG4EzS2asPL7c9S758mqd2awD0Jdrllfaop54T0G_LwBJ8OPExQg6lsKc7SmulJqKJ2iTgL3euYjWfC68UQjiBk35DlmKscBpPkiZJTzjE9IZQRLoDGK0sb1LYFPp24EyBUmq3ar9VKnvx3CgQ/tzPzjMvD5r5DWpCLQG3TdxuqQ1TEqlgRDWv1RVdGNlw",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/l-CTd0B5-ZzvnkS1wNZ4Mw/z3gQlCEw7hEHg74rCYWMwykILKf2OH7MMJiZ-eruYhbTKm5tgRn_57jHoDaQBe_WqctoMqIvx8N2QyFY93HIMV3dHktFH1UXbOV5AYT7uWFPhbMx63BmAJgzd058breUmlROIGeyXYzEBp-GQLNSNQ/G0bxdaV6-Nbam5EXPq0bqdqp4VX8POdG6Q54GiR_W80",
                                "width": 512,
                                "height": 663
                            }
                        }
                    }
                ],
                "Site Address": "14610 93rd Blvd NE, Bothell, WA 98011",
                "Google Maps": "https://maps.app.goo.gl/xXgsLgNCob3xjqVP8",
                "Active": true,
                "Assigned Job Role": [
                    "rectLGnMglyXQB2uM",
                    "rec5Z1M80KnYNUmmk"
                ],
                "Manual sort": "aw"
            }
        },
        {
            "id": "recSKA44KjS19jYOc",
            "createdTime": "2020-10-10T23:06:37.000Z",
            "fields": {
                "Name": "999 - Unknown",
                "PMC": "NONE",
                "AOG Property Code": "999",
                "Site Name": "Unknown",
                "Property Updates": [
                    "rectq9zQfWZ4mB5fk"
                ],
                "Manual sort": "b0F"
            }
        },
        {
            "id": "recSolq1WcVSufHLm",
            "createdTime": "2025-02-17T21:17:17.000Z",
            "fields": {
                "Name": "204 - Campbell Run Apartments",
                "Route": [
                    "NE Route"
                ],
                "PMC": "AMC",
                "AOG Property Code": "204",
                "Calls": [
                    "recmpOGTdf8KQFLjN",
                    "recp0NQslWQjeJPOn",
                    "recqS9wRAEBnKBeRS",
                    "rec4f3m4aOVJWwmyk",
                    "recH5tb67JEehZMrF",
                    "recICR1DHEThV86fL",
                    "recCJUgHvgmyEQkBU",
                    "rec8hR5EZNbKKFeCG",
                    "recDVscRiN4VZN7pg",
                    "recd9mbWbB3FOZmMk",
                    "recCz08sFENcxIyqQ",
                    "rec4HHoOaivyKrK4V",
                    "recC6jptHe7PsxAcL",
                    "recMMbjQnlzUOgqau",
                    "reccj8GakAKWK418u",
                    "rec32ex6MW1bOV62g",
                    "recRO8pqSSDoGHRao",
                    "recfzWpZFF87ona3O",
                    "recapjPFuiCibggIp",
                    "rec2AGoNAq6hlWEv6"
                ],
                "Tagging Vehicles": [
                    "recIfcBvPCrG6Zitn",
                    "recZYwCVgmzblRjs2",
                    "rec3RqwNxgGGoyqvr",
                    "recCLhipfQkLxiks9",
                    "recatQZeaowHtxiXY",
                    "recQckBd6YwyadDbw",
                    "reclkdeilFwn073YK",
                    "rec93WDdwUahy2bnU",
                    "recr3VQCJ05VfdBIN",
                    "reci3TJUpPDTLE2js",
                    "rec8EnDWLuFUPTuMu",
                    "rec14oFYYIRhU0TDU",
                    "recGfHQg10I8megZ2",
                    "rec2VKg2dcfVVj3Cf"
                ],
                "Site Name": "Campbell Run Apartments",
                "Calls copy": [
                    "recxokDzethjWtSvh",
                    "recmj4ZPvgq9DEZmN",
                    "rec2uqZ3UgAYNhaFI",
                    "reccz1L1wpduqfaNV",
                    "rece0JlddUYQhjQbb",
                    "recGHfkFJtl20TI9m",
                    "recjMx7wUlGYIy09k",
                    "recLzTdwB94nCuTqp",
                    "recApJqblAbFeulKb",
                    "recJ963tBNWlBa53p",
                    "recymRXkSK4AiXmwo",
                    "recaHSFcJT6bDoLsF",
                    "recRu4b8oWMdyxnTB",
                    "recAcFXO48zvoVwII",
                    "recbdLJML98DAWvgu",
                    "recoafn88n72u7T02",
                    "recJRcdKuzJjzeEwf",
                    "recG1mJ9r06ZLsXUv",
                    "recxRBrNUBTEypeUr",
                    "recYfTqVDAyvxdwSR",
                    "rec69cJIFWrXP2veP",
                    "rec5ogs3dI2NUoukI",
                    "recJ7IhBKGFFAgNcT",
                    "rec8nrCGKhBdIm6Uc",
                    "recFCd823d3vW03Fg",
                    "recEnSV1JLBXjehn8",
                    "recu4K8ckUQVzht0b",
                    "rec3Bsz0ec2EULGvN"
                ],
                "Property Updates": [
                    "recnK43NISLnkaAyn"
                ],
                "Post Orders": [
                    {
                        "id": "attogKM7juY52PMk6",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/brkEK80FJBsoHkRD4x1ORA/BzbrFqKWySL7C7RRQI28gDw91QCk0gGl65pPSQT3vbk3lwNI77MWEbUdh_1OPWZFRzU6_wM-N15CYuafctWZFqlQEUHSOT2G68FJrdBKSJMjly1iGH6eENNJ5hPpD5YWYyiDz7Mdl0UsyB2iJ1UQAnTlkKctGBJ4rXH7myaGGjI/RHQ-1A2dlf-j0dhwMyjnce1nfh1XoQZobCc09zE2PRo",
                        "filename": "204 Overhead Map.pdf",
                        "size": 5739008,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/up7hG0bpfwlAhW07oXA--Q/TnooZjMnSAeFQhRTl2ye053OA49KoByMblPIRjaH7mxKT0kgM5n0qi0arve50VTHYZT_uC-ThfBI4BvpCEMGX5mBmW3JiIPNQ6v-uDRod3eyhyW76Uuj--OWIQuZGzb0L63eoyfIlHEarlzChZkFpQ/-IgPF-vOvwbDVtQm48K3_6KR_2JSe30kXsJTh85KAWQ",
                                "width": 46,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/Y5UgoVO--wMNxyjcHRAH8w/abJqevnR8LAek8EKOSibmyJXQJeE1nRkvAsMYxxDpl9oBXuAcUirk8H0m0gqPPbrM-T_sCrWTOcxO8U3Zwi0UAPsnt00WLTzIngqSyXn3zLn7k4rJJ-qIPLc_q_SVywe1w0Ke3yoc3ct04IJtClpFQ/iHG9E5GOMsu8t58GZ_W8RaJq1D6Gcgq80PuWMwMWRV0",
                                "width": 653,
                                "height": 512
                            }
                        }
                    },
                    {
                        "id": "atte7dnPYynEmoQoq",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/mmnSeDzUX9iOs5t6S-7BIw/yCZ_HmRrC0pzk2Fstk5g1Y35-LzyEHY2w7GJRWx1FPAom4mnbz3gHL-SesBGBXNh-DwSLp2XrDY46WMJs5t5jY2mIbMgV_aqu83k_eLJkFoYSPaTtQVGnmm8CZZRiCa6R1PG_S_0bmwq9wInqU1wf1VeZAd0lVWeTNJODq-psLE/EMxkwn9mIaJCmfYqSa9dhkTuXLVHcNzCbhbABhORP58",
                        "filename": "204-SitePlanMARKEDUP.pdf",
                        "size": 2294534,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/szDO9zy60zW7aSBa5NIy9A/VA8dzbQwhgE_xcMWkS-N5lsU3Ou_K3Wie_-zDMffh2zl3Q_PJNL9-4PWN-erniy2ogvwrzarDYAIt4zeBgmQJ_9RvxJjU3tXBu-VpsSX9bQ3NrxmqJwJPDOADzrswYbHWmINkvGeWhpLcF0r05dHNA/KzId8YtZrvp6RMSqucki_iUIa19LNhrowIxA3vuNCRg",
                                "width": 48,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/LU3zRCLwB7ro9WpbnopZiQ/4KZmqM1uMbFNTwZztTxVeMIrlsFk5HKpeX5s_YLPNz_4qwfW5ImPDT5EMDmstjHolQ3GmuIb0zs3oUuHFbbPNP0ZbHCh_nUSNFjiDiVGIIzGaCuh1M1CEFdIPXlv0RlJoihugnCCzhS52zA3yF9-Jw/3taQ43XvPcyv_UCwt6zmX__6DOCU6NW0dfWvdajPp2Y",
                                "width": 683,
                                "height": 512
                            }
                        }
                    },
                    {
                        "id": "attjqYsbMMx7SUptl",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/bz9eor2H34eBLZnO2rAXIQ/-7O_3V6BM15tYY7DXFx67Q37Pm4eacgkqiYnkeAL4Ora-DD_7NU7EcTaQUKBKCNf6tYlRF7P6sQ6MikUcOC_EXyqH5BTV5bl3c4iS8Rw4_aCQPz7cGarQRaorJqaXe9Kbg-YoLctG3OJ-h86wDypBy-M43Tkl56BXrFMwEgsmTZqyv4i-lXRLdAF9af6kt5B/0eVFi8ZsssDkqL_IqUJhf-r6MJYCMYLjkKI9ZVmBxlY",
                        "filename": "204 Campbell Run Apartments.pdf",
                        "size": 55222,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/QcyOm05HF72zhmQPwMRWrQ/ZVSEUzLCt4JskCQkPsK0d1uv7dPhGxLEf4zFirSqs6WhVjMmnj_tMws4bzrTU-nr3JLW29dtnU0MCxJTz9T7LlQwI4BFyROUF-KkrmPz7_imhSnVowAy7Zww02I5l0UebvdZWqDxJkHkoDw-2UfhcA/j6mrgkaXn_GyCw0SGnrjBjOLbHw7h8uokeqPOEA16bU",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/DSYgn_k-bkgyl-Qa7gOmLQ/LWAWAFsoEkxZ56gN3sdDr96FAPyBJa1lSFUX78Svmn7VpHzmd6SfO1ZZ3D0plgwRZm83Os336lYrGplpQioxaxJbhD3eO4SfIl4Jp8a8_oGD85cxZfI20LMqUPObx_GXMgJ8MmT3Igh8lh6Hf0byYg/MYi7svYmrDBJkOPWPXWYwGifY8D5Iz7UzswN29CIdco",
                                "width": 512,
                                "height": 663
                            }
                        }
                    }
                ],
                "Site Address": "13305 NE 171st St, Woodinville, WA 98072",
                "Google Maps": "https://maps.app.goo.gl/n74n1haLnqsYS95u8",
                "Active": true,
                "Assigned Job Role": [
                    "rectLGnMglyXQB2uM",
                    "rec1UASONUxcvY0m9"
                ],
                "Manual sort": "b02"
            }
        },
        {
            "id": "recTtPMgH0opGnBpT",
            "createdTime": "2019-10-01T19:04:58.000Z",
            "fields": {
                "Name": "25 - Fairwood Pond",
                "Route": [
                    "South Route"
                ],
                "PMC": "Essex",
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "25",
                "Calls": [
                    "receBjWHGGymJyy3q",
                    "reclT0nU1SjM7a4pH"
                ],
                "Tagging Vehicles": [
                    "recoMEZvqOxWoElvq",
                    "recMGhSmIXD0mFoVd",
                    "recZ5g4dSg0cOahFQ",
                    "rec7Sybgl3UdDJgqM",
                    "reciIOrvGSosaJFFh",
                    "recDNadLJCkMwAjub",
                    "recehbm6GRS6EomAt",
                    "reczEvccLsBAaaJMA"
                ],
                "Site Name": "Fairwood Pond",
                "Calls copy": [
                    "recDxHmbSTG0KvUM5"
                ],
                "Property Updates": [
                    "recAwgWqntCLom4X6",
                    "recYV2V7YHmoONcKe",
                    "recw1pLNxJHnePWzB",
                    "recq73tSWpIsSCFDE"
                ],
                "COVID Closures": "\"6 - Wandering Creek, 25 - Fairwood Pond, 153 - Castle Creek, 154 - Emerald Ridge, 155 - Sammamish View, 156 - Cedar Terrace, 157 - Bridle Trails, 158 - Park Hill Apts, 159 - Woodland Commons, 161 - Palisades Apts, 167 - Evergreen Heights, 170 - Delano/Bon Terra Apts, 171 - Elevation Apartment Homes, 174 - Redmond Hill, 175 - Vesta, 191 - Inglenook Court, 192 - Ascent, 196 - Salmon Run at Perry Creek, 159 - Foothill Commons, 194 - Pinnacle Sonata, 197 - Stonehedge Village, 195 - Canyon Pointe, 168 - Highlands at Wynhaven\"",
                "Post Orders": [
                    {
                        "id": "att8A1FUqTBgii1GW",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/GN_PFhVikv2RbRph5Kg2aA/hlVdB1UbRztou0wSsiyqfGhWWxmco3kX6EUpsxTKtKgrJp5-GURGXQgFwcK611KiLRqFFDPf2WRA9MQ37110-q4qp80OGx3g3AcUJwIYgURD4sSEiTR9mZTdBVDX_GEl-ygkWg8eW9eQetdUxdlgg_enMbQJyc_QuGywFKRCEbQrmiB4LYsLRcTg_sw_rXGs/iQMJFhMWfhRXFYaZJGoGmJxYFk86KrromWlV4Y7JIGs",
                        "filename": "ESS_FairwoodPond_Premium.pdf",
                        "size": 8599983,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/KvxLWQ3WSnQ0ilS0FXasPQ/XRQH2rHhMcgDJzaDwVYFrwiXLtmJuaR_NL3WOunM_9S9veqdr1tBXUGW5pB-SKX_HN_sB1-jhHmUCQtmQAzBVdMzIzJ_b3vGYxs4oXT2PiG2iqjnscrE_w-oDHx_7hPpH4gV6n83J8shz1lJM-_5Hg/P9a4CR0pblt3cXLZnTs1_O-p7RVY7ieB8OWuAahL1Z4",
                                "width": 47,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/M6_mUrJPipIJZ-qv98GmIg/hkzgAOcHuNcOaYUOGvWgyvqsBVWnMgcb-6wquvWg92PghNcTUDAUf3skAHSplXBHiiXGuB6Tz5_0AJf3XifX0upvp5AqR3o-TALVczSaTJiua5XnGDN_J5X-NoCJENsbHHW-1HydW9R8oLc8Jylo9g/-CibId-rpGolCdrCAZPTh2p3X5gW9SPcav-ygSMQgEg",
                                "width": 663,
                                "height": 512
                            }
                        }
                    },
                    {
                        "id": "attWTdjmBWf4JwVhi",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/XV9dIafw0N89T3dqsnvw8Q/fxHTBAkxxI2oOCPEzM_sccuN2qcvUe5ky-WFG_YWQHXmT65h44jY_gjDq2xaFSNSxMUeSqsiGMGFuAzld9VZz_xnIGF99mnNu377IzohK9elP6IgZwtPT282tR7XSWqxGajzB7A5K7m1iUa03ZbYuqg-SWWFE233UGPgQIZ_UecY6Q1bP1Gn9d8emL2sV5MV/KdolqkM6K0zmxUFtOdmuTj2rW2W-ZimH5PoDFC_QGME",
                        "filename": "Map with pool Location05-27-2021.pdf",
                        "size": 90084,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/nQvI_T3N2wYpGRtfrVdPXQ/eZwQOml4xUfmaHLI534d7XFP2h2l9ytoU6JyLkmuKoHSPvXFMDCGETKUKUNzF79SbYgBaoYTtig1qB5udfeGrf-BAxfNLgREtHgZ52saaFt4gNsIAetlOEtR4ltlVczFPX93SRRpx0_b5ppYDi5EPg/L5hqcF00XIm5NkibB6qc69xb6QsZEhiKQI_LHt5kev4",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/QlWQHa6SqQXXP2rf999G4g/2YDk115U0pWTAWle8vx0EOMWttpU6rOESoA5AQm4_07vCINmcnXhfiN34kPKaBN6boSMC4DOfjA3oS3uO0CRI5W3B75i5OCxmzTVC1lyPtSBol_EGPoG8qL0kzsp0fKZvEniD7p2-Rkz3dEWCuM_Ww/GqfI_ET2XTXfOBEfpnqJyTCuqQcv4lprjbLn0iWNZ6I",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "attNYHt1pgQJHmzOa",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/yWCWqfSohIpuj0MoJOFRcQ/ab7Ga7eaUDmdaPkqtiunSeCVom1OkaE3qvTTww_lK784-sJaD1_h0R7RldFx5EIYACmOexELupmZ--mc5_5ATUlMgY-MY3CtR-Mu6excw0Vf13PaO74R5vq1VH2yoE-0UNfXMruPMb1AMdf5Deb5pgukTBfqbDn_NIFnYT26RhQ/gkN3c6ru_eLzIlyADrW-9Xe8QRt18456WtpV_v11T8Q",
                        "filename": "25 Fairwood Pond.pdf",
                        "size": 68685,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/bXfHJbLt_RZV5xPLeMnI1A/q5A5rJzs6So8O0JFBAMWdeHeBHUvx_fXFaDZVyCjc1RFeG1e6j-ID1zelW1Vhh2RseUJ8LbHbOeS5a31X_CI_p2vgEzI9JquZ84hsJhr3HOsfRQ9AvnTBumVA7gIvKXhx6aPkNGKzZQovrWfrz8rqQ/1xLwG59zbSOlTd6xiP5NCptVYkebbVM-fAGAnaX65jI",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/aTCQBwzEFO6lqwXexBzG7Q/JWtsHRHpzp1S5wgWigADEXY5tBe7XuUj2uNRkYWYn7dmliid8-snXhHmrmwz74mSgQHFd6rMZ3-fhjYgLz2QrPXzrYldC7xKf4dnpFt38dxLocRnKmol-G5yAUukqTyvz3tqVFonpk81HRU_Q1aggA/lZ1N1si7KkdcVqAdOiNMUcUnITv-4qdEk7Y5F_-FXxk",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "attkms3XzzhenKNUW",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/TEGqH9jFt7WtrNgNOTcDhA/Nne56ZfxmHM1AhEQ1z93mMNUCAfYM34etsKxKqrEu-slEMqgBBdQK7hs7KR2W5Jt0qOTWl_mK61xPS4o0L5dJCE1qrfGYkesOv6dvP3QKrirYe7tKmBIrurOs4xpLGDtgK62EczjiLFDGVP1wZxal1VJzscEpsug0QNNY7cMLFc/_JXogoMFkKmZM1ltPFA1Zhmu3rO7fQ5XAkDNFZ56uFg",
                        "filename": "2025-05-15 22.20.04.pdf",
                        "size": 842826,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/fAAqpPyAI9kh3d8m9iUypw/6ArfzGMz8sflw7iXKLTZoanue6NIY450q-hEcSfr7dWzA1jquaNVRv6PlPMo0u3InkRFyq5ehjf7XU9GUzWkDvzr_OxrWbXCtpU0l6UYLpqhELGPlPC2jx5KN7A0UAEz9GK0iq8_hbQ8uXK31i3M9g/VRKyzd8uBpvfsJvDuSYMs32MvnPfIvNOr0GCLLTm9po",
                                "width": 25,
                                "height": 35
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/O7dDsZvfUftCtkz4nqri1w/nmNkQQfM4SmPuu0wxSIZXK4m6Dk7ze4LdGpH8FpH-WS-o2gWb4WjSLAuGqb2SBhNLWbxWrOwIvL6Vz28SpKg9pnE3JKHeT1Sd9PAAMv-kVLRSl8oefddgWO1JLtK-qPTkxtDgHMor17PlrBzXAi8Hg/EyJJT8dSHWaGyBbQ-lqqdsd9qofvlSSd6wgIWyY_vP0",
                                "width": 512,
                                "height": 725
                            }
                        }
                    }
                ],
                "Site Address": "14700 SE Petrovitsky Rd, Renton, WA 98058",
                "Google Maps": "https://maps.app.goo.gl/xyQhuJ4bSodk9an4A",
                "Active": true,
                "Assigned Job Role": [
                    "rec1UASONUxcvY0m9"
                ],
                "Manual sort": "a3"
            }
        },
        {
            "id": "recTxF2zxGe2FRwDh",
            "createdTime": "2024-11-02T00:47:34.000Z",
            "fields": {
                "Name": "202 - Stonemeadow Farms",
                "Route": [
                    "NE Route"
                ],
                "PMC": "AMC",
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "202",
                "Calls": [
                    "recRBigJjlNOJw6GL",
                    "recAKVkN2HXiGtHmz",
                    "recmGwSFzRVojTdLu",
                    "recVdp0yJnJBCY1uk"
                ],
                "Tagging Vehicles": [
                    "recrjmSYueppFJMMQ",
                    "recF6ZSWTRhG7mzoN"
                ],
                "Site Name": "Stonemeadow Farms",
                "Calls copy": [
                    "recYXk7sNlVfemiJx"
                ],
                "Post Orders": [
                    {
                        "id": "att914TrZx7MfaTEZ",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/lXIK2L7qvO7qe6jCt1q7sw/lrH__VdDVTOGgni-7pTuTTLQEAKIjo_qUcyljlWXy6Cp5FJzyV9rV1FV99ay5XmjDSz8Fn5G555S0deL4VdEfN1U03H5jyIiknfPJ5mS5nJ7VgaJ6loYw8k7Ggy1nILgNAUv1Qicu5YU6j8INtEdCgGp8r7QW_sm7fmtWPDOumv20NPnQVOmCtDf1naUQkkT/13-QSCMK4blf1OmoTQLoFqC8kt6lSKLgjp21OQYzUKw",
                        "filename": "202 Stonemeadow Farms.pages.pdf",
                        "size": 67071,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/eCMjYJyjV3jhUQ4ijliEzg/FJA1iuADS98kkP-Zf0akUytvthpsggbLd03lnlTTo2mXM32GVWhp97vI9XEv6IblVgBwr2BtF8TWPRfK4vV1gt6XIq2ko0yEG1tY9TBJHhSq_a88pxuxvzIE06jTlx5ivsW2GuwmmArd4e-ZfHRHgg/FOiNZOvd4KxBNS_tCmyLV8LBaZvhu8NF_-pn1PlP8ek",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/JlBnqW17lA_qYCxX6R26hA/yhAYW6jP6ozCJB2l5ddB6dcejfLY1h4GeKJufQ1U6rvSZpNzy2lMjVDvZFXOjbYJLjl8iha2lOj2yXM2SaVi_pNYbzGDAXSbnHqcLn-jMUwcj5fZT-mtEJ1sjNHnZriaX9CHAMZiBC_T0jRqux9Nqg/qGu0iRMUm_VShy4iBgdk9RcOEl8-bmTbsgOv8u4rYtU",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "attsoj0NdpLcHztU6",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/sVbkYINaKb-ohfjCDdMppg/pxuyE495xRkyXuddsGKE_HiuTABMWozTHd_3gjehJM7QDOE-c_WD8RrQHWpQYDEI8hDbgS0yoIPQv565tTt8m-z_xaTOxFQdqK3kM6GC6xLRuo6HMjiHWhY3RZ9YjuSJLzSf85By5cJTQcZbedQ5d5Se4fVQxH5FhhqNwpMWnF-VgVPih5bbFB8tHDZ1H8SYkmauckLaLTHLGDWZ2hOVtg/LhBcVdCHuEJAr1C9epj4gIi4D57LmI6aacBCYUhyeHY",
                        "filename": "202 - Stonemeadow Farms Lock Up Guide - 06-12-2025.pdf",
                        "size": 975526,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/XysFJxmWoLHkfHtpfW0YGg/OmS0OysVEeRC_FB1Laa5KhiyTsQyrKZghOkW22eA4w1g8GoweimGBzYK0wDTV1qWlLW2nAxx1piaCZZefsYrZJdbvpAOUliGiUKbyBQ9VOfYPge2abm8FbEkV4jIcooomFtTKqkzYCV7cb6IawYLgw/XTYvf88vcWMOBqUKhpTGYTzewqzUXbbDnOwGwdt5180",
                                "width": 25,
                                "height": 35
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/xVkqb4eXmCsBzqO7v47iCg/nckFfkrfCcB82arpNjXDJr55-tUDc1xrjWG_zejpVhEWumPsy0sL32-J8QMgUDx2aCn14QQG3GTSpabG-pGBQYni22I9J4yFe_bzj3-D7rF1nNbbYpEDD-9Ol7Hm-UfMTIv-Jvhc-6xTANulto-_0A/7RfpCVQmwaV5JuhDJCCWIWOy6epxs-nRWj1TxBxzK7w",
                                "width": 512,
                                "height": 725
                            }
                        }
                    }
                ],
                "Site Address": "23028 27th Ave SE, Bothell, WA 98021",
                "Google Maps": "https://g.co/kgs/KnqpDhb",
                "Active": true,
                "Assigned Job Role": [
                    "rectLGnMglyXQB2uM",
                    "recYhi8LNCZrgidcp"
                ],
                "Manual sort": "b00"
            }
        },
        {
            "id": "recV4cP7NFSRQXw4e",
            "createdTime": "2019-10-01T19:05:14.000Z",
            "fields": {
                "Name": "196 - Salmon Run at Perry Creek",
                "Route": [
                    "NE Route"
                ],
                "PMC": "Essex",
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "196",
                "Calls": [
                    "recz94JBM2xYcglYv",
                    "recIDrvzysE2sO3EM"
                ],
                "Site Name": "Salmon Run at Perry Creek",
                "Property Updates": [
                    "recR6wXno0hxf1Vpt"
                ],
                "COVID Closures": "\"6 - Wandering Creek, 25 - Fairwood Pond, 153 - Castle Creek, 154 - Emerald Ridge, 155 - Sammamish View, 156 - Cedar Terrace, 157 - Bridle Trails, 158 - Park Hill Apts, 159 - Woodland Commons, 161 - Palisades Apts, 167 - Evergreen Heights, 170 - Delano/Bon Terra Apts, 171 - Elevation Apartment Homes, 174 - Redmond Hill, 175 - Vesta, 191 - Inglenook Court, 192 - Ascent, 196 - Salmon Run at Perry Creek, 159 - Foothill Commons, 194 - Pinnacle Sonata, 197 - Stonehedge Village, 195 - Canyon Pointe, 168 - Highlands at Wynhaven\"",
                "Post Orders": [
                    {
                        "id": "attDhX7g92UXzPVoo",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/aJoVq7drh9IQgam3ySRAMQ/RCC2TobophXTanNefCHa_zzUJ_0ZACZUL8X8TVUsE2pX-8PL1oCsCkTVbqp86GYxVZzz0hRF-jukyg5iqkVy9Tg_7kC8vId_gstT4lME7HbvSIZviGcepwCdH6EltWTMa_SDNxpKFTVBvEUWhkvaBRpAS2-3MTu7BoAwMta4k6g/XP2pi-Ph56kx5vPmoUxZNpzkLGL-0zQWEY2tblBwfrc",
                        "filename": "196 Map 2.pdf",
                        "size": 427384,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/drNt4OrDGj_b4X10guIPDg/NDyN_-Tea-Doqqn7QzX5xxx6Z_5VXnrxlqEcY2ZpCO8SbNwyE2_G-tjoDoFW9yp9I9KLbLJsoOzjKOev6SO_T1DzinNv8z02EKhPqHuMLJtxmy2k8d0RbFrYxhaV_kp6jS4qoUR5bvgC6Lp8V9kU2Q/baq1q8a5i99UIQNWZodqeWlP0td6rD-gd-1CI7Xxji8",
                                "width": 47,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/qy6d7QGKeCihAti19Dfa8w/9-SNu_pEhdeRpfM7e9wYWkp7HdRxYSKFLBbyCQifZKNLzJNfqqmTFObB8J_H7AUi2QXlOTdO1Xt6SIwVcITR5kCew0e398yQHf3NA_5nqjpIyjgTdM_MEUFLLEmEwN4EuWPVkjZmLQgtpl-_-wxIgg/fVyNM3ciSaKbX_8ZN9mCMZ6lX_MawxpsES7uCc-ASVk",
                                "width": 663,
                                "height": 512
                            }
                        }
                    },
                    {
                        "id": "attEyCbggeah8uuZC",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/nuEzVZieuOOchLQ_6E35YA/eWvRn3fuccWdEQelGqRIoHyg3mqDVzXKsZfSaC5KSJftjMSlfnqaF9TyUv2gSoCrpng7BzalTpg_yY3s3gAHXcC2rNICnoQeu6Qz0Pshzh6n4U0kzDeN81sRVG8YRH3TkcKM98r_MgPtFWf08aHlsImbR0IxfPwQQn43vcq4hFQ/hWCImtJPwd9KtQrteLMOrB8ivbVhgsr46mFNdUe81Oo",
                        "filename": "196 Map 1.pdf",
                        "size": 9027719,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/SmFBRWGiFnxR1EcUAoPUUA/Kb5b1hL8_TAyf5muIu8KOW58KBsMTxWVOv4oMoaYaPmpTR6cH46S9EhBJoBWfI9TF7Pujg5S4cFjRO2H7hTTkEPHyXR0RcmjNAMssEA5x4_Nt5JA-HG0MoXeMlf4FU28VuV5Pu7QsJfKKok2yL1bnQ/uHncMVB88MD4PqLJZReTje6UcS5B-FXaUPm11lXS9fc",
                                "width": 47,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/TS3gy20VyUHjKpxqps-mRw/mXV6Fy8POuwF3DMK4r0fRoFBkSE4KVrftpKLb-JKxscmVfiuJLCxn3nimiIFpM71VYK4ydxbFiwhl2LQP04HOyGAikZgdKvOkvz75eu485D2kix8LcYT48aZ11TQ8e8I3V9wMeSZt4P8VVGnt-namA/QQ6AzFiSQnLk7wlTIJwhx1Tj-S8aKpIOEkgpBBM4NuE",
                                "width": 663,
                                "height": 512
                            }
                        }
                    },
                    {
                        "id": "attx5dzmclNz3h6j1",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/qTFubzCNV6KxwPo4k2s9wA/-Pl6FfIxRcpGEzv-v_LtfqrLTxejEetf_xFZ1xR4hQnw3WPUqpuuZfy7-cWUgGrIs-tFJhmmYs7lqU377Mcb7gDfqAt1kTX1T-xNgT0nn35DTfO8eOL5LN-9uGt0ULP7vx6pg6rgz029Ub3bVmYLFfuEnlW42d3bRJrc5JjznMx3AVeougbttasA_6o_ezKc/D5QmhpPGrUCbtF0vu5Hr3DgNkFfW8OlL6D2gmzSn4bo",
                        "filename": "196 Salmon Run at Perry Creek.pdf",
                        "size": 67669,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/rJkmoXdg4MxLgt2dTQwkhA/-MWDbTj1arkNdAQH3uO2yaq-v5t4rzW9_m51opEMibg53uMc2u94xK2codQ16K547vY-r5eDVYtS8YiotVXco91rcBsxRdR6avVMNKRnr3waUNIy_NL2fic8lUP_KDXmrrhrL69IswBOh-Vkm3ASag/Vcx8ZvGuyZqEDoHZ9Vfq1ixT4UYl2RI5a34YOM-yYfE",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/s7OIc8PPkIW8DbKyW9xx6w/y5xdh1VVip8y46UTrMRpQzPkiQbrp_5fiGwtrvBtErdqdDu-Oc_4ss23uAQfdTDRY_EHhxxIU9i1xpGsW5FFzJ4mRanLV4lQYB1avS2XNhmz1oOwTg_n4_-3wGiMYo0hAijmeXAyQKYXngL1eQlo2g/Z77kNSldjF4HmXATx-cvXGet8KfOCsv1OOGeDz8j9xY",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "attdH7IkiuIrwbESh",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/qQgvBGMutAZ_PDCd2wXhzA/D8o8_AehaGAxfi9IWuL09J4pIAS6oi_wF8DJ4u6mlhxcTUBBNtUJdVjFIaJ4yfaEJyyFSXWm0kLybbr21Ts3Q2fQOPr-C_iJkNMHFK2xmtebtpNjSG7A4rTaclp4nnNXSQlbVyjJ1DXnvZzGcdjvxYbzl9dSu4azf6TWNueysMrGhjS0gozVhQRjJVMJv3_8LAxbrnqfnN_SiIQ0FAObJQ/yVV7OBdCiUG8dfCncvcFWIgXKRifZrkr1ul9lLzGiUU",
                        "filename": "196 - Salmon Run at Perry Creek Lock Up Guide - 06-11-2025.pdf",
                        "size": 759199,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/UP8kAQh7vMPY_FBQ2G7eHw/rsaG9HCyNH2CUzKBAnK02dtQGnMqSOgWpPhcKmgRltgDZVP3TKxc3xwFHXCb8Y_quxO7FahJ3bCkr_z-HCDeQ2CxFjhj0hq252WfIFsH6FlbYD5XXtHmYS60YVX-WmGCFuFJpuJWXXkYxwyj8qapiQ/B0YFinz0rG2l3aspFJEx_LDaJraWm3L1d3a01mj7SbQ",
                                "width": 25,
                                "height": 35
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/RHJtRSKiCpByY5DaWflRbw/yiM0TarSCNjM2xMvryprkqnm167CaTa8m_UTlG-FbYlFgtzktUKmxkmsXMdZJyLB8huGEDf6e-82gBq80mUnwUDJj4YPicZvH269T84e0gPlFxeYP_0naUgLpueqBwtreF20NbSjB1CLymSrLVqi6Q/h5eQK3s7GYloOo9EK3uT_S0WxOKUaoYQT3C8KG7OQII",
                                "width": 512,
                                "height": 725
                            }
                        }
                    }
                ],
                "Site Address": "2207 227th St SE, Bothell, WA 98021",
                "Google Maps": "https://maps.app.goo.gl/ALjQTHhyACCX7dsq9",
                "Active": true,
                "Assigned Job Role": [
                    "rectLGnMglyXQB2uM"
                ],
                "Manual sort": "av"
            }
        },
        {
            "id": "recV6j0zKnjrvl58e",
            "createdTime": "2019-10-01T19:05:14.000Z",
            "fields": {
                "Name": "159 - Woodland Commons",
                "Route": [
                    "South Route"
                ],
                "PMC": "Essex",
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "159",
                "Calls": [
                    "recK9afpeIJ0KiPSF",
                    "rec7i1RUndrvomndy",
                    "reckGCupPY7RxWrcI",
                    "recKgGd6BxTL2hFh5",
                    "rec3wwrmDOHXD0cvS",
                    "recYeb7J7jkPsMow2",
                    "recGsD193mDSMtKhW",
                    "rec6V4t5ElWSUUvYY",
                    "rec2w7jdJ4DpgbMJ4",
                    "recAWTKdHeIHTZgcd",
                    "recVqrJlGRZSp5JUG",
                    "rec669GQjt0cNCf9x",
                    "rectG8pZ38zvfW5pD",
                    "recx57SLpCtPHbQEq",
                    "recWungg7UcBAr3yz",
                    "recD5lH70FU9e4Jou",
                    "recVZd40R0WMZ9vHU",
                    "recrfGRoPBEtzOcUz",
                    "recybrbdNjOo1c8RY",
                    "recZ4a6XukjBpYzKY",
                    "recUxCZOw4WDLxlAJ",
                    "recndJt4EnOprGNGa",
                    "recePVCK0j5pK4jdp",
                    "recydvtKOoNowIVAM",
                    "recNqaXMRimzNgrL5",
                    "recfnRFsZMvSi7WnD",
                    "recNaCe6uF9ziFeSk"
                ],
                "Tagging Vehicles": [
                    "rec2w75ERe75Jrg6m"
                ],
                "Site Name": "Woodland Commons",
                "Property Updates": [
                    "recI8YIIwgiiGxeC0"
                ],
                "COVID Closures": "\"6 - Wandering Creek, 25 - Fairwood Pond, 153 - Castle Creek, 154 - Emerald Ridge, 155 - Sammamish View, 156 - Cedar Terrace, 157 - Bridle Trails, 158 - Park Hill Apts, 159 - Woodland Commons, 161 - Palisades Apts, 167 - Evergreen Heights, 170 - Delano/Bon Terra Apts, 171 - Elevation Apartment Homes, 174 - Redmond Hill, 175 - Vesta, 191 - Inglenook Court, 192 - Ascent, 196 - Salmon Run at Perry Creek, 159 - Foothill Commons, 194 - Pinnacle Sonata, 197 - Stonehedge Village, 195 - Canyon Pointe, 168 - Highlands at Wynhaven\"",
                "Post Orders": [
                    {
                        "id": "att2D9AoqLQutKQdT",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/6ABuNiFV67u3jPlr1a7YUQ/TnQmcoSQs_n-QCpBysU34ZBFsxy_Y0bRURo7MWMRzpsyPsDXPTxImJTjHtyPCNtLCM_jDg6cpUCi_t-435oQTOJCFNEfKP3Cz2ToD08zJDaEwbaY39HkFQFx-FTVs8HHAtYavHa5pTi4dg3oAxkdGm20FtbmH8Vr5B0bHdTFK30/sS2paD0cxwOiA27lM3FgTIB-wjcVArsV9PJPw8PGNPA",
                        "filename": "159 Map 2.pdf",
                        "size": 1026016,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/x4XdEwuNRkOvO7Rm1c3TKA/5G1W9m77yMuqWOA-FXyaz43n86V-HJi0Vyf1pMBGyi9-qLOmK4eOMpZttHi9NiGe__OFDZTh4xK4YlUnbYvDLop6moXfcWBvJReLG6joRFccjQLQSGbuUJPAOXc_O656zq4KxAtaLwNB0C_g7MZbbg/la7ZHa-XnL8f3r-dL-h7Rhures1Pc-_Yf-GQ8gI1pvA",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/3qXbXFn1vvunXSM6TLlhzg/vn1-FBOIknNh5yNrg49HRCTM7kgUW-XaSizxclZKQ7V8u2wgWvNrpVUwwuZOwcCgbLYoFsKlzWVdg6S4ermGfKfalku1_7pxvU1ORsfe32g62meMn6y2-ottAYb-EIR19QehoXhEeoM01U9VRHIKxg/fAmbc-tKFRN7ysOz2pQ1yX7kj_RAoRodgHrTq-3-jrA",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "attrlxEJPio2xqgOm",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/dIgEpwgsdhcy8jHY2A7sPQ/Mjcoux0vZz8KWpuwf4X9mFN9MIjevwmwKUu5LqNCNZM8tpvCHIXoORo94EexDXzJVToS7ehn14hTozFdwNt74XZGxLuVO3NsJW1ZsT4YeCyYlLYpg_s2ywFOYxJLlU23AITpRe_6kQ_OAcuNW2IZB7LDkXegh1TlXmLZzcn8e1Q/0bGmx-DBHczOdXmmYAUaZiXGcTJvKUQgHtXcRkEcbbw",
                        "filename": "159 Map 1.pdf",
                        "size": 298676,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/xy_G3W-0X4zNsNLVE92jTA/7gIy_ctfnAOPfIKXyRF2UzrybIJn4B6GTTJWCQNtiETYt7hkmwLpYElxWf4OJrRWTgNVQl4YEfQ6FHUqWtLSZJRAniQi8IZoAwwkbskBsqzD7tP_aOydnOt42NhvzePJrXJIjaOAuQ2QIbKu5KsIpA/ITchHxmfphGW7K7sQqTTSCIA_err-pcQV9YWDa5LRKU",
                                "width": 47,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/c-jH5O-EVflXaQbphvuR9w/a1JYiJlKhwD2tYCKFSN4NM_J_Xzc05TecH5rILoCcQ5iImZgTbacWXMKZgwMfnG0lMSoTVsS0qvZFBYd3mIC3I4XwNojkg0AAF7MeAEd5iyTbFArrsUofixjWbHrCLahQDnzFHZ8jQ-jiq8Gb5pwkw/gtGJBOmjOc_vV2IGbstwizfCngjYP2idiE8jP22EdIE",
                                "width": 663,
                                "height": 512
                            }
                        }
                    },
                    {
                        "id": "attNVZxbF8hqfxhXr",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/QJiMpS3ZvknDK5KBADiJoA/40-RE5v3WsrRVdBOloRF6PURUPCa0fZ_gSJM-Ps2dUUSW-pBX7hlVI49ldeBgH0UWkB2-GApTrpDlQNMsDif0--fsif01gCoydq3Wt3ge0sIgmaLZOJtoil3s07VvHx5b2U_F93_5kDHLWtc2-L5t0JV2nNxrWh76SOD4Ukc0-5L7B-OFkzJzdN3LctQUeKd/wEBpjVMS85UxTTLfLBAKDKiGRgkktKhJAIkk9_066MM",
                        "filename": "159 Foothill Woodland Commons.pdf",
                        "size": 342584,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/xeI44RUJrf-ImP57Ci33Zw/L7Fr5xS0NIS0r9yK5T5hBoNwDaMDfknyE_kKHWS_c-Dny8JnwbuygIsf86pD-pEGqIf3dyqk0zk_Sb6Pt5hC--rGOCXW-WWwVtQN_p67VCl5ZC4iWUztjkRGemWmO18VC-4PBwkInaifEejHn2eWHQ/Y9mB8PrutCU5Syc_nEmTWGce-fE_mUIhnqQVMKG0s-4",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/XToDD91q94TT4y7wH_HPJQ/U_1rrnEbr1nSfm3hKPfn9ajYGbwKR6yRHIqXaC9mdzjZtKg-Auqt-QN3cgqUo2l3OQSCzsE1y2L3b6YSwBsF44N5gudk5Ra27-v5tukT-zaKmmP5UWRDo8KSHEeNbQlSuq1faNbTyFtdxxYR4sIawA/CcF1nCzwd00Clf_fSl7b7oj_63auQGAqVu08qygCk6o",
                                "width": 512,
                                "height": 663
                            }
                        }
                    }
                ],
                "Site Address": "13700 NE 10th Pl, Bellevue, WA 98005",
                "Google Maps": "https://maps.app.goo.gl/hzuwUPEa9G1NMjvX7",
                "Active": true,
                "Assigned Job Role": [
                    "rec1UASONUxcvY0m9"
                ],
                "Manual sort": "aM"
            }
        },
        {
            "id": "recWc28sO92ocNkOs",
            "createdTime": "2021-02-06T13:03:38.000Z",
            "fields": {
                "Name": "183 - Avalon Towers Bellevue",
                "Route": [
                    "182 Bellevue Community Officer"
                ],
                "PMC": "Avalon",
                "Status": [
                    "Patrol Monthly",
                    "Dispatch Only"
                ],
                "AOG Property Code": "183",
                "Calls": [
                    "reccgLBbZox8oGT8J",
                    "recMc5VJsGbQ1q8NV",
                    "recCGUN7rMgKfGxW4",
                    "recu2fgUWYSJJu8Aw",
                    "rec7FXDsNzCiVA3Ur",
                    "recRZgC7A3BVLcTDR",
                    "rec5A82FKR1vV8hlG",
                    "recy7rXaBHQXBd3zU",
                    "recccIzEen6YLgUdb"
                ],
                "NE Route Orders": [
                    "Nightly Report"
                ],
                "Site Name": "Avalon Towers Bellevue",
                "Property Updates": [
                    "rec4UPszfmsgkmAt8"
                ],
                "Post Orders": [
                    {
                        "id": "attffsFvRmA09vZcU",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/X8T5rVqmS3zM_KN_xVVVoQ/GKX_17HflVroYvalEecbPzZlSJS6VuXhXIYqp9vF-s02_KkEnmpyDX-ToZyxMHZvC9rSQyoaibEDyz0PO42FbRCYBz5fxroIK2CFAoKUWf2jrHvBgoryZDF930FnRvmjVvP1uoJIBPqBzLmDTGK0FpjMvyEWWsmAp-1biT8sBZlcXHwCg6gZy-K-NKBQifmpyqalgCk7xO9T0oHr-3K6pC-GuDLgmUkGetsrUVPwF6g/0lyWWEsvVzgXkFvu_jrbvSfRcy7DfjEOSUCgNpWL2ss",
                        "filename": "AvalonBellvuetowers-01-21-2021_032970d0-3529-4fc6-9863-e3f8dc44f4bb.pdf",
                        "size": 3524801,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/I13aMgFKbpMwwFTsnWiqog/msUqXrtC9HR8Wjr3EAcrRMm-1zdWQ9Qcw41WdtDh-s8QoinlgNZORHR_Ysbr7-ghJ8Jd9xfrk2piVSKSvV8rEVcX53-pGWxd0cgoySjrC0E6L_hwuQxJEzH0o_sFN-LwDYOX-kP8Oyi49aXyy4MLrw/0n2OjOirJJGYgCFQt1DESf-0M8WXURzsHzKbtwe9Gfk",
                                "width": 25,
                                "height": 35
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/CHhX3FhwebHLL0naW28xnA/KY4hR_QoFdQHcw98IfbAnNIi_NVNlRKnwtcbIR54kYihUa8wmF_G4NphyudppI94Vhyzn8MWBs8iHIp0rsNuM1sIKp7r19OO6kc-UUUPxxXsccluPsI5n3rAA9dLRLmYwxTzwAtzGZdXXbv1_5I0-g/cpEgA4oBFnL6kGMS3TPRWBSCBdKZ_sLx34FXg-uo0Jc",
                                "width": 512,
                                "height": 725
                            }
                        }
                    },
                    {
                        "id": "att2gUsDYbql2onDd",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/kMW981cpXRCCG4KNEPmheA/owdBFV62n5o2e-AcwQgjhaBhQqYAuRRmmne3ifvijD7TYHfISjCk9KmBUe4utOgeRxOLCD_wHmrffTq32J_m3gJY9vCoqxwSzHMqFsht1qDMRABhubRrRhCnBcU6W3wdW2ecFn8Y5HfAEhxuAUI1C0jI9bkoLRSsHByq7Qh5WbM/P_B6skigKLxB1jPOKEGCmHpDhyPD84vUhT62pvY93E4",
                        "filename": "SiteMap.pdf",
                        "size": 3266456,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/9yEihG3POYBUTDaVcOxJaw/VlQ-SgpMLumztA-VNCcu20VhbX_cWsAuO-48x8RyFdrcFLqEDM_9kJ4FJLQY5jYzvdJVeOlZO9yfFlXLp-_l2sp25OSeApDppc2PeqhWUHZzrA9prCiVyEyaoByWcgP_5rYwgBj3Onbr8hdAmopclg/lkWXcgGqyBvrnCvTR2FBqt3h_MZ8O1fT0Vsndcwy94I",
                                "width": 47,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/Ft_Vzhqf_fNue5-30CtT1w/uo6ta5QoAfWM6CzbVmYaVX-PeVdXqAquCmVOstR_Uh6_LOnem2epa404eqCJ0NCMPCIi-pz00QiwULZsdi5bkmvtDTumFvnszSt6L8l-qZqHBdhGJfkFp28sidfhE4Bt6OXAZR-E1RwRiXDHRRv33g/jP9KHfvyCO-Evt8dukQBzq0b2jOxk6nSXaeLtqi-fGY",
                                "width": 663,
                                "height": 512
                            }
                        }
                    },
                    {
                        "id": "attWwNuKrAKM3ARHA",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/uhXJCXy05vNirrbO8xLbdw/oc38XKT_EViPmp2MBTsQAE5yJUWr5gNBQ4eoVEG8BaK38DPXr6sh1qG0fzIxfPMFRnAf9XQctk93QATsUVDH2z7KBtU3pYsgN1Zs8HHnsltwQH7WfX1iJprz40l97zhBb2ZUxn9bKms52wLHtDuf_avqBbIU4FG8HmV4K8ShWzJMTqDQeQnifpmZ0xn6FKOg/mDkGO5sVobn4PqL8wiUgwlDjEEe83R5Rhsce7IecraI",
                        "filename": "ParkingMapL1-L4Completed.pdf",
                        "size": 296722,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/MRpVz-HAsk5K7b43rG2wYQ/NQlO6DWWGWXXvUJIrGHhBEX1uFCrwd4QIZVTuzxXcdiFOdiRYDUWBtxUxawM63yIwWvhvKdKwKL07o1RssuYEHQUQQmv7T162R83Vi-3_bseLtz7HwNEMkdwldKCFDmubKMClqbiI5H_HKY6OXXmng/VRgd4xJSUZ7lIYXwiuXD1bPVpYsH9pxi0Es902LzKYE",
                                "width": 64,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/XZ2B7VeAprI50M1lRYehOA/UBtWGQ6hPQaQ1sqKSNFqwr2BgGZklmhDtUqxjldLrbue6c9rWgFKtZ_ug5eKIdV6Jg9J8m_tnl9ifod7g3gUbbelumzDZWX8coLxs8GFnwWCFdr4AMqOrfs7uOJ194Ttb3EzIObJ-QGipXKw4gM5EA/ibfkdF2ESJKKLBammaW0QYSJW4d-ibevA2DyUhGIwbc",
                                "width": 910,
                                "height": 512
                            }
                        }
                    },
                    {
                        "id": "attZl4IS85qVSJK4N",
                        "width": 1938,
                        "height": 2583,
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/FHKUgS-iqIQ_J2O8IqdmTw/EppMbAbCh3tVyz6qCWTEx_-CscMoj2CsX6l5mOnSvkKlNnD5FReheuEwX-xHrWeJ1hMTrVhNED0h92ZUPkmGMxUhD2AhmF5p1zrF5BFUcObiS-1y2VmnwU9Y4ER7QDnnp90cVuCL2wFyGeuOpmwWyCVoBEToCuVGskljk7OMDAs/OTRi0KdJnIEXkrZgqBicxDuxUynXR565RF4k819C4Zs",
                        "filename": "Security 4hr.jpg",
                        "size": 370621,
                        "type": "image/jpeg",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/mqvmvSdS-XO-MO-DotKfZA/9rkMRtMPRJ-W7iZnx_z5VABb-V11sxj7ORoRLSSK9JrlUkeTNzmluMuSOcJ0fJJuPx-OKaS56rU6n8Pzzy6AK9t9xJ5EibXk7vPlGI_2S0hoSo0bitNvrsQu6LY3L_M06MG-hhClhW5O4GsBP2aEuQ/S3_kUhJ7LDHfVDEb-AgkYh_jpZ10owOIiOgtpD094e4",
                                "width": 27,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/hWMYi4BM8lF3e7dI9s6RPg/D-V3FHfsZe1dpOhbLPKAn2Ysz7Nxv7RHGlqEbaxYB61GAw99Az1WRPrcbivS6dWScwLe5E7nmuq8T_uqe_jGYi8A1woDThdPYMt7M37fStInRWJ8MruGnTQ-Nt-AQngHk6IME6_hVGE4vE2-NmaiQw/1-F9l_dSPfdmFyhFNmHJJt8OBXyLnHv7wCsFhbCqp4A",
                                "width": 512,
                                "height": 682
                            },
                            "full": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/j98HPQ_EpTJisAt56Q6sDg/VthyX3LTEUTBqCBP9Pm5eOFiBzLUt_ke3w5nP55LKhDb257btPJdmhGNYQz6tGfMuLhHMTF-LxmL66-D7nvXcjS_P17pudnj28Ql_6KXrb_scs8Uhe1-fy_uEiP6e2sTo7br4w5TYwV6S3szdA0QIQ/2dTcO2wqCRKmezia9mtZFKU30vimRQkNhUXyZB_rp3k",
                                "width": 1938,
                                "height": 2583
                            }
                        }
                    },
                    {
                        "id": "attiYSYi9BndMqkWS",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/v7uZOHBkx9lshW0G1E6A9g/l31SuGKfobWa-Nk5K7Qp2ybpJfw3-adlboIPO0SpIq2yROZ16hCVoh6kr3Z6b7Rnd6XIB984rJwTYZL4QjvTJng7RDaH1Z91oJOm403Zr6Qz4OQChUGbhvp_aeXMgo1w2ef5jFBzPFlfTojMvARox4u0iYu64WUz6mbe04P9G94/NjoDBzfIpNAFBLlcZ_OOGmsEarC-RONrjJLy9Youu8w",
                        "filename": "183 Post Order.pdf",
                        "size": 53573,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/P7_n-8T-gNMCnlrliI9m0A/8K-PRu-wiqFKl2Mnmpecd_zv0_OhpcSo1VFgucoFdnARu7RpFhAn94tffoz70jBepxTtsOAGqrQNezgY0lTTXx18GZAayI0h_xbpNKxj9awI8YiXncw2zqwyZNOQsR1BHqElvVae8aeammit-t2RIA/NWDrVgpPQdkvxgMLfA99MqcKjZCrtI40QunV40W_Rqk",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/Y8Y3_OL8bnBaz3sER-De9g/5CGNt5_buOxKzCVEoQ5Gbq2TvC8jkAv3Q5mllA-BVCoxaF5LWew6YuwX7gZ5QezoP2hfZqD8p0nVKv1xtCSJD793teaJOkZveLw3LSfF0htNF4kEoXVDp3sID896O7GL_06ZKrCmwnckJZB4NQBF2w/zSfmiUJal8APiAAtnDOuk40fbjZ97pjEtnxJIyRW-cM",
                                "width": 512,
                                "height": 663
                            }
                        }
                    }
                ],
                "Site Address": "10349 NE 10th St, Bellevue, WA 98004",
                "Google Maps": "https://maps.app.goo.gl/NKs6y4APoyDJ73CS6",
                "Active": true,
                "Assigned Job Role": [
                    "rec66CkdWQXNH14i5"
                ],
                "Manual sort": "aj"
            }
        },
        {
            "id": "recWlJaWPKO2lxhGk",
            "createdTime": "2019-10-01T19:05:14.000Z",
            "fields": {
                "Name": "169 - The Knolls at Inglewood Hill",
                "Route": [
                    "NE Route"
                ],
                "PMC": "AMC",
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "169",
                "Calls": [
                    "recy8tl68qwT1jCY4"
                ],
                "Tagging Vehicles": [
                    "rec9KJfaM51nVY1mB",
                    "recigBhkjuUSOeBo2",
                    "rec2uwGshCNHSm0VZ",
                    "recIJjUTjJSJ2j9Ro",
                    "reciVv61xrbHOQqsH"
                ],
                "Site Name": "The Knolls at Inglewood Hill",
                "Calls copy": [
                    "recWvBwwScOfgtv8z"
                ],
                "Post Orders": [
                    {
                        "id": "attZFYXag3zEwcSzW",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/ANkRFfgyqsevdHObCWQQjA/JmdLpmkbA9rk0CTv4PXC-lpo5pLHKb7ePtl-b7zMGtz8Y1k8lPB_OG06rYchYqAIxKxw8ZQOr8d2jA3n0u-wMIPG4IwZZN0LEB8ljJgPiQhtwhFlBlqZwvjJ9lGbULXA2r2_DCcFjt5-Hv53Ip9I825DTw4b_g2cbiWs8N6cZ8E/C9wSYA4Zty4U6866eI1xxMR_ut3LkG1c6kdO1dxLleQ",
                        "filename": "169 - Post Orders.pages.pdf",
                        "size": 58806,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/azSfH3NxGnFATHLQl4q6Uw/HaNpEgrI5-D8i0KJfDoQgoU48sguKeUU5UDZ1ayff_g7c45jfiIK2aidFhv68JwjivYGIgIW6SCg4I-93R6NQ48uXCZXOCBoTB73xCneEBi-FBkoz-vC9bfEw9KIh_sP4R-d-HvuTdEgg8uYjx--bw/mFf242uxg9CmTaoUei1c1DaCkxOF7q051qTr6utUJn0",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/pV2Cvd_V7usRUjMneblEEw/VHr_oH13oiIBhtoDd6y3O1wYR8mP_BywFi0UgT-Tj3L8zfdpswV3CJSqC2uE623vk-60ATKhlIhDXQsjz_EW9iiJAB6dvRnOGaxm_Zg8AeriZd1lJ29SkD-kjN_w7bPiaLH14pHDi7I5x9hvNSgbVg/zmK0fLWi8NayR_JAZLRmV00pqRgEZv65UUAqjVZu6Mo",
                                "width": 512,
                                "height": 663
                            }
                        }
                    }
                ],
                "Site Address": "22626 NE Inglewood Hill Rd, Sammamish, WA 98074",
                "Google Maps": "https://maps.app.goo.gl/5gpSwf1TU3qeJdEw7",
                "Active": true,
                "Assigned Job Role": [
                    "rectLGnMglyXQB2uM"
                ],
                "Manual sort": "aW"
            }
        },
        {
            "id": "recXRMq5WunQNKSM6",
            "createdTime": "2019-10-01T19:05:14.000Z",
            "fields": {
                "Name": "191 - Inglenook Court",
                "Route": [
                    "NE Route"
                ],
                "PMC": "Essex",
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "191",
                "Calls": [
                    "recP5iT3ruKN4yH5w",
                    "recIXEQ7RKpD25A2h",
                    "rec3Sh8eHsfum3z8R",
                    "recfDlsuorBn55dVy",
                    "recX2c5aXVNVYupvZ",
                    "rec47hs5EpQ5VWCry",
                    "recaxwhWlaIiYeSQG"
                ],
                "Tagging Vehicles": [
                    "recez4ES45g7doaFb",
                    "rec2nc2DvWNXcyp84",
                    "rec4SHuGK6qDhLTQN",
                    "rec9hZtlV9RvNnfUW"
                ],
                "Site Name": "Inglenook Court",
                "Calls copy": [
                    "recHOa5NEPfxlvJ7Z",
                    "recCc36lCB2zpBHIj",
                    "recQyjPQvuRFqPzKb"
                ],
                "Property Updates": [
                    "rec2KFN9UwkwrnqGb"
                ],
                "COVID Closures": "\"6 - Wandering Creek, 25 - Fairwood Pond, 153 - Castle Creek, 154 - Emerald Ridge, 155 - Sammamish View, 156 - Cedar Terrace, 157 - Bridle Trails, 158 - Park Hill Apts, 159 - Woodland Commons, 161 - Palisades Apts, 167 - Evergreen Heights, 170 - Delano/Bon Terra Apts, 171 - Elevation Apartment Homes, 174 - Redmond Hill, 175 - Vesta, 191 - Inglenook Court, 192 - Ascent, 196 - Salmon Run at Perry Creek, 159 - Foothill Commons, 194 - Pinnacle Sonata, 197 - Stonehedge Village, 195 - Canyon Pointe, 168 - Highlands at Wynhaven\"",
                "Post Orders": [
                    {
                        "id": "att6X8dMhtsGUEM3B",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/28gMg5j8rsQ4AEDAOEqQTg/kVNCMm0xkNG0-Qne1JufBAz2QGNiwx0V1LYPce8aAiWtjJAJfz2j1cYIlghbaQCla1eDgD_JqnG87CwTC7LZUD01kDJJcdGdcPqH33ZxYuirTF6W1fTLcB66FvJR_iDGGFj1CgWpy_ztHHRUx5BxiBWkHKrV2RYAWc-2-uckiRI/NpG5d9XnmqC2jBqJGpKKbDcnIJzCPxa1zZ1XaW5QO1o",
                        "filename": "191 Map.pdf",
                        "size": 6459308,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/UavU8zWu2lAzd2UCmG0nNA/s-iGKbtJaImJFhpGoBYXyf8R5C4OK5mKdF83EI1QlWnctK5xlHu8FGl0kyb2JEr6RjFf2mtrLNWCZH2XBYhwC6mHWt_uRzEE22y0Aklj2T00hxYbrMn_PCG0P_34wbYgXIzeNpjZfEwBuic6TCt96Q/-6nQ1SU3fDRXXR3RGI27I8iODu7s93PtgiHBUyrXq3o",
                                "width": 47,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/2zY7tpoLtyd1L-0EG9rgVg/W_mos41TbDmZ8Xp5fUPRBiwTB4VQLiTh5tmNWwXy9iC6PcR6hdn--unfn7q0gfyflBHT4fFj-p1k_gPSDk5g50aIepGMMFSLlws53oqCd44oq2y3Vy1-_USeKG1QdHxoJlT6-_g2L_znzj7m5uBxGw/02DMiG4HooJGjBAQtZagBXYTxLcmFOPU4IirBA2KWuk",
                                "width": 663,
                                "height": 512
                            }
                        }
                    },
                    {
                        "id": "attt6IOH6ar6BU1We",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/It3FVwGgMKbHh-U6G7o8NA/dWr-8sflCx3AP8O9I43QTAmVQiSGUvWP4iX91A8lVrOMSUfC-TnRF9k74QrbbMfHpoNCgJeifkjAsE-9XdMIJg6ZEjU7gPtGPY40464soq3l1M0zNFOsa7uQoVx0h2ax1PaFqfdj_3VJTjmWqZD3fC6jZIECAeB2HIaP6pV0hiM/JZRfFYwx8tFjUMrCNTTjy9_VmVrm8VgG6htPwau5zs0",
                        "filename": "191 Inglenook CT.pdf",
                        "size": 284960,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/DNcVPQQOxdXYaEKXLcoTCA/3E1TdwSJybFcvb6XvC2UcGpC7VbvSTVziGs9geBXwM3ys65NPJHelIfFp29HeMEXgUvF2HhAytfWBiWEBYsmghcHYBYuMT-nQ9ZUGuDZIiQP8mlvrTlGIfbuCJxYYFtlQVafY_pQbYKkl0ZgGXnEZg/sg7iv8mTp_MEJ8lXYTGylDU2Iwfa4DIoZhugb4PjITA",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/EoMAbOYDEtRxrKFdHrO2gg/-l9Jg6Jc52fvJV7xQZSorfwZLkBL3pdkUqejqYanW-E3t2QKjLQ-TbXhuYoFWp0X0-ETZmp9PUK6BraJ_YWhKVPyxIUiAlq2DJRWUe7ittzeycq86NuiWntVjYw4QCDyacFlQVdax2QE7DlVuO0p8Q/3aiviTi-smxB11cGsdT7DUIfNMggzutFJP03kG3R0DY",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "att6oY54F6N7TgW9b",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/kFpDGy0fOryV-rTICt_NOA/IOpPQEpLM4EsxFJZ2hIdROeEtKlqptpUSzzXPtCx7ncgEk-kxaFWZ44W9hrboNFC45GXEsf5NZtnrziaa7qZf3ay7PZ4TFQZEJyuHuwX-3Pg_NUI1wufUDK96a3miDFffQQMQiUCqEBQWsP0obhGpcKuf5bZGZuWnyz7HwKm7fRnToTGiEXNF_tywF71U_mPWSF6jdBECr3TxOGTURetGw/19ns3ilEqS_vTGekg1iFSIJsiQqUdNX6YHhsYwMHDIY",
                        "filename": "191 - Inglenook Court Lock Up Guide - 06-12-2025.pdf",
                        "size": 1017924,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/PTtbibUB8vEp_Dm5TsLLaQ/kn8kmekolhyqEGjkMVO9isnNLs5IdaTmEc641wSRE4D6dAl3giG2-b5xAgw3aGDVO5nmIr2_ItU_kGU8f8k4hGXsH98rfVR4r1v54s1U9YnzKlSZaDq7xb3LjHYILmOfEkNFxbs0xVS_WPS8uUTHBA/KyfiD6IwIOkakTDnr1Mlhw_NKvEJnPrLJO_EDhiiwwo",
                                "width": 25,
                                "height": 35
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/FT11avGPphX38Sj0yJP7gg/wyKZhCb_mfzrQJYE8og8SUpeGu586__gkgQ3dsJPkEXabjuGydYtP1BEtXVIx1kUgG-M-rasYHlHwFRX7UBd4Th47iD3P8DVC46GMptreZHi6zicWnls05rjjV0alst7cCN0sSJbn7vv83SzlCXWiQ/Z4LImsInkfu3lIiuU6TMsPXh-PuwuuMoo6kQSg0BgHI",
                                "width": 512,
                                "height": 725
                            }
                        }
                    }
                ],
                "Site Address": "14220 Juanita Dr NE, Kirkland, WA 98034",
                "Google Maps": "https://maps.app.goo.gl/GvjUJEaP1hGBd3GA7",
                "Active": true,
                "Assigned Job Role": [
                    "rectLGnMglyXQB2uM"
                ],
                "Manual sort": "aq"
            }
        },
        {
            "id": "recXnzeJwoz2lNjL4",
            "createdTime": "2024-12-19T18:38:52.000Z",
            "fields": {
                "Name": "232 - St. Luke's (Ballard)",
                "Route": [
                    "Temporary"
                ],
                "PMC": "Exxel",
                "Status": [
                    "Temporary Onsite"
                ],
                "AOG Property Code": "232",
                "Calls": [
                    "recW6Q79RCTS15Ank",
                    "rec315CQqH3SIhve3",
                    "recGY3Pffx9724Stz"
                ],
                "Site Name": "St. Luke's (Ballard)",
                "Post Orders": [
                    {
                        "id": "att9El66khrpnZWyP",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/6FRh9H09_hfdMI7G4yNFbg/4SreEzCmfRepcodKCf0gOWoDXORYWRhjDfGvQLD8wlM-1mHZMSnfks_0Iqm-UY2wAqA6TQiybWjhuUeRlUesXBsFRXm8NPQrh-3BZLyQ12D7XFCy9Ny_zCeJBqseAgeaVLRV2MkXxhoB7eVB7Pa6M6_TnjUDREF3C4f3SxlEQmY/gIVOZyvI2kEcEJWqHiR8vpG8ys5Txz6nquWeYoGL0mI",
                        "filename": "232 St. Luke's.pages.pdf",
                        "size": 1168234,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/J6MCCYSgexGrAzmX1BLynQ/G1ooTx1Ua26HRTesh38LcPiaFI9CAi5rIOihXMU3cfmobSXPpeopJBBf8h3mNOWXnrE-6WlbC81cMrn16o-OXbsKIPazQscQ7B4eEPNUz0c_DQU0CMARDm6fbrKm83PdmN3W2At2Rlhp_UTu83LcTQ/Cq5RjMwxHHC0t7hrvyhvJC7oJqB_LSgStdFz6uNNTTE",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/I8QbRzLrSrlTPUcXqcb-Zw/azLBk4eW09cEIZqYCbFSHiSrkIJ1_ueGrK-YMBj0kuWZOtVUpj4Lgjhi1JJDv_Lsk1JPX0Xnin2qyldCaGnxhHUlfIYdTDoldvD85ERcOsBwDTGeE44uBUxK9T_SCF_88VE2uZVTOft2YD2zMEOqBw/-Qxw2lUPb4iBGssVEuvApKyIfMSlvmUwEzjHxwC_R-w",
                                "width": 512,
                                "height": 663
                            }
                        }
                    }
                ],
                "Site Address": "2035 NW 58th St.\nSeattle, WA, 98107",
                "Google Maps": "https://maps.app.goo.gl/aXb1ncaXWRnujeUt5",
                "Fast Field Username": "Onsite3@aogsecurity.com",
                "Fast Field Password": "Guard2023",
                "Active": true,
                "Assigned Job Role": [
                    "recWrgxX0mkHEygAr"
                ],
                "Manual sort": "b07"
            }
        },
        {
            "id": "recc1COWsZCjoy0k3",
            "createdTime": "2019-10-01T19:05:14.000Z",
            "fields": {
                "Name": "158 - Park Hill Apts",
                "Route": [
                    "South Route"
                ],
                "PMC": "Essex",
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "158",
                "Calls": [
                    "receW7CfTPvlqAVHS",
                    "receJAjvxU43qmvJu",
                    "recSnWgCjLVsfAylG",
                    "rec6PugwV78PpZ252",
                    "recx7oc0PeHmvsqIZ",
                    "recbptA6tUO52xGSm",
                    "recrAa4gv5hO4RtyY",
                    "recY285e7h7pNSPH2",
                    "recbaR7112qTK4DeB",
                    "recK7ZtQ37GiYBRvQ",
                    "recHHdv1nOst8iduG",
                    "recq72ssRmPSYZvRX"
                ],
                "Tagging Vehicles": [
                    "reclpvz3ZNIkvgmat",
                    "recDtbeyaZZcHGcwY",
                    "reclOgqzN3NlIhc30",
                    "recbqTO2M9dBxS29k",
                    "recpqYbrxb3nCmg3g",
                    "recyj7CFf50G5OrJr",
                    "recNo6HFE6THUD9Ir",
                    "recYU5GidR4Qm2viT",
                    "recp6cmxZTwD0Fo4i",
                    "recUFQwUuYM27h4Fa",
                    "recWr2crnJdF9Y7k0",
                    "rec0IGChGl6xOyNFT",
                    "recujzKxvBnRU7VMs",
                    "receDJdAuHByTmXhm",
                    "recy9tSx6iYcQR2CV",
                    "reclBvCc9tjRN509G",
                    "recGElK6y3puAv4O0",
                    "rec8phtSg7pJu9gyM",
                    "rechDKhsoUsHQxwIz",
                    "recORtdzUPsuQUwW1",
                    "recoZKmLbVfxvKYE6",
                    "recYEQpA6uuqodMzB",
                    "recjvzP72JtbMsWFW",
                    "rec3fMi9PePiQuiyM",
                    "rec5KybYVawJhihRM",
                    "reccwH8uuZHjQNyIr",
                    "rec93DU0mOnoc5wKE",
                    "recTTsQe55hpyLpNF",
                    "recxGlbvpR2jcGX09",
                    "recagNMWMKjC9VBmE",
                    "recd28BDgpNNZ2epy",
                    "recu1LTKSW0KZ1tci",
                    "rectaeDSDVaQjmSC7",
                    "recLsLXNBn93fV6if",
                    "recvvrq61lZzsZVPn",
                    "recviTMqxT0cjGiZC",
                    "recjjhHbV8i6MZrcD",
                    "recRyRUtRlBK93sdk",
                    "reczIrhY4WR0eJkEZ",
                    "recvX0W1JdZcC1w93",
                    "rec397zOakGlLAj3m",
                    "recvwR57W7P3V8M8p",
                    "rec2JncfCQ0sJZQ1E",
                    "recuDiCcPrEPkMIlv",
                    "rec8oueHHlLoVv2t3",
                    "recF2pCFbNJ1I8br4",
                    "recsW0CSZwHbauapO",
                    "rec6TjDcRwOwPwjqH",
                    "recVqxbjfXZbj638s",
                    "reczDRuoTjGDbVOzt",
                    "recW98S0iXYjqsVzD",
                    "recLGp2fJgHer62l5",
                    "recxKMW9IJblCrAz8",
                    "rec8n7KXEJLcmrLXC",
                    "recN5nkENm4jGyVxA",
                    "recbGtG3xPSeuO4jH",
                    "rec3Ryl2r3C0ACsHP",
                    "reclh2HTGWdJqVvhb",
                    "rec46vX6xoybxInFg",
                    "recFCFdSOaTHg5pdc",
                    "reciVMhdHB4aKErLz",
                    "rec7r9NSZE0WiwljH",
                    "recnCzKICjJiFQ0cd",
                    "recsnJqlyRlbk7XqA",
                    "rec6UimndUpPvYPUU",
                    "reczdHoU7PUutydnv",
                    "recMYRhKHk0gR8Zh4",
                    "recxHJG2pLJFK3qib",
                    "recZS4yxsN1lkm63a"
                ],
                "Site Name": "Park Hill Apts",
                "Property Updates": [
                    "reczkXK9MUZlNcYUi"
                ],
                "COVID Closures": "\"6 - Wandering Creek, 25 - Fairwood Pond, 153 - Castle Creek, 154 - Emerald Ridge, 155 - Sammamish View, 156 - Cedar Terrace, 157 - Bridle Trails, 158 - Park Hill Apts, 159 - Woodland Commons, 161 - Palisades Apts, 167 - Evergreen Heights, 170 - Delano/Bon Terra Apts, 171 - Elevation Apartment Homes, 174 - Redmond Hill, 175 - Vesta, 191 - Inglenook Court, 192 - Ascent, 196 - Salmon Run at Perry Creek, 159 - Foothill Commons, 194 - Pinnacle Sonata, 197 - Stonehedge Village, 195 - Canyon Pointe, 168 - Highlands at Wynhaven\"",
                "Post Orders": [
                    {
                        "id": "attF4uVAEoCMHUEa5",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/Ksz_6RBGTZy0mlD2z0_MdQ/edkK6SlftwPTIATu2QIgZwgadlil7-PRUvge-CJYVlDWKOoJ_DTG_9BhQVoB6i4mLik1mAFgbVYqVokkJbiY15VCgL-smrUJ5iPsVY7YKd1OpNOTzpnGtHYFNLuAdjR3Oqufsf6kSwT_1nBbJNUCzaz458kJ4l90TyWFjrbfci0/CoKzFgx-RIWzT_es5jzUhOQxGz1hdKcOvy4adENN4dg",
                        "filename": "158 Map.pdf",
                        "size": 10460816,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/N-wRCajrT2ndX4tSO40d2g/h-u5rkruW2BCD0GzmEW1iViWUdKj6wZj7NkaYDuIWzEjlUaduW5vFc0usap6x15d1ZiDMQ96vNHxYePHV5yqIuGVlNDJc5TXmw0J0Yvdjcf4sNhjmS_RxSh-zlO2pOf-FskI770yVP2Bl2aWlOuQ-Q/b1gr3ojydK8IZYMQMILhFwzXtyRRG86povY294TPES0",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/2h36PNznWgTsgbz61Ulorw/Tj4eiaCKZ6Td62l4HjtQlnW5P0tdi3V7RBHrte6lXsJOYo9BZ_NBe2l4kHKBIddNO2ajHiA42t6NP6-8jYF1BiYcHl_37MiPIf4av1MJ0sc6YHq4XvD_o4JzcKgHBGlYirbilR--0uPPwisCtHt3bA/0F22IdDz2QKlNVwJ3VsKoV58J5XCv0ua1peCsq_GNt0",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "att4isMUYwXGqgH2Y",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/F5gh3I2VmvHIM1pVImCH2Q/J5xvNPGX5l1DhVsfREN0ESKCI4vJt3Xhd4hS7BdI3qJDhSRQhvQKhPX0B9HVIGlE0S4egXayS7-TgLEz3T-lCt3agFmCp2MJVxVDxsO8hi1Ls-mq7o3TyUweqiOKECtgKBRMSQ88GFld3VTPcYiu81dOmQH8SdCQNSu8WTwH9q8/RpgSWweY57ezPk5TvqFq4shmu64RcfJB_Cb92zv_hFs",
                        "filename": "158 Park Hill.pdf",
                        "size": 288448,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/-npEzwxKKM4trmbG5v8z1Q/Z81zn5fiH8vYywaq8DZGLDxWmMX3gvP8Xc8zWEU_mjZUsU7JgHA-YqevZZRVZm1yyNRfJ_jwvtGAanK3sG5TQ4PVOajV5WDjJ8L6nsyvJyphmGR1AV05-XoHasdLDopm-GWtsqDC2WF-64ae5Cip7g/5VmkzbczKVdC6XYcUM8YoLW3e6UcnAnfeCO4wx9879U",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/MLUVl5PNf3WJ9GM2pQHlTA/axikW35AMnt5W2BaHFiqDosruLmpV5BX34bzkQM_fdNAhc0CrNsxa4IoxcdCMQfw0WHCsjQElMdkXfaTfDeAzACFugbpo8emAleH8Q40WBDEVbKULM2j5CzXtfHkfpnpMFXQZ9n_gEcnkOfRmYABRA/8wDjmarCSt2s7dSj1vobGRXf1nGP9cu20SeaQorWoyU",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "att6dSfwRenNGtr59",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/E-DM1szliJsGwMlty_D2Sw/DyHIVFi_MymHWCjxMCYXtbTviOvqE0zYftOePNpY-Aj3M3ll_jVF9BAueQYLt_7V29IEwE0Adj0BmaS494UTKBp8DauDqntu5ZwPRlcAVmk2pRjcwk8mUgtjw59NecNyB4O17ZmgjRirmawcNLXQUJymTOHxOO-MD1IE-oeDJe-WQcRhj6sT0gQMmGMYqoglkmJfQ1_VOK-ul6Wodf8cAQ/Q-y9-avh5TWeKIrqbfc1MBAKLDpa4FKswXNG2R9disE",
                        "filename": "158 - Park Hill at Issaquah Lock Up Guide - 05-15-2025.pdf",
                        "size": 1087322,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/4iFZ_z9yoFh6wubz2Osi5A/unJGs-kb7eVRi54oYjAzbdYvOLkGNnAIDVFgTXK3B_jipIg_CFZRksYH9eyCglSgYzkF67ViXtK71w6q1k6xcMen2xITyTbQAYDIApPGU-p2a4XXzVv5D3dFFxvJOJxlH19G6Y3ams2K3k4hUElqsA/8GBurFbCgNPqpBHYNhvR7--NHQTcUHn7aUA4Pfz-yTY",
                                "width": 25,
                                "height": 35
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/Dq9yv5WiGQr5Ee-JtdDGAg/TBhMHjyeVh-TPUZhz9gs1xcsoMyU6dYUR-_4NTLYQJB7yuONh8s7Z7_gFPY5MlPuucaC90VSBVxdaR5yks-_uAmx_tCTtEUnybazYCPiES8TjwV7WJSjgfseBg9dF9aCbTwa5NUZ3_s07qJF8OkPQQ/pff-0LedDMHLvoQHdFdinXArV0TyIgRjKlsG8gvw0qw",
                                "width": 512,
                                "height": 725
                            }
                        }
                    }
                ],
                "Site Address": "22500 SE 56th St, Issaquah, WA 98029",
                "Google Maps": "https://maps.app.goo.gl/MqxzkiWip5hqYD3v8",
                "Active": true,
                "Assigned Job Role": [
                    "rec1UASONUxcvY0m9"
                ],
                "Manual sort": "aK"
            }
        },
        {
            "id": "reccCExmLYQBCBWbT",
            "createdTime": "2019-10-01T19:05:14.000Z",
            "fields": {
                "Name": "33 - Firehouse Square",
                "Route": [
                    "South Route"
                ],
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "33",
                "Tagging Vehicles": [
                    "recwa4DdXav9y7Z2u",
                    "recyqabcMphPAHStP",
                    "rec5SSS0gWG7M1FMq",
                    "recCnldHl0qPq6MKj"
                ],
                "Site Name": "Firehouse Square",
                "Calls copy": [
                    "recV3lrpCu0jhPUx7"
                ],
                "Property Updates": [
                    "rec3P9Cj7XRqdgV2r"
                ],
                "Post Orders": [
                    {
                        "id": "attqAadhPzMyiVYtj",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/KkwgDf19eAfZZBQbRHux8w/b1xb00A501BsTze-8a-we-vHJjGca9aIf9qt4cSEucA8NuZ17UGjxV1rDYINKUaHme2J0z-wrjBYmtEiBcW3VES2Sf8_Oc6ISLvnas0AKLCAT5ejE_8-MRQpkrKhrXhTgCzXPDlyM_DCjqThv8vXvmu4uQFtQ3rRFMn5Ohi5WZw/-sR0uLYs3QfA3_Dk7tiI5ZFsBw8rVJmrPzI5Qfv0wFc",
                        "filename": "33 Firehouse Sq.pdf",
                        "size": 254347,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/TY-MMMpyqy5HH2hXzaT3WQ/1nbVA3Hw4dcjKh1YHjh5dpQhMbcbEzxJPFT7H28IrPdHNIQzQLso-BDEkhWw725RVnc297YTi7VfolDdw9jCGPnArtHkg1IJoH17cJOjtWEP_R9dFc-Qe5AcfLGcXfOsw9iFZUW_WNE0VrzCOHPZzA/1DubtpS6e54KbD2QdXF_snor7l-RBHZPdtj04SyYkfI",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/VYzjIW__HFgIlqGzu-b-xQ/7U-I1Cj_x2fiIbr6ZZYjyWZk_3XUbED8MM3AvBdJbegGf9-xWHyFvn_V4TydxJH2eu05IriTEOoehozGmjt0wsJz4dtL5pUNOWHHt4BQ1_dVu0Fj2TBb4-Ou57-rJRGPdCRIzMUQsjn5HVA6ZWAu5g/VPRfrKMk71lQQ7AYQkBYdR6RYiqoiR4SyZHf4VAd8Lo",
                                "width": 512,
                                "height": 663
                            }
                        }
                    }
                ],
                "Site Address": "620 Auburn Way S, Auburn, WA 98002",
                "Google Maps": "https://maps.app.goo.gl/X5pKvJ5FZ1p9pso39",
                "Active": true,
                "Assigned Job Role": [
                    "rec1UASONUxcvY0m9"
                ],
                "Manual sort": "a4"
            }
        },
        {
            "id": "recf8e5IZcVmlTCLl",
            "createdTime": "2021-01-30T01:44:23.000Z",
            "fields": {
                "Name": "007 - The Bond Apartments",
                "Route": [
                    "NE Route",
                    "South Route"
                ],
                "PMC": "Allied",
                "Status": [
                    "Temporary Patrol"
                ],
                "AOG Property Code": "007",
                "NE Route Orders": [
                    "Patrol"
                ],
                "Site Name": "The Bond Apartments",
                "Manual sort": "a2"
            }
        },
        {
            "id": "recfBONN6UyoAlMv2",
            "createdTime": "2024-02-23T23:44:11.000Z",
            "fields": {
                "Name": "166 - Vue Issaquah",
                "Route": [
                    "South Route"
                ],
                "PMC": "FPI",
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "166",
                "Calls": [
                    "recQt0Mvv4jI6sUfA",
                    "recazfZbiqFNuRKkm",
                    "recNyuzVGBkS6Re9Y",
                    "recUHmA3lMA92iXI5",
                    "reca7ypCiwnYrIrZd",
                    "recwQdZXwbHjJfW5L",
                    "rec4iiRWSacYrXl40",
                    "receVxjaCwLKGtfoh",
                    "rec9mcw6guVkG5YQV",
                    "recI1OlUz2BJaY7cW",
                    "recrxWp275voL6BdM",
                    "recWDK3T3Mc0GUY0n",
                    "recZs7UlHNRFRJXfk",
                    "reckt8jjmjExG2wfo",
                    "rec6kgSRB9efA6rql",
                    "recU5RznXHs5dZlzY",
                    "rec7bSBHvou526rnV",
                    "recUbKwv2yFPmKtDK",
                    "recIIo8DJdsSIMgDG",
                    "rec4FJYUBZm3Uod2s",
                    "recN6YBB242lV6JyQ",
                    "recvwySu6zjODo5a3",
                    "reckbHkyYaB0IIrSM",
                    "recUDbtNiPBjajXHq",
                    "rec3VM8D17tNV4O5P",
                    "recMrqYRdkk1bY62p",
                    "recVVpPhgWrBd6eQZ",
                    "rec66OyZAxRFQO2Wr",
                    "recch2xf6MjisQdPG"
                ],
                "Tagging Vehicles": [
                    "recuCoRef0YrEng5E",
                    "rec0TYy8iten3TzCh",
                    "recPBjscqyGJmcZsz",
                    "recAcoIfvUTrHTJim",
                    "recgUkZGyiwWIXGpX",
                    "recLXsuJCJJuImueQ",
                    "recUXjmOQfR1AZzeg",
                    "recBJES3gWd43cuCX",
                    "recJm1HkvSV39HFns",
                    "recb94nMcwyjsyLQ2",
                    "recGpRQga9mkLrOYt",
                    "rec37XySrOIy35A4j",
                    "recT2k5bpSn2a1NBE",
                    "recAsdaQSrGLDXcly",
                    "recbyE6Uhx9DspMxW",
                    "recoUf2jmzPG87uZ6",
                    "reccNFJ7aMdCtPpzG",
                    "rec3R0LX33J5djYqV",
                    "recq7vxkumDW7JDrm",
                    "recxJnhylFwmzyJFI",
                    "recT70KtGk7fNuP2l",
                    "rec2EPgS1brYyU7Pa",
                    "rec0Hor3MnveEmacF",
                    "recDMMVdvSagDqwUr",
                    "rec2HBr5ssKnsexmq",
                    "rec5iwqBEhWZNnnwz",
                    "reccwimLHpGDsGEvB",
                    "rec0iWP0hs3muRc4S",
                    "reccj9NKGr4h9Uoqg",
                    "recZT8s7EvZ9cYFE3",
                    "recNr2synYvN1tdCC",
                    "recJhFw0w5wBglXLZ",
                    "rec35WBSV3QPC3pMa",
                    "rec9nT7O8oTyPNYUH",
                    "recK6DZebnd2tfVDo",
                    "rec06Ay8OpHLt4Eov",
                    "rech0xLb4hdfPjg4O",
                    "rec8ZiV62wLxFigUs",
                    "recFV7loDZ54rGatQ",
                    "recto0LHA47jBkTZi",
                    "recPi5ScJLLHlNC9U",
                    "rec6gJ175tr8cEXnQ",
                    "recMIwhOQivIBQset",
                    "rec7spQa1wjUXDw0s",
                    "recY8G2U4GDpkanQT",
                    "recYsb5fGANOo4MkG",
                    "recr9vTGdhGije72S",
                    "recGiCbEkXSGfqLiJ",
                    "recxDM1BiFwatajsO",
                    "recSd8uHwPVftvEzc",
                    "recEDiGahMkfDsG7P",
                    "rechRNMNc083aCXRQ",
                    "rec63oCpOMXQOWVZG",
                    "recHfHbuefvQJRTqO",
                    "recYoOgSniL5uYX2O",
                    "rec5TVmnsvuSqln7v",
                    "rec6kKuaPAI64Slkx",
                    "recVUiuohph9olhnU",
                    "recHHYjfbnKWWKlU3",
                    "rech8QjsRi8OICeii",
                    "recGYzbslPRGyNYCE",
                    "recw6ZlED97KCcrw6",
                    "recf2b3fqlij8AvaF",
                    "receaTFZCVA0YjnON",
                    "reccZjeFUqObApbit",
                    "recvpO495kEcqyfi5",
                    "rec83QYMu0nQ2KB4O",
                    "recTFTheOKvKvmjRv",
                    "recpRLS9qbJnpWf5B",
                    "rec5hCYcYsjfC2c5O",
                    "rec5xfmFJRm2lkrAc",
                    "rec5Yc7RjC88DtiyH",
                    "reciG2Gn5nNubUDLN",
                    "recoy7pRlgy3al3cf",
                    "recrac66uVzhFrCe7",
                    "recVmxf5L10m2udLP",
                    "recWT1yUG1GZKHwGs",
                    "rec52d8UuRcpd2Fv3",
                    "recgWAXhr5eBTwqGP",
                    "recdWHQYxOjaDGV2Q",
                    "recMN5ikhYcDHFTdT"
                ],
                "Site Name": "Vue Issaquah",
                "Property Updates": [
                    "recmlCz67K1IHthqk",
                    "rectrAYPlAHobaRKq",
                    "recIPq6BcuF7wXSic",
                    "recQWZ48z8a9vzla0",
                    "recJGLKViXp8rTuXd",
                    "recnMP9KY4jriArSA"
                ],
                "Post Orders": [
                    {
                        "id": "attCYPJdFr0Q1VlCV",
                        "width": 4032,
                        "height": 3024,
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/kT2YSDsmQfSyYCtYIt-twA/lNT1K0HzR_k3Sifz4dEG8r6SdxR1A6ACxSEELfzdy-sai2hW8CgBEOS79v0gZQk-YDzDlg_nedwW2gkCfBmQAoAELvmIQWdRzj5HGlQoLz-UAKPAB-5Z12nmRNhYGfvqty2YYwb38gwm7pA9J-HVzxTHNPjunZ2uLWLHzgwLj5A/tqFikf2O5pvwpjng9QR7ZqI8JFw7lebvuRFqpAC4CwQ",
                        "filename": "166 Drop Box Location.jpg",
                        "size": 1605665,
                        "type": "image/jpeg",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/Gmz9P5Rl9FywcX4Ron0A_A/Aq1CMhtBgqAMjWxrXFeAnyqQQtt7IvCGy1Hgw2IbvDFAY81LFsvyLwvLGvkIV_FwrX8twg8RblY-dYHDYquoX_dfYAHRQocP2yzWEyjDTnLVnYa4iXz29Yh355C1SOjibiBL0cpiDI4QgJ1skCteAg/p-OgrOaa9_X7G3K_t4VKNBhTU5rByxWLyAPDlAsog0Q",
                                "width": 48,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/w7fAxeQXuckXTYm-CTIuvw/2fxrfC2DcPGFkc48t91n1tTs59ErhtwOswUSuNLVgYE7YZuZ-Nf2wQSfjH62iVX9ORyiK_218yU-trtLX9J1sDPTWkKV_P_4Ba1pXRfff7mQ0mrJ9MxDhopbm3RL_cllCrItU8WI91ZPrCdvF1rtdA/UJPfL7__wnm5ZerxaOiXd_e_hnJVboxeJ2NFF9Z3B34",
                                "width": 683,
                                "height": 512
                            },
                            "full": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/qYohOapwy1ImtkXUciYycg/G8ZneqNo6S1cnoPQ_RlHi3JJFWjh9sKdDCO3N4uH89HFy7HCVctlc8YDvAgr-Iy74Gzt_zpyMHDJMAQ0mEyjRWLMGyycPB45h4coxHJjr4J2d0oC_uomcFpjUheuzbAg97a_86QzZCpakSWyTj_cYA/Xp-ifif4YL3LiU0jDXF1RBEWcO_qVNDptd16i1i0kRk",
                                "width": 3000,
                                "height": 2250
                            }
                        }
                    },
                    {
                        "id": "att6uvXSRO5ESY5Zm",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/KKLDDzmxgOkBpDPbQ2Po7Q/7CbpVI45sRY3lRbaHq4R0Mhm9YwApzQKeDqs-7Z0XFKFUr9HRMos1WIbZUu4CW3uC4jehAHQ68Ps29b57hxSg2rJHxUiBgy2j4cEOwCh8tXX16ygWkjBITkNFLjGyKRCxD2tkRiXs8Bt8kgWF0qSQoMtsjeE_gFPActPFqqjNAQ/bwBQDHiooE3y0nEgVGE8qN_-UEoLdLG7u0XasJJlvJY",
                        "filename": "166 Vue Issaquah.pages.pdf",
                        "size": 295801,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/jBfayJmV6W_aSA7KCp-_5g/QoDtMsHLpCt_ldRMO1CzacbeHpdc5Z9zDT6-U5jU58XP9ByG8zAr4ab1Axfe22dsk4ROlBfLnDYbb1yb7DIGjkz9kvbIRNr8f7PNeT8FObNChndJFb4g2KNwvJLF6yTluUx9qjGgZv-b370pAFADEg/wczxL7yb5BPKpz4nUHvzFkhXhDcTVBwHsfG2QaZZeYg",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/I_QtofvnVxhzfwDK4lMeqQ/RDPd1BRu4ZQk50CP4dZxVqkYsE3vk6sYiElhEMrgZ-ThJbMcygtoBk6Ds2mfxLbMz4pqR5iPoKzGAqdiT8glvbkkk7P7pS4xIGavBDf8sTBZfUZtAvnxxkTd4oNleAecE5U7UDtU_lCO15jdrY-qnA/GuAVcT73zgFILEVzegNswX4g1QlMu9nMQxc4iNpOOV0",
                                "width": 512,
                                "height": 663
                            }
                        }
                    }
                ],
                "Site Address": "906 NE Lilac St, Issaquah, WA 98029",
                "Google Maps": "https://maps.app.goo.gl/VrTNePZbxpi9C38J6",
                "Active": true,
                "Manual sort": "aT"
            }
        },
        {
            "id": "recgEZSS6jGMWl41V",
            "createdTime": "2025-05-15T22:31:50.000Z",
            "fields": {
                "Name": "02 - Copper Gate Apartments",
                "Route": [
                    "Perm. Onsite"
                ],
                "PMC": "April Housing",
                "Status": [
                    "Temporary Onsite"
                ],
                "AOG Property Code": "02",
                "Calls": [
                    "recWZ80KxWt8tcKa5",
                    "reczET0sPUaeaNiNB",
                    "recxSCBHEXvcqJosw",
                    "recGUnQtsKzR28VwV",
                    "recCI4pZEj688dnxE",
                    "reckfoMK6FclHAz9r",
                    "rec9LbHdJY7XAGW7l",
                    "recz6zFvDChV5XAaY",
                    "recYYv7UlRVT88txl",
                    "rech3yaSBqTLmOP4X",
                    "rec4anfG4dgDPs7Si",
                    "rec9Eelu73SUumdXZ",
                    "reclU0msNqkpO8n6Y",
                    "reco3sKGURWInFljw",
                    "recNzjOc0bkbWqSzE",
                    "recdLWMzPgtqUUHBO",
                    "recLA8TCFAIOdx2Oi",
                    "recn2peT8tf1mpZtJ",
                    "recERcBvd1rVzRmDB",
                    "recNy3uygRLgmot45",
                    "recZzuVE6yIJZfxKj",
                    "recXGp1ImvdhcsNNw",
                    "rec5HTmNBcPt2FFAg",
                    "reckaP91uCeQuxb9K",
                    "recuktiBEg5HAbtke",
                    "recw5WmxqWHrTL9WC",
                    "recREGRF9fyJMyYbL",
                    "reczAMpmZa4z6CxOQ",
                    "rec9MpF3wEalBdOJv",
                    "recetPmigdaAXiXXV",
                    "recSAyqGXNCwuRBBg",
                    "rece0C3tEHh1GCIpd",
                    "recfsXNzOcoiFXhT2",
                    "reci7ydGKDzOwGsFa",
                    "recn4ArbquHmLEB22",
                    "recXuc4rzXWVG3XKu",
                    "rec3MCTCgnqqyH8Da",
                    "reckCL8zMN6eMmcC0",
                    "rec6sFo7AmSqNdBtV",
                    "recBxfNNskfQ8K0zC",
                    "rec2bKHsD4EU4tWWZ",
                    "recHq3Qf2xIQYa3vH",
                    "rec0ddzN8Oiw1XJGv",
                    "recBMiQ9KqMCbN2LW",
                    "rec0mzUbb2siJbks9",
                    "reclaLcTlfaortNif",
                    "reczxJe2ag08oEAhW",
                    "reczcN7GE4ns2Cftm",
                    "rec5ef4ejmr85zwsg",
                    "recG0pT06Jgzq8OPM",
                    "recK7mObeaBYcmCAu",
                    "recEkgl4YcEqmOgrw",
                    "recbunyzeAhVVUYJd",
                    "recwJslUCTWo4oVB6",
                    "recPQrlxZB1ypFkNC",
                    "recAwuCKyYwe2gJNS",
                    "recgwmGVya4CkemTh"
                ],
                "Site Name": "Copper Gate Apartments",
                "Post Orders": [
                    {
                        "id": "att51CxekhJ4wXh2V",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/QJd9xIfWLOcRQu7UoRYP9A/aIIVYyUEYU4QsxgjWViGr9QTBDLdURLYdL7apo9i9Ki0ARZSXNTlmlSx3mrc_7tnt8I82dj0uDREJpERvXPiM9CPM9KuTMHwh4WDa2GIN5g364EeBjkppN9YMeRtTntZCPAMmb-ZiFZebZvAe6SF2Ws-RiQATNG1E4BJIOet1Kmev0okjsffc_-DEzs5lhjZ/nWeqB7PhaLdhV4B_UR77lPh8W38_UvBZzw6my5Up69M",
                        "filename": "02 Copper Gate Apartments.pdf",
                        "size": 33098,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/uHJlbx7io3ehiatwMMPViQ/T6Vj-QS9hPfwC3e5Z-xAV5-o2SDlsVCpWn0M33KVJTUl4NuxIZjY8ndQgI2kxYm5OAETrGNvwVOgh9AYR6ZXbDGN3AssrBsvXh4un71U6G3fVoeHhNr6IKeldtREiM3-GaIp4aXqneoecAQOaUZMWA/_REMbcdrNosnwtJ8fbmEhe0tHrfXZSQcUUloOy0nihI",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/gdMrouOTUpVpUM_tpCyz2Q/KWORb24lZu-nIL4zx1MRlVR_ROh5yCumrA5RJfIKi2RqCgmFaKemaIgTK7cGhhC9F2cMHP8TP-Q6QdqwWk_GQpJc28dvbjDTveuYRMg57Zu0whYM20VG9GD470EO-IrQn-YuCMiZOhFtiQgLViPpDQ/J758QTbwISj5YaEnQtHmF62s8BZ1Gbl4eQm1rVM3Oj8",
                                "width": 512,
                                "height": 663
                            }
                        }
                    }
                ],
                "Site Address": "4750 Auburn Wy N, Auburn, WA 98002",
                "Google Maps": "https://g.co/kgs/k2ncE71",
                "Fast Field Username": "TBD",
                "Fast Field Password": "TBD",
                "Active": true,
                "Assigned Job Role": [
                    "recwgob2D2fBquSck"
                ],
                "Manual sort": "b0O"
            }
        },
        {
            "id": "recgGOaYuthOrXBEj",
            "createdTime": "2019-10-01T19:05:14.000Z",
            "fields": {
                "Name": "162 - Sandpiper East Apts.",
                "Route": [
                    "South Route"
                ],
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "162",
                "Calls": [
                    "recsem2YfCdPsQXqA"
                ],
                "Site Name": "Sandpiper East Apts.",
                "Manual sort": "aP"
            }
        },
        {
            "id": "recgl7a1Rg92SAwts",
            "createdTime": "2021-12-09T00:47:01.000Z",
            "fields": {
                "Name": "220  - Avalon Belltown Towers",
                "Route": [
                    "Perm. Onsite"
                ],
                "PMC": "Avalon",
                "Status": [
                    "Perm. Onsite"
                ],
                "AOG Property Code": "220 ",
                "Calls": [
                    "recV8Nvbr6nspFUc4",
                    "recUBuxlOlaGadopc",
                    "recmeNbVrFYjhMxPm",
                    "rec2v0gcPwIeUn0mF",
                    "recV9ibkXh67Wqa7U",
                    "recSD7ikoquptQVYQ",
                    "rec75AlvLah1340ef",
                    "rec2bNhmhFKHo7Z3u",
                    "rec7OA5viA1Sorn27"
                ],
                "Site Name": "Avalon Belltown Towers",
                "Post Orders": [
                    {
                        "id": "attQP1a5UXKasHWe8",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/pcwWA70hfY0b1VXfoBOjNw/0mZqBjVeKWoeusW9hn9K-3VCV8lj-jEZwlDChSiVSJDpV6l9laJNLMFqn8yzPFf6v71Ga3m8-5pBfpB-OS4AMs5hpu9BVXExKObFWUVdvptutkYi5ep_LcGk7oHDnY-evnxlRIJvFwtS3DvZU8_Y5R-J83dqgJhpYbDb7DYyiznnNdRZU7R-YZyp_U2244qI/9MWniqqcs1wTaJsuJBW_nnxP-MA5UxPBBa5XJ0Etql0",
                        "filename": "220 Belltown Towers- PAGE NINE.pdf",
                        "size": 28050,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/wYoHvF2xGLjBH0nrfINw0Q/a-yVKF2zYOfsE7OLCn35eeT1w80LwRITC_spSktECdNN02TIR7MWAuOn0nkFTsTlDJoWsrhJmupFeam9MDJQ1radGSKjP94KiWqGnKZHgXTGZI4QZuz7JrBs4x7QBNYwKusls395Pb_06MIBKP_cXA/oiW8gx3mBEwfF2kkzcjsoYOwqbkWx9-JGiVy_SekrlM",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/K6LatVO5unf0Lslbdd4owA/AhYUYed_I-YeK3YhWs1mpAu5JFSie3uyZ8Ve0Yt3R85MHstOXw2QLaNy96MDxhaEvSs6E0l-leJiyWyPfe-XmRlsyuaifGIQR9IzcMfRFoWmJerhAuIzxY8HvnUV3oSmQ3ocwPi9n1N8GEPq_A8RRg/exVfH_Ors4R3peyp6jh4vK-AEGsr3gAb3DtHcK9qgqM",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "att6MzMNMLeHCPF1y",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/7hQB8eamhoT9Fh-2JrGopQ/UzbHjBDDRUndPU0NCDxj3OKqGqN_QIjcLb_qxP80fInj3PWoxIVnre654HrxwfVI4dA4UggcQmlp8BUrqKbfV-RN_qBu57TGodqK3EuyOGfX8EuV68fn0XbjRXypJdbs_MieTwbAQaW_7_WvIku-HbmVnBs88cvHZ-Tgla2RtjFKn8rbthSUHrxMhqiW-jzZ/73Fuh1AYfiNNxIZFE6mtt6PCB_RYmymNLcvi0XbNp88",
                        "filename": "220 Belltown Towers- PAGE EIGHT.pdf",
                        "size": 27438,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/4JX2oH74tFYOO4hKFpTTOw/4uaeqOB1_j9gmA3ebXEW24E9fNGt5AQ4qf2wT3YXAQghrH9FaSND53MgGgMSj8eCgFPhV_pCHnPUyx8gkSZ9gtq2yc7LScs44jfQI-I6Pnc_mxZP5fJRbHNvZ12RvHT1VE1H6iltRN9Gf-dPlYOc8g/BFhiz5EoqUqTNIToukz2EzHuxtV4Uuc_cBL5YRr2PbA",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/M9XruDBHWFWGKP36UNaf_A/XOukes2u7D-YVUFbaEomf9CO6TQ6Uw6zsuIEm051-Wcj6D8U1FaGumN2v8HYVVjy2v7l1ZgetSLxehfNgA6_ybtg87CQEfro1U3XdRuxzHnoUpTATYNTQztw_KJlm4Sm0pSO3AyrgoXmuhA8hNmxaQ/WGAMTV6JgbhtHBWYPpoSlQxEg2wg-rL1Guo6z-IPvoM",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "attsDCzY9a0TJkZUe",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/p4XqlKlB1tTL2d1lGqaX6Q/zs9zWSOx6lWcwxCDcq4sRSHQp4Jsm3EwfbglqiCJRAKPkMcwcCFl2xkFFypaKb4SqvmalRNbBblluv-NhUh5en7s7Zius20DORPOUNufQlfhErQZm3m2AHnI67UDYVOfGHc_O7ucUZNAkIj-uZ91fY3dV9MI08Bo6FPG8eBARDN15xLAhknYibHk3FpQ_fAG/T8C1BIXBV5RmuJHZfonqH3nCo4B1SQK_Nh4uBzfves8",
                        "filename": "220 Belltown Towers- page SEVEN.pdf",
                        "size": 43136,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/6S6YzdGVScHjEHKLWLhNrw/az2YlHUR8ZGLFMX7NKLUOBg1CwBL5sVzm8PFJEg4JWuSU2aZSxNd77aAFd_b97OEWcYyMd0dBC-I21a7BsHu40EPv2fgVTpdaC87PxxdXjPRFMLoqKskkoLPE8bJRVsg1RkKkVAAJbk6hv3aGIW7kw/cARApcAh31o6EB2riaT_P8FyfkJXq5jBGw7Dimr_Ps4",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/c8xvRlMJnsJvYaGq9VdSTA/MIBu8PxcnfrkQlCUlgXYKTcAjsy0uQOwL8gdUGjmGKyyr0BLVZ3Gu7fInZB87odtgtsCg_1vQHJXHggtcK5dg9gxxm1S8KFhZf2iXAfhzp8p3hZqXPZb6BdsjiPSUwphuavbD8mC746seJoH12DMgw/if8H112lI0nuODr3_eDJmBNH_0BVTawSN2l1FjoLgkk",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "att5enGOxYHxqvH9e",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/qHTCIiQXyv1hRxuPkl-n3g/huw8dpfUjdh9C2ZALKQQ4iQox6rAU0XjyFU_XovgdSQcQwWFUkEUB2HCfog0n_748Bib8Qupx-HQ-ewk7bTqxzedrq5CWOprDJJ7DSk2M3mMPQD5g-EuWdCeB6GUZ-yXcoQynLQ_mnUF9QwoBxmnrabVX9F3W1ozC4UCmPGkFtQ1YH50Xemt2hiwmj5JaTo3/kZVFS_FwjNrgG43uaKbdNy3monFKCR7yNllQThfqN68",
                        "filename": "220 Belltown Towers- PAGE SIX pdf.pdf",
                        "size": 44200,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/kBiu48pg-QMLiVqOG-PM0w/WBXcqpaS7ar5_q02K3lgR6VczepK5G7ZTwwj7hxCx9qjlZFlmSEdf4r6YWNB3qEnFJDp5OnPrIL9ggQ3VUWwB4fcrWhAoOs84qVhtJYAkuGXJikwGpU3hDE3l5-YqGNuUZAV2eKfYm5YxdqYsZ-9uA/Wxv6hRwgTJGuNg7khc9-9n8p97Bs2txrUC-kF6PrOuo",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/BWgVUnmxTksnevdbBg98NQ/rU1UsL__rv-KEHdzt5Y589FRJObNlrJWdmbceJKnahhLHh43C4G59_g4Usqi0nsg-_ktg8jxboBnDEmcCk_cUDrWkr4-JH2xgpKmaodd3irECWwLddnw9Vr-6ZC-U6jWR_TkF93Ks-o7XlU0pMGrqA/Trma0ybi6ITnLLUoHEZfkb4oku-yFbeLr1GMwmPWy_s",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "atts9EGdi6YBF5nkd",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/q21A2LhrdUGO-c2sdmPdZg/u3pELH-7Jrm9iZK5Op3TAhSDJ4Me52yjToPbBFn_dewe7Cyamdv4jWhGoS_qUHDhf5NHTeWnrvJAceioop_Z6RdKOwmCGxWCuparUuHHyuj9tn1Ih_-Eht1yaBbp_Pd-PNd-EeSHn9Mvh60tdDR4GtYPqvvMayY7VObU_M-uZXwjmRHDDmXfj1QKPQZVS74I/maeuoQThsHzTic_w4Jo6gT7P32xBhzgqdRMTQ45OI34",
                        "filename": "220 Belltown Towers- PAGE FIVE.pdf",
                        "size": 24169,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/CwMlm50VfH2zGDX7jo-OqA/JrpkGk8SKvLyYmNK9qV7HPJn7mZCafIc67L2FSDAQmvmKc9ObezT7TZmcDvoTGx4B10FgZDwUTCefwc_Kke2hboYmB3taayieRFju1Se2YB4Fn6U-yP-J6JSfYOpjBxWPJhyRGtTu6kBaj9ZMqhDeA/jeyb4L4qGRexTsA2c2hRdoA202XxAq0oh7_zWLQq1Ic",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/KbwDmKHOplkNTbrRpFtE0g/nGe0G74rZUSea3-6d9YAuwhMaJaAlzyvxiCw72SurC7GU2F-DKqe8eHF5PlZkOdfcVIu04jfVwSp1QWBi1G_THFZmrB8D4MWSKr64sHlnCcd7_U3TV5Dda30cffbBjevOJ5RpxHFplYErVe8f9K1EA/FE44gPMxGKsl-VnnA5TO4w-4K6KFnMVsMXFTBCRuegU",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "attyu9xbmQK0DCOC6",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/vfhFWswsRiJt_xOJpsxgoA/dSJVRV6-Tk1cFN22Wgun9mRKJR20k3JhbjJRHVIoEdcluYtsbygQWkBvZS-0_rBpAbT_5OIb2ZWH03KQ_F_uYBs_9Jzzq2zAorUHTTTMZEVmYNaDp3APEcMA93Ix1Ge9NTUG-oxsvXgguV0ykndDRjJ5xs9MZe6cFIswTw7v1tQ1LrJIK4idKV6gADHPW3eF/3A28lBY5r7ThD4dFre3c6jx8LOb2S1IS14kdctmEzDc",
                        "filename": "220 Belltown Towers - PAGE FOUR.pdf",
                        "size": 27913,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/Z-Mc4aHdIzXunzSwhqV9NA/zP_TH5RL351bLuzWQEMkhguriIIXVK942LFW7kD_6PpKsqbLSLGV-rEtV0a6uGZlsjUyyc6NnoXIObJXU0Vgj5L8nmOWEZRqryv2zas-J5pLJQa_QoqlsvdbcLmSl1Clc9FRQHeeXY_V0aoxf5Vfvg/LuwRqqP4b60YmAVOgepV1w3HDJ9zi1IW63AyEm_hUgA",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/zrSDtyQySZvaG33li2EfKg/QeaGG8yAwZFVCfI3mq6h6m0fmwzIKohMrh8tva6O4wT0M-2lclg2b7NrZPnpGAV-HPdss9XsIsRznC2eNzUi0RPVVGhe141XAO6keZ79eaGQKEMFiIna7nbK50au2DvJpyemdnhTIV1J0eTLEMTd2A/gcrDc6LAy0ELu6oz6UrAPw0yxqGuu-cJmI6zHHVYnB4",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "attT0fzQbeCvzJaJ9",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/epPDchVpWkCMNtDhn_iMPg/T-ib2oTu1y8mhvkT1KRhKsXao6BbqxfbxPX6wPrYJRP-ko_NKNu2RmwBsOt6XyfXZQBRKqnzP1U6vYVbwJSc-WEtGsu54xFOy6Ex9HpoGo3Q8Wkk0W48M6U2oG9CT1J1SpsghZXKJ6G8If9VXPCqyUEJOZRMVyeP3kWTMTRvSqOHDYIDnDr1ul_6u5IKLo2C/0grnGB7yag48oM5gZKXIZiN6Zx948sIS22himl4_tQs",
                        "filename": "220 Belltown Towers - PAGE THREE.pdf",
                        "size": 26967,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/eGXQG4CDnXE_j-1SFfSKdw/Jt5-T3VDuCvtvapKzOnfJonckl__VQPrH92nuVsmy2Q4MAOdmAlKtCk6Qz2tV75cQnBTsLNZ-EtB9e9toFH17h_RqX7CHydoaiYgRFDX74ttYV7u8rYSuZTssNvA9NaBZty-LI-4xD6jTiq8djHp7A/AuX8Bb_UT0A7Jsm_kiDz1uHkRLqY6BhpH75Zk275Ico",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/DUQQsHEpXxW0Cj4N1JCU_Q/dcaDmZzteFqClyPEEVEw9Ivn1IHsCDvFOLnkd8mEI4FTLJYA3Waso_azAM_-nMqe-BASnFuW8GRrSXj_7iJvW-6SOMAR5Frv7vpXlg4ddsM4r23tsSYf8z8_to2D3vUu-Ecx1vJpbOwBS9MIUhIllA/VoQxrn6MJebDR37-Z-npPhakUJgsV1AVdSnSQ-RkOVQ",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "attc8KrisA4XemiHX",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/prlfsyEaEIBVwguXfErpgw/e_Cjk9erpkvLBxdEaxs0eHg778AlQOIVETfd1KihCTjwoyj0AIuJDdYmz0ZP2MJrMNBEqwdcMQM2VPC5ZamrrUBBpOpEYXNoXoIrQApPsyGztbK9TX8zAgOvlSjfGzmDTnpBI6Gaim0fze65M0EMnAyuzpmk4Ar-aEwAQpMRztAFuyKa0g-KabgEfoVnzwhd/W6aoboQWu3VOX4GIzT7hHwc_gtPv1dpNUcrCcdc9mJc",
                        "filename": "220 Belltown Towers - PAGE TWO .pdf",
                        "size": 328331,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/cR2xqcVyJ8CYsdS2jXRhmQ/mMSiiJzt4gMiQz9P8VpwoMtWdKxNVwoO4tKKkgSiyLSECpnQLkPwFZBAqKc61ZlZbFM30sV7M2eV0sxcQgkS298F_IQG8YOrT4LSXXAADcaG3ZnVYAHgIjqmBLcKmDMWDXCdK4CFevQE06rmP1KLhA/iy9ooGmfFPeGgQLuGyBRYGllcYcgnA0dEWcg08qejfM",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/shpy4ZKtN7mWALe0lwdEIg/NEKT9-mG3P0dqTDduLq1io2kUWISx74HhsXyi5xsFCo6PDzhkWIQ8nb1n2csSrXSShezuSMZzJULompnjyfiWpXlSCmluj6L9eQjbYV3uZpVFMiU5Jq3QV30C-FWeba0ghiK0ym7hLR5H_LYc0U-bw/7GW9vVIq-ltgRaSSXL4s3ED3NJ0i0GVXAUNoU23dHjc",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "att9NyFr82lH3HhJz",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/HV3W2AApc10lUyJxjy2ZGA/O4Yn1YGHGBtMpWmYi6uyZf69ALgBHKbGp8K1QJQoWxGDsQBysf9QXk37q47lsR3CiId3GV01qsk3fIY4_9gMqsJZ1ASvfLaKkN5vZq7GwypUdnsfeHtdCrWOPeDfRieHpFUlcA7uOApDFEco-_LhNzXxvT1R4oQsW2qA-vyxXYk/oyQDJ2F10KyB95w9S-iHHs0I1I8q8w8hDsjRJ_4iTiw",
                        "filename": "220 Belltown Towers.pdf",
                        "size": 421110,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/WuQHo-e0bGEW78dQtR0wpA/0IqZ9WsPeDt5eJaUA3m2XfPDzOrwQBsbh_kYof42qqefiUp9Ixut6VajJ1SDvZ4mO1NgJZq5TiAQXZCTLuFX_gZkJmULvXmzwIYEWjTB8WtfD_JHAESd8VuS4xogek_d2GUBTA8hwilLIfNn9O4DAw/KblF9dIie6obEnP5rfXKfg1Oop6mnCklQPM-0uSI5mI",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/z3jCJ6Ztxe2gpCVMxpjwQg/7at8HN3jovEMOICEbDkIj5JSRTLgPfyisNpNJrqoLC9CB8FJe2o84WCqWAhyE3dVa0qDPuFsJ2rNBdnJust2m5huOfstUSx7-8e1ILM_lUaweq7Aw3wiU2WokWxC7GYRTSX1w2EAmI8prdPfSu9eDw/-Gc8REvLqaQCDhrRPD90JpFrVXN3aPh08UNSpSIshp8",
                                "width": 512,
                                "height": 663
                            }
                        }
                    }
                ],
                "Sample Report": [
                    {
                        "id": "attGmQ1iJpd7iXrCr",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/VjN4vDKVZvpfo_VuSrsmGA/phjppzqVdbViXPn1YCYOWf31BaPyqwWcODD_4DOHJRUzfQbiTaCnWktwovnI4K08kVIWuGYWMmPC1grNbUgSj2ROW8kgkbqvTkj_xVhlhggiXlHwntRKg17YHAjvegOfcVadG3Pe85uOARlmdFXVr8DkR5NYyoD7gudGIG44ZBg/vIB9vaS-CP9tlKtSF60l4xPO4041WGfJlXTSux5v_Ys",
                        "filename": "2022-10-17 10.11.14.pdf",
                        "size": 5407300,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/hzqbaaip9_CA4P-cnQx5vg/93MyGttarRp6jzRLMP1dNWZ2x9xQJkK565zAz7d4eOGNAsTN5dp2eu7G6lswdrJfUNgF1v60DPTP1zGFdtJsOvEL8jb4MwEQoVopi_mwVSTgv9RwRX5gFtJOr3xMC0fACgZ4QRuPv6iNdROWp6CP5A/bCBb1fTE4CIRYaIeuQUFDHFuq4mi1TQQTkvOLB5JJfQ",
                                "width": 25,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/s_S1-y2W3V2KkXMlLcwgsg/P4_czyz4EteyhAyQOMdGVytiREc8OiHAzkjdyhYG1FvLsLslO0olYbS5Fubp8zWKOFXieJcXenEpHmXsLM2UrOiPQz63zbaf1SW8uOFOclVIKqLUzte4mrL6G42dbqZHzLl_lMWtYMl6SQtGadOfGg/92X7ri-qhffruELFTP5M287gq-N_TmbmZGFRl2TgpO0",
                                "width": 362,
                                "height": 512
                            }
                        }
                    },
                    {
                        "id": "attbMu3rvhgJlQkvl",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/61_4B0QFCRCCkROv9-eoxw/5fGgREwCggwSh-BRsGCmCgxRLSw0AnYecqgaYwzU26oFYYECrP9cnvdPG0shnt9Z7gXBasZKznb5whlr_8CudihGFhtkIjKuO5o-P5mxLHkTxbmxXcHEAdiuf22ev39LcKg_u-jniD_AK8vmzP2fDfHjOU8UJpb3fxLRSY6KVO0/wkEFQ4OK4fv0N0GSCMkuM-Ez_3exg0KRPHh9AbMYpag",
                        "filename": "2023-12-22 23.03.40.pdf",
                        "size": 1001521,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/Pr__dJ7aZPtcfapyx1ehhw/HH7J2YcztLeCbXEEbTjgh6pwnhdvg7qFsC4xUxlJWJgZKuAypCvCmtep0j4vv8v4T9Zv09JC-IQTXqeEQUd_x-C6Cpszjfm-Uc3iwrkvmJNrDbb0BB8-PKw6DODrH4c8n9M5yC400apfRUAMlT8Rkg/pXWdh_Bxr5F6u7zbG5CCTZtEQDWdmejqMfReYusMfVo",
                                "width": 25,
                                "height": 35
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/b-0Xcjvvl0-aj4q9wUjPgA/9xMhsq9w0QTnmJTA1DPWoM7kTlSPJ9S3IVpcAgRb-HIdUXPAFpluQNbyAyXL2Fkw85MikpGL6c8kbhm34jmUqFJNuVtWN-Ap4dq9jGnAJKKLacR6BRzfGyqvcxrQQxaTv_nIdiLUN68YAYZ8jofW7w/F1NUshApwxTxsQKme0aZbXdBwP3SEYA0OQsWG2X07Jk",
                                "width": 512,
                                "height": 725
                            }
                        }
                    }
                ],
                "Site Address": "210 Wall St, Seattle, WA 98121",
                "Google Maps": "https://maps.app.goo.gl/UHTHGxPZygKgJMgXA",
                "Fast Field Username": "220@aogsecurity.com",
                "Fast Field Password": "Guard2023",
                "Active": true,
                "Assigned Job Role": [
                    "reckWXZABBoVpVDKW"
                ],
                "Manual sort": "b03"
            }
        },
        {
            "id": "rechLSdfgePfYZ1z9",
            "createdTime": "2019-10-01T19:05:14.000Z",
            "fields": {
                "Name": "193 - Montebello",
                "Route": [
                    "NE Route"
                ],
                "PMC": "Essex",
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "193",
                "Calls": [
                    "rec6IBlKZNCHjCXiD",
                    "recYCHWZZ9r0y2qgN",
                    "recH4t1m7ibjI8LpH",
                    "recDksrC8g8SEF6cg",
                    "recJbSQs8kkOYiQXW"
                ],
                "Tagging Vehicles": [
                    "recDOsI4RAJJFfQY7",
                    "recj6h7E04bVLo5fu",
                    "recQR1LWM7P9qboP3",
                    "recDRvP8YovJGNUwF",
                    "reciiReRiBpXhYfon",
                    "recYyPNzvuwHQEOot",
                    "rec1yB8YiR5HfPJaD",
                    "rec6aBvlfheAWv7ba",
                    "recc0kAnC0pM5HrSA",
                    "recSJdkOg8JxaC6ak",
                    "recYwnMcvt8YUyh0t",
                    "recchyLGgtjc5Ni2w",
                    "recfPfDd6yAlUH9OK",
                    "rectaT0tuItJpdQbV",
                    "recGC8Tso4pfIeUg7",
                    "recEZasiQwwEmYL6K",
                    "recnFRyAtK97ZUMZI",
                    "reczTUJWT7vJUe7Za",
                    "recpHjgJKnn18hXWC",
                    "reccwvSDQAeq2ijiw",
                    "receGJ8v2U1DjHHSS",
                    "recynOw6qGfh1bXmQ",
                    "rechZDtEcqI2ARZXc",
                    "recTvye9eWvZY4E77",
                    "rec6TVJHXSKyboX7k",
                    "recqbMfxyAEBwoJmo",
                    "recIe5gEl9RYQcpY2",
                    "recmhLLA3zj0H68Ca",
                    "recx9pnfZISaz8TG8",
                    "recSkMdniYQdiW77D",
                    "recIIwps6q2jokZ7T",
                    "rec6huLW7bXkD0nBS",
                    "recXwc3V0UHQ7F33P",
                    "rec41J9JXdZfgC7Po",
                    "recCzwHMOemBFFn8I",
                    "reclTLZnVGa8SizdC",
                    "recKsmDRWKmDRnmR8",
                    "rectMJ76OK2gAHS9S",
                    "recvaUJDB48nacvmV",
                    "reconXpsDQ0EObLPy",
                    "recG6GznyscaUXyA7",
                    "reciL8PVWX676b8Q1",
                    "reckIdPykXk5tlaKI",
                    "recNgUjDBR3HMiMPq",
                    "recopVuPKNN6yEFxf",
                    "rec6xd8IBQRg7Dcov",
                    "recCQdG1sb30y9vEd",
                    "recqazDAfRXCfKPrt",
                    "reclRhNHnKk5PlZ4u",
                    "recv4aIBqvpNEGYw3",
                    "recLZu3tQz12Lh1pv",
                    "recPxH13YfiXjaCJn",
                    "recZ2JjahkcZgCZGn",
                    "recCCvwDp6IyVRgNQ",
                    "recprZTaSV8qcgOQA",
                    "recimWWfyj0N9b2Mr",
                    "recnbomLqstQco9u4",
                    "recUQzPETNEJO0Gw6",
                    "recn1MxDVmTEvawOp",
                    "reclhzaUaKLjJe6cO",
                    "recD5iIVLNjWOHCiA",
                    "recO9ArWy27iJfQXC",
                    "recYkZ0kohVuthqXr",
                    "reczqjg05zkqq78cX",
                    "recgkSV932pWpqbdF",
                    "recuVh8KvWgpoVpt8",
                    "recHbpuMwFFJtTr1M",
                    "recldqKSHKgkqMAXZ",
                    "recKCWmAQxve1I6W3",
                    "recQeFcRaUarYWsFM",
                    "recDh0ypLxyugkYFp",
                    "recptPKqHKFnlyAER",
                    "recC2ixyOCsPD5J95",
                    "recDqs5vOht5JBy7g",
                    "rec55RihXAxq44Rr9",
                    "rec2ERy2YC7dsEzpD",
                    "recPSjHUopTBUx03q",
                    "recdCERkTippWQqbE",
                    "recvn0ygule7XaM8S",
                    "recuIjTQ4BnAtPTzY",
                    "receMuzGxvViyAUWx",
                    "rec8Kv7o1OKw9rJAw",
                    "recg7ElERkwrwQV9u",
                    "recJWh7T6mlVBE0ui",
                    "reclTeAtCmbDRld8x",
                    "recxbZEabzswQJCMy",
                    "recHnHJRPhXDRy0L4",
                    "recyTBVUg5658cMcz",
                    "recjPHpCOyBMHxs1t",
                    "rechrGQwcCCuH6w7j",
                    "recdnrxhGAYA930te",
                    "recqWkMH3ESFNaPxk",
                    "recjVBpLSAg3ugWUa",
                    "rec3XolPtict4YcVT",
                    "recEOW2rahrTDLNUq"
                ],
                "Site Name": "Montebello",
                "Calls copy": [
                    "rec40gtNX7VAS8Z4d",
                    "recpm8SwnlSFwWIQM",
                    "recrk7CLK6Q1SdMcD",
                    "recj5zJCzVxqPDqMR",
                    "rec2I4l0XrNNajk7H"
                ],
                "Property Updates": [
                    "rec2KFN9UwkwrnqGb"
                ],
                "Post Orders": [
                    {
                        "id": "attUUXajUB51EOat1",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/md3E97kf-B8WJd0jd8sv-w/rlLwig7QQn3JB8O0Y2XQ68eSr2ERipuedoseBFHqBqscHEfNUT72wOcMh5SElF9i_uZ4cNl12wBSPLbdDdghjexGHb_KN3cdK-_0fETjutIiXgKDDPF3julmFZ_eAPy9VqMydc2a8-jQsv6mTvNBDlFOstn5ohQVO8_17Kz--Pw/0y5wB3_JFFWIWOqAFUcXUxrVbQMxnPSyoGqNbCg2ZpM",
                        "filename": "193 Map.pdf",
                        "size": 7889064,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/LM7t5mS76ka71OUa29CpCQ/j0Il7Hc1jZlPVB-AqR5qPJqu39s_lJqy9zzcHMZ3ItNaBjG_335gSIMscSLEsBXTVmwxd55Og6cwXQDGh-Y89ZXd0HrbwdFKFuolXAaXp6Rw-_VLZdSdSgUjxGRQU2Ck0CvCjdteTNoxFF78o43BrA/gHm2Im14mNsiId6CpPJweJh4qYE__nJpRSKRj7ES_yk",
                                "width": 47,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/oL78MHPCBbvejVkdmMHVog/gZ6giBhxKoMZV6rq_cCEdkBNtjmqYeDxXkd-q8Vm4QVDSHCp-u6ddYtvyP3RjE-1dg4-TvmKNb1FUh9pCoZWc9uT9prUI159MqB9W2lmTgQWkV2XLPGxFYhYbKbfjANWVyKOcgw3wXJcf65iT56drw/Z1F1XKlb8DGMrU4PXhSQFTc74kDQJL34RAvZrYGStdE",
                                "width": 663,
                                "height": 512
                            }
                        }
                    },
                    {
                        "id": "attkIadjxHMHvKAo0",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/DFkQXcSeOxe0DM8cpqOQxg/cK_9NqNqrLXoGtvGTRl1bBJV3Xb8C7QWL97RdoD359Fz907R8_9EfWNLobj6pz0xxTcBacPUjA69ORyJhBXISqxLn94vcR61njc5rK1gN7hE7WZEKcLmz_kfiposkAAL-Oil4z8ITfy4HnQEGvKxMVASSaFgAS9R8Hpo8MeSnjc7lRdntrCR4ofI_L61JLi1/Yt4bdpnzJBykk5ZMXTu2CHDeS6olDpctxoO3cxt5Cx8",
                        "filename": "193 - Montebello Lock Up Guide - 06-11-2025.pdf",
                        "size": 1014898,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/IciI-3QQN1bvqmy1L9lDTQ/Ren1ZPRbxNuXLl0dPXLfBoiTDhG8z0YZ-EGVovElnKJ6OySXd15e7R-PKrLVBU7SHzHFNmQZKX2bz1VjiQU8qd8V3arRvC8IF1LLmXF0fW8yPqmss2lD4YQzKlOx_fip9PCuJvZM942qMuFxzAoCDA/Fa9WO1iyzZY1JHXzCyRPLTx3YvnHcvbnqzHfbCGh2rE",
                                "width": 25,
                                "height": 35
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/m3bAEI5BvzZFsQeglK2dOQ/78Zdfin1LYPzQ16NMbCzWD1uqixT5eYj1o8yaUHmhuM0tqz3R0khpnC1fkSCq-fz5JT9g_RBfjz0VpzcWK28wJN3FHW628Y8MQf7T3MsIBp9wnPvTfdFGcFGAF7m3L7ghy7_z-hf3930UbYNlrE-sA/pCkdIcPTZ2A1IW74HzEVS-nKOi8YariZk0_4FC56RSs",
                                "width": 512,
                                "height": 725
                            }
                        }
                    },
                    {
                        "id": "attCamretAqjW8YhJ",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/XrejNxalSVfiZOm4RoFKvQ/yg5bRTeOO3PBYOsB2U6M3FmcnNoQCd0Jg3_6QaSfTngFNEk8MsyBgSPYuwPuVIedsFpUL7LUaoF87nLd-BccG7-uu4y9u9g5rGbzdz8q3gQHF-bJavI3TrPWUvwaCw4U-URD6kkdiElTyxocWo6Rwtjs9SNy4wKxXrsu502A6Hw/cXPKNx4JLWHdgfVLTZBg-eIGW3jw8aJGedjpagcK2tM",
                        "filename": "193-Montebello.pdf",
                        "size": 301385,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/RJLAThSnoU_NSMFNc2YTqA/kc7svB5syNXqRUQGgu2a5m7CGrYN78DN7KLESHzxWTZbLpwWTY8Wa36hPIr91Kfguy9Ion0UHcAcTq3HkUMwd_UV_dtmD5UULDYOtueMO4cU89xveVwT504NEgIDubqfxVExGrCnRVSJy-87XSSYZQ/jipDQ5_X_cw-rV8ZDP6IU0x3EVLkmlVuSAvF1VXgO58",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/i23AU8jrEI1bFRMTdLwHrw/gyv24RurOMClUAepI6NcWz29TKx8r3BF7Ct4HXx7eykwqNlfrIfTSnT6aOMaZ2eMyuyhtQ-3hBW5RBay5adOi4YPN7Fk87At__lflkGId29SNADMjO7ZEiOmeMcqC5zfukw1QZ5WYHPyG46LWgmK8A/ZiQQvUk52uRIuzBbklpmEuy5IWXe0JgG4R8QyaozImg",
                                "width": 512,
                                "height": 663
                            }
                        }
                    }
                ],
                "Site Address": "12000 131st Ln NE, Kirkland, WA 98034",
                "Google Maps": "https://maps.app.goo.gl/ngADtzfaso4Qeo4x8",
                "Active": true,
                "Assigned Job Role": [
                    "rectLGnMglyXQB2uM"
                ],
                "Manual sort": "as"
            }
        },
        {
            "id": "reci4XinMBjYB3B0e",
            "createdTime": "2019-10-01T19:05:14.000Z",
            "fields": {
                "Name": "194 - Pinnacle Sonata",
                "Route": [
                    "NE Route"
                ],
                "PMC": "Essex",
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "194",
                "Calls": [
                    "recphXbe1K6p6rQg6",
                    "recbhq1YFE6IYtWHE",
                    "recfy8OvWXTOdQbX9",
                    "recsilEcdIjiXDNhz",
                    "recQWCU6vSvZkJsU3",
                    "recZj7V82cobPhFIu",
                    "rectyYoNJW5INEusM",
                    "recaoXQ5BVb6dCtNl"
                ],
                "Tagging Vehicles": [
                    "rec2zKTefErxe3jeU",
                    "recGnPNmkCsawbzZX",
                    "recxtIZMtWw6Ud0N7",
                    "recOEOGBjkEYBHDZn",
                    "recdz7Nm0kvnVPsCl",
                    "recAPhODO24sOuY1K"
                ],
                "Site Name": "Pinnacle Sonata",
                "Property Updates": [
                    "recR6wXno0hxf1Vpt"
                ],
                "COVID Closures": "\"6 - Wandering Creek, 25 - Fairwood Pond, 153 - Castle Creek, 154 - Emerald Ridge, 155 - Sammamish View, 156 - Cedar Terrace, 157 - Bridle Trails, 158 - Park Hill Apts, 159 - Woodland Commons, 161 - Palisades Apts, 167 - Evergreen Heights, 170 - Delano/Bon Terra Apts, 171 - Elevation Apartment Homes, 174 - Redmond Hill, 175 - Vesta, 191 - Inglenook Court, 192 - Ascent, 196 - Salmon Run at Perry Creek, 159 - Foothill Commons, 194 - Pinnacle Sonata, 197 - Stonehedge Village, 195 - Canyon Pointe, 168 - Highlands at Wynhaven\"",
                "Post Orders": [
                    {
                        "id": "attC1SkTeJG9kamUY",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/4RLf5ZmPUtd2wtuqbYTlkw/Fqj5QVNRvMAplmzL3yKBeRLZa4kTzz-NyCxcC9YSTo1nd9POUryHFzFtDP2Ujzc10HhCK1aJ41PWMdCKjzvfUZRF-li25LJmrZiyleG3TMii6SMTatUx5Sga4wtJMeRJ8qQAbheTAINXr3aJzVKRhhnf8Gl9ukYg8aZH9cAHIhk/TBTWjsC7EnvvXrobcPdYaRxZ8p1fqwCuSNYkk-6ISJY",
                        "filename": "194 Map 2.pdf",
                        "size": 319134,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/-hWcjkucWhbkr7Xp3NVp3g/XW4A2XzvX5xUYi5Vz6NmvdiFbwon93rQlTUHnEnANenDDSo0ho73IetxPKPHR7nhmhWW9_68KtJFXWA108dnnkkvUSTtP2u3HeJYy1VL8YyxnwP6WZsxcjBCJN5gvIJNs52eJHCpFulikgc5IMDRqg/BkQT5p8NW4cbvsjuPDsoCKlOEaRQ6uIJldCmkX0QwMg",
                                "width": 47,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/9D4A7ZBInajzVC8VDZhyPg/-ns9oSYQ5h6MNLBpnpqBLmZZEAW6uWSns00BwoCYFNIlGoYRL1fpZe8eTX0nOjn9PzuDx2FjsScUgwNM8WKRC1nr-hQB42Mql0UgKypNZi0mD7KslQIC5sJW3lX8A__v9XVBZ_MBNLhcK1YfAiEb8A/8YTxHdLDxfzwKvWr8WXOCdsNLpDp8nD3XLga4wFO83M",
                                "width": 663,
                                "height": 512
                            }
                        }
                    },
                    {
                        "id": "attPdqetcEcGgE4rF",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/H3VJeeJpAaqK1VimpIhIdw/JBJFukLopV8ID6RcNbynlw8ercJOHKyBP6krniT5gacyw-VrXtVNobY6x00ILnaNEKX5tN7Ay8UWzEtH7xxWH8rlwntICKwUCHf2IGrCdNiyoWFK0ARIHA3nNMUDVkI9sjOOtZF896ykuSMW76-2kpdivaBTYaSxbkXj6o1So5Q/N0QKioTrmy-VGj114RFMKOKuIErcZB9QP1EZk5zm1pw",
                        "filename": "194 Map 1.pdf",
                        "size": 21376428,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/rLgH11PI6U4aNIviQep1vQ/POfST4Ep732ND91cT4AERlQDSgGRjv4Yw3GhCabLjuH_3jzRy-y7ybwSHPdkcQy3UW9z1E_8oF1BPr2JaFqCgCUeXjtcuLvzdAcFrIlpa6FE1f4aQh5iqjoFH_qe9Tk-PdjcFjnZ1bkTPvPU_YcX9w/SQnTcAk-uaHR4Lrs5OLqwVr13ufjv9X0pdq3xcbkTH4",
                                "width": 47,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/rhvsK5ReZxosIVuJWqwnPA/HA2yvpIojyOxE7ALZ80ZotLpf5ET_qzioj3oZOkPJQ3dypaAbzUfHAwSo_BNMAL4tK-dHrdHNzeOH3As6wspSbJ9tktAEUaf7C90by6eLy9aLigtx3jwqM0yFs7rkpwzwbUo6AfqLHQlGHx-uzmsgQ/0o0VBif7FzXQXMKIzVZGihQUQZCcWy4uOtOQGPkzAw0",
                                "width": 663,
                                "height": 512
                            }
                        }
                    },
                    {
                        "id": "attjmjlUZh1P303sZ",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/ljio_GvWe99QWiaGGDOypw/FOeDfTKUcT5darKrWxE41aDAV8rMNSNlWvuWksOscCpsYzEzb6Myn8z-HY_8-6SxbPED7hdJWDpX9rfXpxWLSB6lqqt_lZ9o9GAzpTFbZmOTyr31kvMM-onp5GZXT8TECkFnF1qD8jnwxfM8sCYcPJi7sokDhzOcvDzSvGt9kvg/8MP3anWq8nhE7VbfaApxNm2_eTZ9uyPi3iFFG-g5Ya8",
                        "filename": "194 Pinnacle Sonata.pdf",
                        "size": 340380,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/ayDxrFCUXfPJKzowe8T9Gw/mB77QcWypBv2TDN3XjHvfzhN_sotO1qBq_bRfTMwil55RdtAgOO827tcCsQm2IC1AfQBCL119J_7jgGCxe2PZaWoVUaKuWqQzyxdYk4s2DXI57-1ttnE7vxrrGkR1c3-nMgv46N43olXc_SlysObTQ/zlEZtS150C1WPmbmgjx4sK-BDBi-HeYd9bengsO0-oQ",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/gBLO9P85_NW7iYx3FiFWiA/JS9C59ZU4yIesmLjKO0Qme1mdoUFAB8fFu4pSBSNOPTa3GsLWAQk_73mA0JfZannbWxbA97XalwOtm_8MX8RKw4CVR1r_PatDJyNVc5F0fMgY7Va3_4XwnjIlZ-Ilxc6E2uSAc2Mn6yNjRoIwvHHtA/2MFabhMMkOcXUSJhgMUASakr5eP7YwgBdpodmlMgMIE",
                                "width": 512,
                                "height": 663
                            }
                        }
                    }
                ],
                "Site Address": "23940 40th Dr SE, Bothell, WA 98021 ",
                "Google Maps": "https://maps.app.goo.gl/LfmgnQbAYfgcZcwf8",
                "Active": true,
                "Assigned Job Role": [
                    "rectLGnMglyXQB2uM"
                ],
                "Manual sort": "at"
            }
        },
        {
            "id": "reci8LtWWDGFUb1Mx",
            "createdTime": "2019-10-01T19:05:14.000Z",
            "fields": {
                "Name": "179 - The Knoll Redmond",
                "Route": [
                    "NE Route"
                ],
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "179",
                "Calls": [
                    "recb3mB5pcjpnImBB",
                    "recgJZkP75989VPmo",
                    "recq2WDTC0gz0tRTg"
                ],
                "Site Name": "The Knoll Redmond",
                "Post Orders": [
                    {
                        "id": "attNpyKOj2n3vHKVT",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/VUHCAfmgleAmLgVzBqjmOw/CViFLnuGH8Hhp-47OFgjjYjBlV_uTolqwklX4isvoPtN823fP1oD9q7SCPm_xh6E_HGbfDAiIVqsrISKcKeVAWDH70wLgS1cHobkFhaSqZT_KdCz2fYHsD3RLzdI5x5ruv8cpVCncuniacRiEtrCCe6UqBKXW88N1jC6x3arvf89JKkZtBO50TqO0Ue5U2kz/HEGr_LFMJU5OMJyur_urXiz2CG9bCYf3pl-5DYXfjEU",
                        "filename": "179 Master 1Jan16.xls  -  Compatibility Mode.pdf",
                        "size": 27310,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/vscsKNQH_vrWhKW71LlsFQ/Y2773b-7bddbUoMXOGxMW7iVizf_GgrfrMjU5kozaHJkkHmjAUSJehiJ1StoT0nwV5buCmdgcLziQFtTDjo2dq9URnudI6IbVq6ilTdPmebAU1XY2Xgxu1uT81QKL9bMC1z3iVswptTjEQkWxk7EuA/31GYrQjR4Oeni0p_eYh3ydRGnYd-5r_1B4DdEvynNC8",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/wkgpcXxwlmgGSj7Aug4Bng/FT6fJj7SXAyWCvGk1kzRcpLwm6KECgQF_i_zhBQqyjLEXjS3nJHBkXdwsK3lV7a49nynVPB6Zxe-vQIsV69PxJ2-t5Gj5zXLlrQWF0lnFgDioOjn2-B8siZSQAy7X_2tBRDvVR1e_8Y_dKqlBvfX3w/P70P98djuFdNx1yDuD447_CYGVbE7KEUGPWFY2qhpHI",
                                "width": 512,
                                "height": 663
                            }
                        }
                    }
                ],
                "Site Address": "15325 Redmond Way, Redmond, WA 98052",
                "Google Maps": "https://maps.app.goo.gl/bxUM6qp1NwYoiBFs8",
                "Active": true,
                "Assigned Job Role": [
                    "rectLGnMglyXQB2uM"
                ],
                "Manual sort": "af"
            }
        },
        {
            "id": "recj37aTEGCkVxWQN",
            "createdTime": "2019-10-01T19:05:14.000Z",
            "fields": {
                "Name": "165 - Gilman Square",
                "Route": [
                    "South Route"
                ],
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "165",
                "Site Name": "Gilman Square",
                "Calls copy": [
                    "recrbXn8PJOwSk1uv"
                ],
                "Post Orders": [
                    {
                        "id": "attBOsTRz7Y16tLdq",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/7r3-sR8IBvs1fHlW_A769A/mX-PWX4jPuYBPXbRr8A2Cw8OAQLdAVick3iGYHrsR54whO6IjISQsRGaG2KQkqt9uktBf-cNEpda79RcWkyQagI6IY3joUU3X9484bQ8ZLQSYUE6aabiNYlrnVk42qr2FDctkEC0wjZiwlwl0hZUlNObNvwGSoSnDfd9XqVqiFM/1BUQAx7VN87MeGcEEFk9QreJh1jA9gqFWhmU7nB0f6E",
                        "filename": "165 Gillman Square.pdf",
                        "size": 70461,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/M5UIrjyTW7poUXyBm7DZ_g/8XsweEw25jJ1WC9p9E6hMvs2lDVwSd-Veic74HoEZvIzwuAyAbpxPxe9F6kJ-sl0dGq6SS6YzpzW6UUWpAkuXRRcgaq1Q0rQKgIWORvy3WkpQGT6ecTjaTzY_7GVu68krXU6SPHuAZwnUZ9v74JHzg/niaiAzk_rmeEMv5jily8sNgowh3G7ilEeVa4oPhZYcM",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/MqfZYGMTi-Ps-qjGKqrbhg/UTZcQXotsRka2dsEJ_qArHVlyUxLimZd3oaVhlqi5d4etMiYq9Hax1nFXE4z3CNpKW9AHD_srNJtSPVATZo22qXnsMtfAoEKv93ptK5VTY3PCoFI7QEwc7qRqhOzjDr57Tcy5v1fIphheMrX0-4qDQ/yRks4WDI6E4o2OY-y6fIXzkMGWqQfsJwzyw4pqQGTYA",
                                "width": 512,
                                "height": 663
                            }
                        }
                    }
                ],
                "Site Address": "360 NW Dogwood St, Issaquah, WA 98027",
                "Google Maps": "https://maps.app.goo.gl/cUVd4eDfyxR86qrm8",
                "Active": true,
                "Assigned Job Role": [
                    "rec1UASONUxcvY0m9"
                ],
                "Manual sort": "aS"
            }
        },
        {
            "id": "recjaw6dv5yWes5fs",
            "createdTime": "2025-06-24T01:48:05.000Z",
            "fields": {
                "Name": "00 - Belcarra Apartments",
                "PMC": "Essex",
                "AOG Property Code": "00",
                "Site Name": "Belcarra Apartments",
                "Post Orders": [
                    {
                        "id": "attwaRrkvR9ttGXXK",
                        "width": 1171,
                        "height": 801,
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/CZ6agXMmg46h2ELIHWI3pg/Aimj4vSyomRsQAt-D5nsEpS93J9GFCTZFi1-UivVYGJS46jUjmPqvJyWdNwBOqzJykrhlNauNO4TLwW-b6-vsJAbjQX7tfw47-kINDgxNXILzoKLbUBtF8rYtLGQie_tA0VVscRlwxVX5L8W_pW7OSMGqegqrrCWiT2D2a7xX5g/X1cTOF85EqhE6P1DQe2AY53AnJ7n0T4IFmDbKBd3iD0",
                        "filename": "image-2.png",
                        "size": 987218,
                        "type": "image/png",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/XDZRFsByVF27oDS9PAcwKw/oNNJzA7fLFGeTo48rDQrToZQCjp_Syms_6sAySnBAwKmIjNq86JTCiDw5rY_DYn1IvCoI6ngeUXIDDQ5Up2TCrbXdFPtttyXeH9I2vqwPL1bDLTZLBfpYLuN5Uzd1VKYKEfl_l-Qx28USBiLI3lpuQ/FN0uZaDrePxQIxVe3TL4VOEqpPURJY1eM0R5BkJ_PoE",
                                "width": 53,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/hg7mnXu2jrEdaB2o8RirbA/AgSb4R3FMY1LPF2mEMMBV2vT-2YPMkMyxqk7RIu9-mLC0_4ymaNOA5_7vkUrPVr3t2DSfIEVPDzY0jh0jDV3SC_V5xVA-mY9SEs9j_p2Ioo2tam13xgABbRb6d1-abhdv-l_FfeeVUMil7N16zuUIg/DzQxEDUWI3ktzJ_y67dbPhbtJ4jNI13zEGh_SPWg2Ok",
                                "width": 749,
                                "height": 512
                            },
                            "full": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/l0nt_xD85imTzk9nuuF37g/FU8m90SmpyXwUiNgz40iyMk0RWKKKiMWa8mnpJlks-rvhHu5tPXaBQ4ImGEmOr3aKVv8sudsUuQEkekI8ne_XF2FfdEtkwIRmxwhl6Bj-8vihYV9IcNIbkCtpyMakgvzyUao_j6sq_jhncYJWfIl7g/PP3Qq-gboxpYFIty-KEsZOwxry6aha5NUv2vcXiAysY",
                                "width": 1171,
                                "height": 801
                            }
                        }
                    }
                ],
                "Site Address": "10688 NE 10th St, Bellevue, WA 98004",
                "Google Maps": "https://g.co/kgs/YTqb1K1",
                "Active": true,
                "Assigned Job Role": [
                    "recofmlD4Asl1FJGO",
                    "rec2xJiQfuoaQfgjZ"
                ],
                "Manual sort": "b0Q"
            }
        },
        {
            "id": "recjfXkLxHNLQQCcU",
            "createdTime": "2019-10-01T19:05:14.000Z",
            "fields": {
                "Name": "38 - Auburn Municipal Airport",
                "Route": [
                    "South Route"
                ],
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "38",
                "Calls": [
                    "recWVyIEEsKvKh3ew"
                ],
                "Site Name": "Auburn Municipal Airport",
                "Calls copy": [
                    "rechpJSYVSkq0hldr",
                    "recoc2eVGtT10uGqC",
                    "recybV5DmwA72i9I3",
                    "recSa8eIuUwPzJvD8",
                    "recvi39DeV2U2Zp1x",
                    "recetvWuPJ0LBzCh5",
                    "rech2obP4tYnx49K4",
                    "rec60IeaUJpqNqlKn",
                    "recHAoXpYyFReaLe0",
                    "recjRvdAWZManuQkO",
                    "recX7XjRfPBcs0OJ0",
                    "recEQNQ743IkSYzRq",
                    "recRFdDW9CPQdXtqz",
                    "recsFz3LFgAH3IYyx",
                    "recishYeg46EK35ee",
                    "recUAOHYoiimVtlBU",
                    "recLGiwzX58oWjcsn",
                    "recEvD9zW7PaNtWEx",
                    "rec6mwPOVmwaMYF46",
                    "rec8dQux0EUqQHjyW",
                    "recUqcaFvKfvqvRCb",
                    "rec3kdIU9qw1yBscA",
                    "recyGUTtatQk8AXIh",
                    "recdq2wtyJ3JveLdO",
                    "recCUOZC2Dcu4s2Z9",
                    "recH9ofViNgkFeJFZ",
                    "reciIdGJMxSLboXIB",
                    "recFGdNQWc7cA028M"
                ],
                "Property Updates": [
                    "recIjRPddfUjcf9Og",
                    "recRNSvW2H13UisLv"
                ],
                "Post Orders": [
                    {
                        "id": "attbhbhio1zRwMwbq",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/o64wmgnrFw9-eUpXn-JpvQ/B4UOv_oUPQmJMM5BgVneXiGALcnOKdlX0cFfmW88SOQMWxv5T0bZrms92N5BDH3L7tGPiOdoIA0FYQDjbTL8viQhc1kTrWwBGZWyJUZ2b1qtctR5fJKcpiL7_Jlx9G9TofBMNuUhvMFuQkJ5OWxZ_HK1hyyH2lxr3MHjbd-a-jk/UHjFaSFyI_ONECzrOAq6GTLllOHY06AZ9VohXker_4I",
                        "filename": "38 Master Post Order.pdf",
                        "size": 61174,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/vWlFmd6SH6w6Hb4d4Kf6BQ/V2OqU7QUDz6YdbkL_Mige9hxTomDymshbsw4NCchNIJGNzGGrDbV8L8Pf6Bm6OePt1sEkYNsr0QEgHO3_BUiZFGojEWlWWy72PRvitJHqB_Wc0ejDQ4kw_qmjks5vjFlhePyhwsgtCe4aXdulJoW2g/1lUEbo9EFQpnH4mjqbKxPfelkktkQE9424QKpSX6wjs",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/tGG10LK-EsEDJtCo8V31LA/zjRaLEiIQfCY6jGzFonwbmMBVCJe5rBnY_grNFqrDoFxdTFbQ5qqPVWxy8fnDlkK4Dsw63zZj4YyDArKxqVghfyy1El2I5mmkyexHEUabVf5jNryA57Wvt46KqI4eENY6KsZP6n26bab8elxdun4rA/bOuWAd4djD-QyohI9_naip8N24QllTrLki5eyRsPYiA",
                                "width": 512,
                                "height": 663
                            }
                        }
                    }
                ],
                "Site Address": "2143 E St NE Suite 1, Auburn, WA 98002",
                "Google Maps": "https://maps.app.goo.gl/rcMrF7RTmGsL5s6D6",
                "Active": true,
                "Assigned Job Role": [
                    "rec1UASONUxcvY0m9"
                ],
                "Manual sort": "a6"
            }
        },
        {
            "id": "recjrK1QP4dL9yjru",
            "createdTime": "2021-05-28T02:26:57.000Z",
            "fields": {
                "Name": "999 - Airtable",
                "Route": [
                    "All AOG Routes "
                ],
                "Status": [
                    "Seasonal"
                ],
                "AOG Property Code": "999",
                "Calls": [
                    "recaJqDaZtRotg3bt"
                ],
                "Site Name": "Airtable",
                "Assigned Job Role": [
                    "rec1UASONUxcvY0m9"
                ],
                "Manual sort": "a0"
            }
        },
        {
            "id": "reck850di0ImvUVY7",
            "createdTime": "2019-10-01T19:05:14.000Z",
            "fields": {
                "Name": "173 - Evans Creek @ Woodbridge",
                "Route": [
                    "South Route",
                    "NE Route"
                ],
                "PMC": "Avenue 5",
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "173",
                "Calls": [
                    "recg1kQSbeJvuYehT",
                    "rec7XUTk6Bk1FAws9",
                    "recvk4ixGITFTmysQ",
                    "recd8zHlQegniWuZw",
                    "recPx3QryHPjzIBm0"
                ],
                "NE Route Orders": [
                    "Patrol",
                    "Nightly Report"
                ],
                "Site Name": "Evans Creek @ Woodbridge",
                "Calls copy": [
                    "recRXciHJMJMezepG",
                    "recU5yq4vOu2pNIK9",
                    "recknuvwB6rrkJrRI",
                    "recun42l3G2qn7G0m",
                    "recHQjTD8h3yE5LK3",
                    "recI2kIH9KgbCBRJG",
                    "rec26tx2csOXqsyYv",
                    "recGbZAtXRVSoVlTX",
                    "rec4Le8kd4DfMVnTy",
                    "rec0kzmMMJUUcueDi",
                    "reccFfOIMiDHrxK6i",
                    "recoE20p94xMvW33j",
                    "recNhHdnXYuwn3uoj",
                    "recmAy9E5y80jvjER",
                    "recQ1GaOJjn4tdQsm",
                    "rec3gvYNK45OAaqGM",
                    "recQKs0wLKIgxpMwG",
                    "recjA8XUMgIDOMZIR",
                    "reclkCht0zegYQEgz",
                    "recOJ66jOOv9dqVMg",
                    "recwyc68W56UO82N5",
                    "reca71aXkNWGDl9r3",
                    "recHTQcMzqnu8ZhlQ",
                    "rec73wX7d5bxBQvNK",
                    "recQ254nD4XKNdXD0",
                    "recN2KMVV1MYst3oA",
                    "rec2ejAj8mdTyJt1a",
                    "recUIOogrLLccjpSF",
                    "rech27QrMLHok790O",
                    "recXYNgJE0YU8q34Y",
                    "recJNfX4phSeLx3ut"
                ],
                "Property Updates": [
                    "recaSVaeECZUfcpOB",
                    "recMMW22T1pKJFSpi",
                    "recXsZpYTxI31FAYA",
                    "recWYI1OANuPBJ9cq",
                    "recG2sJ3kM5EhUvs0",
                    "recguZ1IZfY3sFyzn"
                ],
                "COVID Closures": "173 - Edgewood Park",
                "Post Orders": [
                    {
                        "id": "attkTXcNFd2yNBatp",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/-g0G_b6yTQQ8kp8g0gwmHg/TjCw8q2OHsm4xCH30UJ3atQ1I7dVVJHZJk9UcjJNihld4yOuWNKHpsQrfSjO0nghs7xdt2J5PR6s8LPtBM-_0BQ3PtAS9DXwBne_xcVUDBko4a8Whvp5VrCoLgzYoDOjTzOBhVte7rV4C43ZgdYZb95JfnY7A3Lwas9P8YpUD9I/F8NV1EA2wc1RAP8G_NPbsJAVkPilkY7tWuNorQ5X25c",
                        "filename": "173 - Evans Creek.pdf",
                        "size": 78093,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/5Fh-95KBGNq3a2R5J4z3PA/l_gG-hYxNbOvhuo0JIP9CVNtPXwWNPV6redoN2aaLcc7huCGb9f6-qzVsgG8aOykVyXsiWRDlUM2wIZ-GpQc1shUkbQWBQvdGfrqnUQDZufEeCurHOZxGty1jnt-oS_x179PlgiREtj3gJIcFV619A/kdk8zyPKEV52H03FCVY8AAkXPKYu6C_dpt6e-Tdh2VM",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/PK-orlp-Vum1FXpdj7N5PQ/9GtVZpm6FX8-uWl3uJPkQmlAZ4COJDt5-1YbUUDU_MVNhg3hZ0f9syHfJS2aUwWnDzeuuEkzVbibARyCDU7Wcl3mCUPuGaLRVZUTuwTiDdPQZ_eqA_sUZaOmSFM5p7hIlsY9EwfbGRfQ7r8kzDWNmA/jPPjiZpxRJ-ICW3pCiUeWqbnaPPBw6mHE1ZdhHJFIak",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "attHvYVRSfNbPgobp",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/ENW_7jzNKWCW6yz_bJMr0g/VsrUprIeB1spHt0ZSD0Kjd4yiNL29LX1WdI06E4SlPiVQ-RRWUQBmGEbPrRZEoDHZck3HR3uEpHpkKuv3rz6M3VfDYQhOWrDY7et5u9fzF01navEwUncLiBbSicAOvgkzLJFaA7HfHAZfMU3B96fTbxq9VUnF8NwGrY0dcYrc0PTQm59ghE8raC0ZjP-rhs8gbrX_usNMZOuFzG8w4OruA/KurwMmbueT5RDr0P-leRqtzgMD8qtu03V5694rNK8q8",
                        "filename": "173 - Evans Creek at Woodbridge Lock Up Guide - 05-22-2025.pdf",
                        "size": 940808,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/WitnURG0RPxzJZ_5J4APpw/gJRiOXxDUE5EfkW0bFNPbAR9XaEexbFZnPDhIhxfb80qQCC8LwbgHVi_vXddSSxyIbL7yeyLv2dSdXQdmQYbNVJgkOm5cC4jg8oz4Vby-kMmDkuXi37amAVvfAw4VERcQ2iHnMrfJDbj3_HbuVTRaA/YdTTdMV9aDpDqLiKhcr9pDzHa9l2w6hJPJlKxDxtyu0",
                                "width": 25,
                                "height": 35
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/wZU2BGE2x1mxMSAtiTpw9w/cwsZJST7tMbEUtb6wJAPXqfmX4ifZVjUIdr_vF3emTttgq_rOL0NY8XMRWLl-yzhD3s4-8eNOtyCo9TpGEcrp0iopTwEODlZgSXqmYuHXf_ffUJwI2IE31Yq8cOkFHSwUvp6PRSVvIZJcc741MT_Sg/GmWdMphP5vn70VifzZGSYCKxuC36NQAUhIm3ujEB0Lg",
                                "width": 512,
                                "height": 725
                            }
                        }
                    }
                ],
                "Site Address": "6205 188th Ln NE, Redmond, WA 98052",
                "Google Maps": "https://maps.app.goo.gl/mT4pCowNAtBADLRw9",
                "Active": true,
                "Assigned Job Role": [
                    "rectLGnMglyXQB2uM",
                    "rec1UASONUxcvY0m9"
                ],
                "Manual sort": "aa"
            }
        },
        {
            "id": "recl9jh6Wsx4Ph2QT",
            "createdTime": "2025-02-17T21:22:17.000Z",
            "fields": {
                "Name": "152 - Alder Bellevue",
                "Route": [
                    "South Route"
                ],
                "PMC": "Avenue 5",
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "152",
                "Calls": [
                    "recl30IUUGZWCNTff",
                    "rec3zYWJkJg0Gvya0",
                    "reczSKIHDf9lAMTyK",
                    "recUuqkV9slF8rMhY",
                    "rec2TRCXqsoyFTCZk",
                    "recUb2P2KIBtfHtJi"
                ],
                "Tagging Vehicles": [
                    "recksXs9lWodakltn"
                ],
                "Site Name": "Alder Bellevue",
                "Property Updates": [
                    "recdffJZZFrAlE8e9",
                    "recaWMuv9WNdlHiJv"
                ],
                "Post Orders": [
                    {
                        "id": "attWQ4YjhSh7oHI6r",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/O6pKm3IEQFBKGKuwCkQzSg/_GDuKmSHLdHpWgLTf2cH9GpE0jOSG5W3J9LqHlniBP2pg0CaBcPOtMsEmaoHAdGaV5t3RgUJs1zHS9wvvp1gK4oMXSmmLhm4QBu5y9sMB11rGaBcc2uKhB2rs9DhuA4706DDsaoapU19r8R-nhoitszF2pB7NccknFhi-9I4vOo/H9rOIOKLhDZF4bUoBnQ-a5TMCAJStHXuuXIR9Uzgucg",
                        "filename": "152 Alder Bellevue.pdf",
                        "size": 63697,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/_zLNL7Ad1f9PR8-3szjA-Q/rd7X4aq4unUMa8tf77i7gxCb9nux8nqB7Rm5IMo3AsVPKFZn8-URTh81CTTZwjfSqxLN6LuP1UETgL_oWvjRwq_sszNZ2Olvs7Zaxhn3OQtVQW8YzFtRCLH-pXmArMfeyCjo-7w84YrHjtxOYJE5rw/2W4jUJOGjQ71Vtl4-cR_59sZgbWVAUPNZbzrHlFVpIc",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/K4ZASQ90Ncnqzwc3CJc_ng/iO1ZaSsQ6I1v-g-aqwNCDWkHuIjQzDJkh3xwclWiSeRFoG_bmqLtRzEP6ozQ4Il0Gzw8876EBrlg_WGQpS0s0WwA11Stl-0XFuVDzh931H_reF0TfR6p7FK1OZvLDQ9inAVZmJqbJI-uYDZ1IfKygQ/HRcuqedE6nHoqN2F9_01hhyFkpK9B9m5N2u8iItFwIw",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "attfWfFq6r6ZiV1WW",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/6lx8FrNUDeGO6fQ9PDdZrQ/KdH4v9g5na6nCghXQ_BHKDqkqQM1B8BLFjkxlTkmc6VBlCEUFImFMK0b96ts9tpzhf-xefGnhXTRaMY6C2pQm6yxHyAKq0iv4_YeCx4pHIT1JPJHn8y6o1B0itNzzIxTcDJ45zMp0AC7V4jY30qs2Gj52b2uhtbbbOEBT060-OY/8Yh_UMT0QjTlpgGKN2ULOfzDHEXVXIxv_yQ0BA2OAnQ",
                        "filename": "152 FOOT PATROL MAP .pdf",
                        "size": 5684398,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/mQFNzb4pZFiAaHncSrc5MQ/NCzxcFn0M4WoDC2w6R-CbHxy0LGjBu7tiww2sxxCPABTf-3STNFSjYoB4grgfMPcYL2B-iFDsa2cyAqDk_DB6AO4FWMU43_H20ydyt3aF1no5fldsYARR51QwAOvXG5B9W30wIjPdZV9xTN72CyX3A/01NXFIGYOPDsP3uRnMMIgsSKQbwINgC8J7rV4UduvnU",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/JWQD_FQnpZQUIQ9g4YJa8Q/WosoyxyefTmZuDJw1rB7A5HCu-iRjZSfuA8ZVBAEd9rdxbCi8FgcpIjVLpBFLDPKIl40FQdel1D_r56x5pHKi4JCGO0a5mndSSDtUSu4MmKGXrPzrm9p0luao7LQFNdukwBGFejabYhdQZUkyMyXcA/vsCv8aaP_nTmU4mO2DrLV4TI4T6Hoj5zEAkz9-rXN8M",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "att6BMqS18Ct5Gdiy",
                        "width": 1638,
                        "height": 1410,
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/fg4aY_PL9rk7MtxlsCJoLA/uBmCSZHjoPmQMY7WyC0RgZ4AdwM_hAkyl9F-E24-Vwf4dDnBj5CO0JLtIMSY1VCZ1R7pEle_yt5s-oip_oeWRmFnha_vPvrfWWJpn6Ses9_EyfBkvRLfVs6APnXW8Kn6hyJRfgsmlJLi_YANB-8E-QrOA49JTIf8u9PewuRtQXo/NNx9kPXGDQqaopzsq8OtxRjcGGy2pp_EhkQzCxN44Ic",
                        "filename": "152 Vehicle Patrol Map.png",
                        "size": 4275559,
                        "type": "image/png",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/5LMmu-VqMVbKOrDksVFOIA/Kkiu_DUbUr_b2O6WyCXtmj-fF54n7NHvuzMEKq632gmEjqaysGmqXdyQCz5E_2KR_MuHT6XsWliNh9wLMdUoVIYtoXFm4j7l1qvJbP5l5kmGr0TUpclcOy-lW0pEmas9kEcUkwOcfsUzprlAdtqtaw/kx-MJpcAomAwpC0EO-Ra10EVwl7A2hpBAZB8r4vbI3Q",
                                "width": 42,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/1OgDJqZHtfcjq7_9vB_PpQ/rIIvhBW8QOF2kuNs5q3UP1hGd5C2ESoEqUUMKFomozoo_TGNhkNwgugQTwuDx6_Ira68tfkjl3AyHm-U8eTyPbbNAfaEqH7RTPjPnEwbGq1kbrxykZ7qFsBbVwRkHsafr9T5NvX0ZItWr9fTOm2_tA/zUJfOJ3yuyyyC5NSJSNiRDB-oo_xHGHVFqfjITakSwk",
                                "width": 595,
                                "height": 512
                            },
                            "full": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/ogBs0i9rML2TGSdL5l8nWQ/Yx53kVuuEfJcZ2zYTjL-XFWWd7pU506iMMPMPEXhdaWjGStmyjJaI-ieM9TSN7aY5K16mdDvu9TkWhPDDq1Qa6nlOzeN0GlF-PEHDgJdWJU7eITDlHxVI_ONVdyQKnEniXxToOlk2pQA9cm7gbtyEA/6FOmPo4FeP2IJPvr41oMNeyk7-E2gLRxwIWxRsxJ1iw",
                                "width": 1638,
                                "height": 1410
                            }
                        }
                    },
                    {
                        "id": "att2Zmwn49EbDUUjY",
                        "width": 3024,
                        "height": 4032,
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/nO-82bHqN4Cce5gDo_ukRw/Q6POlj73WbZQn4yHVL0WmR28hjUGo5TnwldDpaa20z32hUlVN9n8WJBEgbCPJ1s47FI-SCcDfNopXCoydiLrCFyg_quS47JMoV98benWtj_56uK0JCCO4K6OetEhhVu6ihZsaiJffDb2MRc1gr9VS5x035BWoUDes8jneP45g4c/jWPUUxnxHO36w0PdcpcH61Lkr1_JYu2T9CZnZGqnLSA",
                        "filename": "2025-03-03 14.15.59.jpg",
                        "size": 5897224,
                        "type": "image/jpeg",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/FJn7kDFCPjrgV4nyG8IwUg/qD1XxZZz1sEtaLxd1HvUxT_d7SbxDJNkJ2lM6b-Airb8Y-rbiOh-JaPkxhKSq4czxvbyNMCkgFQfdJn3g4OSkl_0OBKpYvML_VW184QMFNcO3bFd8gAwtB061VyV67gtxqcX1tEmWGqL8yoV3BgXaA/FsTFtAK9_V5g6u881IUC9nICPh3WuCHwktNtZgvqcIY",
                                "width": 27,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/nMfWOkDY1507Saf0ArLPUg/jZlk0ya0N5tX39b8Liw2QSoHs889lJ2zXSg6Bck_-bqb-jUL8EkgP7bXrrU7fWhBjfu5WQvAsUNU1vNYSpjAecwDcGrrsZxzwlGRuJLhLl2CcFT9czbx0UeElrHhU7XmvZAc1KX3QEkaGA5-3_0lgA/xavdbhlfgxDBxayAE0jQX7i7v7lV9yRDrMzTjwRFPnM",
                                "width": 512,
                                "height": 683
                            },
                            "full": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/nA7f95ejT4ZGKDcanhhxpA/yLYU0BkWe_euogHCevtE01VhcotaEuwAhCgHAs3XOwUK90xKdYWpOEgRqcuDKnzIOhvBAEV9MqWz6DMGKyFBnpacbzqZ-J402rnGDGbxqGq-fDeCoxOGvcX-JPwL1by0NwniUFxSaX4d-x19D0OwHg/zCWWRdSkXXNut08Y_C9T5AOSOXUGo4tIjFWzOGV195k",
                                "width": 2250,
                                "height": 3000
                            }
                        }
                    },
                    {
                        "id": "attNKh6jPihlTp4WS",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/jhhmvQFjOD8ZdMmOXT4Ltw/Z8AWFF-V4gb82Q_xnVAFXaMSsINS60NFbzSypSHX-f4Wk_Mb4otJ4kGkA8Xiibn6647XzqRE5GWAaTGwhMsSDBFBN29ntLT10iq9OqyB2MTZSSfr2DLOtadr37Iwm8xtMSd3OaZIm44ng9XaIda0955cbnUyHpHxlnxGbMMg28HxX0YwHTsweIUDO_t7TvvbtIkcPXDvSt-HQ3s5gYYa4A/49Yr37TyDDingT_2lWJiYkxWBaNIqXP2lESsT1rC7WA",
                        "filename": "152 - Alder Bellevue Lock Up Guide - 05-22-2025.pdf",
                        "size": 737645,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/1GbPR_goPAU1mc_qAopvag/fKosZQs1u2u5u6-Ug8sgvvr7kxIzs0Mm9Wz_qEUAG0qTLgiDjkH2apvHhDYPxzJg3vUPKegEKswBJufaAQQe3OKKX2mcUEHKNgRGc-JCObwwW02fh7JY-5NNX8LUjDmhFvbL28MSzhE_mJVHvsZkMA/lBl2LkqX-lNOp8ylwGnbs8Gy96_QeYwdDcN2ASAJ_8U",
                                "width": 25,
                                "height": 35
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/LuRiC8jNDthg2DqZPcfl4A/RtfHCyWkPrITIQx2qwRIUaQ4crmnnq2EuEqL_Fi0tXi90uWHeMTsw3YL73V5aTeuOI2hnj6Mqf_80l_Mkf4fr9T-p3j3MUtCF05xOswXDNM85NHfrM3VQXU9piJY6JG89uFmcq5gy19Jbv0uKZtG_w/cyFheu5w2Di2cCrCM-QJIL0tvfVytfnDvUBuXx-pV2s",
                                "width": 512,
                                "height": 725
                            }
                        }
                    }
                ],
                "Site Address": "1501 145th Pl SE, Bellevue, WA 98007",
                "Google Maps": "https://maps.app.goo.gl/6hYrCVa8Z8v8Lp1H8",
                "Active": true,
                "Assigned Job Role": [
                    "rec1UASONUxcvY0m9"
                ],
                "Manual sort": "aE"
            }
        },
        {
            "id": "recllE3eJZsw46JMe",
            "createdTime": "2022-09-13T17:48:28.000Z",
            "fields": {
                "Name": "590 - Highland Apartments",
                "Route": [
                    "Temporary",
                    "South Route"
                ],
                "PMC": "SummerHill",
                "Status": [
                    "Temporary Patrol"
                ],
                "AOG Property Code": "590",
                "Site Name": "Highland Apartments",
                "Calls copy": [
                    "recA1LO5prNyKiway",
                    "recELgZj7N8opFMhT",
                    "rec0MZLiVmfIsh0C2",
                    "recnaoiDu0UDBwECl",
                    "recKyJdL2aL502BkA",
                    "rec7gr8IosVg9LX5I",
                    "reczFpzEy7Sh29NW7",
                    "recaQikqJ2pF0phdg",
                    "recD8lK25ePkNbM5l",
                    "recPCMWCzp5e0Pnrd",
                    "recWmya9oE9awuRJ7",
                    "recxzzsimU1i5lGnX",
                    "recg120t0MRXEm4ED",
                    "recsrYYxKtv3ckjT0",
                    "recQvSIS1qg5Q3Xsn",
                    "recTbKfkMlhFEOwvm",
                    "reciPqyUphFRSjOob",
                    "recvvrCzqarsckF2E",
                    "recJtPM8xlSoUNlnr",
                    "rec8sBgjkvFlQVC8j",
                    "recr7JsKtiffcyiP7",
                    "recwfsMDve7fkrNvk",
                    "rec045j5YLA6rytxf",
                    "recpMEW2RodY5c01o",
                    "recVyseYFWMg5Y3sv",
                    "rec76ZdQkCvYVijsQ",
                    "rech4FjkA2eLrc8vt",
                    "recbIMycGseQQK77x",
                    "reciWkczn5TgxHCxx"
                ],
                "Property Updates": [
                    "rec7aXnUIKkI8SLFH"
                ],
                "Post Orders": [
                    {
                        "id": "attc0nxGl24YGzaIJ",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/U30xFncwHUhk_zD39-oLIw/4JE7sfX9abzuJwqwKJ9nZrEY8YjeVta7ZStPOqPvH3JBXLY-4LRWwWsHbVBDQrHRiD5x_YaipBr8XPDW45n0azCsa0ROf4qQUp9532fT6hYWzKaIc4kM8ZxYZkGBqfNkaizozW9-3ilXdZD9pItCGqHjPIiZ0ePb3d1pOmZ5toJlo5JR7mEqPzALoy47tml9/y7PWvMyxLvcUZ3ufvXVO28w8Mcl0infG3Mj7QwpikGM",
                        "filename": "590 Highland Park TEMP .pages.pdf",
                        "size": 57425,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/Xarpdi_z5cGu0ciruhbutA/dNP4GSEYBU8HUR0Ovm7tFYjuY8xUiy07yXkhnvTnDr3TT2LuPlhsij0GbkcyYOaF9DnhJHHFp6ziADGAOwJ0lYV4-AbVoT3wmHHfA3z--DFsP7YuQzFiEcLhinkcwHbOg60_SWzjRpzTGhBUGC2NIQ/FWQRafAFJI7fQe5O1-McXINkoGPJ-GZOPBHlC1I4zbU",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/SkWxpVK8lFfJwrcUi3gWQw/Fb2HIHjlo6zkXpnziXreoKcP_EeGM-MBipFqQNbGS18ICQhUWho5lwo3oqusnWoMLcwMJHHK7R89xEvifX_5TG_gWdKhgEb3_SKKU4SvB3t-qT_g7yT3SxS0Ny6t8xEe4DYV4ws_f2EtY1BYLETbog/WxaPZgYv0dcqGLrfzRnu9ByclNgaCV_1VzGZ1I18kT8",
                                "width": 512,
                                "height": 663
                            }
                        }
                    }
                ],
                "Site Address": "14125 Ne 20th Ave ",
                "Google Maps": "https://g.co/kgs/smao582",
                "Active": true,
                "Assigned Job Role": [
                    "rec1UASONUxcvY0m9"
                ],
                "Manual sort": "b0E"
            }
        },
        {
            "id": "recmLjnDZtw1jzTA1",
            "createdTime": "2019-10-01T19:05:14.000Z",
            "fields": {
                "Name": "192 - Ascent",
                "Route": [
                    "NE Route"
                ],
                "PMC": "Essex",
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "192",
                "Calls": [
                    "rec140UraECnmaJIy",
                    "recUVxeekES1gJGKP",
                    "rece9oqAMeaUUBYln",
                    "recikeu9rlFIePlal",
                    "rec04N9QQWvgJ7tuD",
                    "recGdcxhPBRIWBItP",
                    "recsoHK5kjHfmEOt0",
                    "recWmPjlE6bnqq9mR",
                    "recjnWBVUEart8eQE",
                    "recLBruRpM0Kr6Wt6",
                    "recHUTZckCJKP0rLy",
                    "rec6RNvRzakAyflq3",
                    "recM0gCQSc5X4DBas",
                    "rec80hUNK7hUV43HW",
                    "recmmcdnG7QEpUUpJ"
                ],
                "Tagging Vehicles": [
                    "recvFSAzUAjTJ1zt5",
                    "rec9osQyRDWFK2Nl9",
                    "rechXbLB5GyiNRjKH",
                    "rec2SCM4GzHLb0tlm",
                    "recsGhAC0V0VylMEv",
                    "recjFJzAopmlfFdui",
                    "recJrWdWLo1qyKIKQ",
                    "recLQNvBfDG2uCuSX",
                    "recCg6hV3zDcrdVG5",
                    "recAAGHPBh2aYOCav",
                    "recPmyzvl5i6YOp4z",
                    "recy6N0y9SKOarNqR",
                    "rec8BRAusFujN5AVN",
                    "recoE2TgUJOT6lDjJ",
                    "recP2tL37b5jUPiLS",
                    "recUbxI5DXOIxgIpq",
                    "rec5GCzMhOlTMh9Mx",
                    "reciBlxiDszOibb7i",
                    "rec32zb48tP1g3ZCz",
                    "recJaAJaGGDGBBrl4",
                    "recnjx6Ztub9Zt8qP",
                    "recdn4qV2KSV9rSsr",
                    "recdCdLN5JxHQsgWC",
                    "recyVR2AGFDOVXSFj",
                    "receJG5H21XlsVDdJ",
                    "recJnxbujXtTr2Cqq",
                    "recK5y6juA6zaGF8U",
                    "recLbvHn06BuZe1hP",
                    "recyXkuFwF9Ksxkdo",
                    "recIJk5EoRQSclTKL",
                    "recbke0MadpF666Gi",
                    "recAlEjujneX7ctZY",
                    "recEawCZjuMoHCDqm",
                    "recSo1l6D72scheCT",
                    "reccFaAnLAMBJ074M",
                    "recxxspf2QI6il1su",
                    "rec2gwMlAQBCpFxlD",
                    "recJN1GeQMyRE8Rlg",
                    "recchNjpMJGHp1osU",
                    "rechzlN41ndax4mRL",
                    "recV2sxPqEaaVPU5L",
                    "recEjG4nL62kknAFd",
                    "rec5SyzQnMKNG8PbL",
                    "recAY3V745Woo4eh9",
                    "recWC7JFclADXxPSw",
                    "reccKAhvtCal0oyA4",
                    "rec0VU80zfkTRmCt1",
                    "reckthROUqjDTahoM",
                    "recNH6Sopgs5JrvYn",
                    "recH3C1gkMvls6s3r",
                    "recKU2P4lJy5mAIjv",
                    "recRJM4IA4XefOF1j",
                    "recsg53yUUzrBzeUm",
                    "recZSXhO6Hmiht5NC",
                    "recYnQP1B5ORUb913",
                    "recJ6qeg5APWU3Dq5",
                    "rec4s5QNVRqjuqbpS",
                    "recnlLsU0aV9x3A3I",
                    "recLwkq8YJRj2vqk8",
                    "rec0SFJoBA9fF4wMT",
                    "reclaFnFk3mK0o9Vm",
                    "recN3uM2cIKg1kJgE",
                    "recmacLyoBXANvNTR",
                    "recATheong1JlX3e1",
                    "recb6zq2xZjtuamvN",
                    "reciZwUdl8bdmyPTW",
                    "reckYPKLAv3i0anPu",
                    "recaozmXVcoCYb63E",
                    "rec68QGg3jCfKfOAT",
                    "recJ1NPXkr8Nqy53a",
                    "recrpDNqYAomqV5Wj",
                    "recH4gCgRovjaWNBq",
                    "recAKqsksszr2sjrX",
                    "recWFDxIzHFfnCSob",
                    "recweueIL1O62LxOy"
                ],
                "Site Name": "Ascent",
                "Calls copy": [
                    "recrAEfbWH4Pp7yWL"
                ],
                "Property Updates": [
                    "rec2KFN9UwkwrnqGb"
                ],
                "COVID Closures": "\"6 - Wandering Creek, 25 - Fairwood Pond, 153 - Castle Creek, 154 - Emerald Ridge, 155 - Sammamish View, 156 - Cedar Terrace, 157 - Bridle Trails, 158 - Park Hill Apts, 159 - Woodland Commons, 161 - Palisades Apts, 167 - Evergreen Heights, 170 - Delano/Bon Terra Apts, 171 - Elevation Apartment Homes, 174 - Redmond Hill, 175 - Vesta, 191 - Inglenook Court, 192 - Ascent, 196 - Salmon Run at Perry Creek, 159 - Foothill Commons, 194 - Pinnacle Sonata, 197 - Stonehedge Village, 195 - Canyon Pointe, 168 - Highlands at Wynhaven\"",
                "Post Orders": [
                    {
                        "id": "attk3R81myzOavXTo",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/ZWVdQ_cjmiPhIiZtKBJusw/pj4r0h9Wq7hS2Jc7-YUzh8FTVnH7Xl4lRmekEzqu_1ouKNaET13ZDxaqoxn-9h-R0D0x-9PFteytw6zTcExFStmJ1NVf-O92KJAmp1q3jGb1EiSzi5rikBowYqLry4yx0L2eBvpFTdzUz3r_D8i1EDb1acRzJFDbqoOwelFFIac/QNm8h7k99JsQ13C6_7DRbx_j3cVVHkLyb372N_3Uy4c",
                        "filename": "192 Map.pdf",
                        "size": 18083588,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/Vy2cYETO99alTO7kG26rCw/q1xGMkmQ1LX743L2Ck-DUELtkHFdRSi3lEwHKIv91L8V9gLIB3tCK5Dnrh2wTS8w4ffWAz0GPF1higlYCG26ERM78XYfHj-AfqMU36LhGQhdnIk4wSVXkQQqDzqgWPP2bvVwpvCKpAJuHubzgLQXXQ/cI3xgoo_Dmrg1y7mqOmnVlvzac-L7WFgM7HqOG7Wexc",
                                "width": 47,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/veU8x8lHnFAHlii_DHHqcw/k8WShBndmPhheISBcGS-NrKp9VgxITdLAQvnYNT9K65rqFNXu0zlaupd-wPUhiQxTpmKK0wzrO0KMAVlGuYdlrPu1jmJLicoo1bHJ4jqfuSJdcHuqYlK_hqAD5Yw2jcql-NawGjz2UvmgtukIJlyBA/L6w2u8ARqXVobtB524p3hu1qIKJfdzYYRqSTHTuvF7U",
                                "width": 663,
                                "height": 512
                            }
                        }
                    },
                    {
                        "id": "attsVOzz2Mee0ajuw",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/dcwaFgaDuj3PgqB1IS8KyQ/xoQiDE1zkJs5dXFmozrPMKPRBEwyeOSJbcrCeVHCvyB8VsIskBUsxFUxQlgZtcQXf7Z7wzkQomBb0PvNbiPpfv8WSTZ3TB9n9j7L-h6QAdZsiAkvzxo4P-lFa74u_Z7FgBDHUh5Y0HYuLx_Syaln8gr9ARADOjIeKTouWPvkxKs/MRwkWjMwZtmCibCH_qjjgvccyTFK19zmdP0q4YJl-Q8",
                        "filename": "192 Ascent.pdf",
                        "size": 296913,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/q6OsxIDlwl-HilNQG5za4A/hB3V_aUyPjC2g8RVk1Sg7WZu5Pv8j1lZo-Pr4crM79mk2KToQYEUVWF-Iw_VV0xDSLa2HKAI_AImplzW9Ckcxcd1HqExEonVkapZc51m7Lk-cp2_IheofT6pfWUjaYOwIduE0va9zOh8utN_UOpfpA/FVgK6KRoPEQGMdRDbNLMFbqeMvdXfRgogSHFFfgkjiA",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/0nzR04gpAR1HsiaCnKl31w/Dm-S8-BiBnNrxkvxhpJzOrBuMzIGR3TvjaF-nl4znelPin-BO8z6Dr0moxyKFEKQ_-DSr0_OIfpi8l-XNbEVJFUqWXkSbyQ30Qevuy3mloXH3a78S16oDvAKZecHmTulTnzRg8EDhRheOTrGef3Mhg/3y0fIpX-E7HgIeOq8ViQaFz5YKHGIIivseqVOiAdY_A",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "attPOTGJFG9jJYHSY",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/-wknPFryq0lv4f2AJcNvow/uwTaz5RDzclgnKQOfYK3Sef6sWvrFBTkbJtp9jj6sB2GFlKT1_Yjkbo2YAYgTcgYViLfyDI2bTmAW-QHEpOOmyEV6mYjCLumDflrsOwADtBOBDnIGMBv2_KiofpXj6J-LL_9yPeCv5YVwTzS2FFH_SEIZIYVJOesHLMRkMdCElee9xFzVPvm84IBcVg5BOey/7Q6blzbkVUvLcuTWyJffHS53Wbntunmv4ilYgej_DLY",
                        "filename": "192 - Ascent Lock Up Guide - 06-10-2025.pdf",
                        "size": 1093384,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/Fn9Qd6wQ7R5wo4QiwilfZw/b0v--hWWU-mbClNJFaOYP9fTyW8F8ZrQYvOVBuUuw8l9EE3ExG3TlW4xDSwCo6A7dgi_4PYkhOd-3tpwxrNHIi25_Rm0ue7KyGTEkoYdH6wDFYcDvug9uWKA0ssbv00nEaiKdPSOVMHmeImfSOozzQ/BXUZiYyNKmXSxaGMVTYO1J2MzUAhShlDlo1AVvedH6U",
                                "width": 25,
                                "height": 35
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/dDdxCxYX_YmhWdEzeR-vvg/G0JyTmCFYEp5EZoBzo4Eh2ZnhX2V_Mx9poXav_EeRXKWVC7J4WzAFoOlEORvPLqc3bTb39Qvg_vPrQ5aAw5WHyX4fqjtKOcZCNz8rJWwFsx3NBP_zbAOyN6d6EnzjJZrrds4MUoaHXOWljYnsSC8aQ/Ywokohjye79gCvdgk3IJRec1MlfwqqS4M6FusMb3yX8",
                                "width": 512,
                                "height": 725
                            }
                        }
                    }
                ],
                "Site Address": "12062 Slater Ave NE, Kirkland, WA 98034",
                "Google Maps": "https://maps.app.goo.gl/yYwNmHZWzbUjuRVR9",
                "Active": true,
                "Assigned Job Role": [
                    "rectLGnMglyXQB2uM"
                ],
                "Manual sort": "ar"
            }
        },
        {
            "id": "recn8HutNnF6H40eb",
            "createdTime": "2019-10-01T19:05:14.000Z",
            "fields": {
                "Name": "172 - Vue Kirkland Apartments",
                "Route": [
                    "NE Route"
                ],
                "PMC": "AMC",
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "172",
                "Calls": [
                    "recIhii3VSBdbPkR6",
                    "recE4HRr4ov5yJtZV",
                    "recpq9Ja0OTGGghrm",
                    "recBQKrAUuKw8otwt"
                ],
                "Site Name": "Vue Kirkland Apartments",
                "Calls copy": [
                    "recnAObm0Jj5aMZ7Q"
                ],
                "Property Updates": [
                    "recDX9kkwEu3FRYyD"
                ],
                "Post Orders": [
                    {
                        "id": "attzmpUwNfFhQqzmN",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/A1Ny_PmcwtvgwuXtRUkAJg/TOWpvTtPXaZtZfogPsyfH3ChEi5v-O03zuLDBZA8MCmFHL8NK_F0O3gDg036fVrB8598Vx9vGy1QsHcwo-Dlg7O2sK-C-oRiL3aQ3WjrljByzjaljEqT2JUrkj89Ez7tgq1DdPj7njFm3mBO55Per93kBse6tVVIBUTt7CAhDbo/nRg4ibxmJqF9oAzlSKIAr523tMXIMVfZh05RKII2S2Q",
                        "filename": "172 Vue Kirkland.pdf",
                        "size": 283277,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/F9bX_0k7WDFDwOTpIpRRZQ/D0Nm7gnhaB2AtedBrWAWfMLSJmcUwiLBP08B4ufgbukZZJ1aPne5g3cAHwJ-g-CwHYkSeBtPs_BIjqNo-uMGcO_XdNIk2qBm1YqS3vBFNKXNZaY-LR62wx_rvjys3NUw-H775uzbSFFdpkoUs9cWgA/iWS7lDDMBsirF3EHHA_Z7FBQrncuuZHgQmixyVpUeAU",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/a7AA-PtkQccqUBYU5BzZow/HUzUwoFUTXbtAYk-Hw0dxJKCtKls3mNdkMMh9u9tCpnxavvvprS0yD9_-C6WJv3TCW46Fl1KIJkRC-hM9rFD956T8qWwRZvnGdtPZr9cjCjI03TIGIxprPKr22Xyf1gxiCJ8SmbBDZKO2cpJMzNRsw/gmauh4nfr3PTfwfT-r15mVS4iGddTRYSMjjGrecYNYo",
                                "width": 512,
                                "height": 663
                            }
                        }
                    }
                ],
                "Site Address": "11733 NE 131st Pl, Kirkland, WA 98034",
                "Google Maps": "https://maps.app.goo.gl/JbhNQkvJEsYppTRC7",
                "Active": true,
                "Assigned Job Role": [
                    "rectLGnMglyXQB2uM"
                ],
                "Manual sort": "aZ"
            }
        },
        {
            "id": "recnNlKRZkKE4uBsw",
            "createdTime": "2022-09-13T17:51:29.000Z",
            "fields": {
                "Name": "570 - Spectra Apartments",
                "Status": [
                    "Temporary Onsite"
                ],
                "AOG Property Code": "570",
                "Site Name": "Spectra Apartments",
                "Manual sort": "b0C"
            }
        },
        {
            "id": "recnjNxzWHQTAZxRB",
            "createdTime": "2019-10-01T19:05:14.000Z",
            "fields": {
                "Name": "174 - Redmond Hill",
                "Route": [
                    "NE Route",
                    "South Route"
                ],
                "PMC": "Essex",
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "174",
                "Calls": [
                    "reckNJDUf1LP3kIEU",
                    "rec068whwRwe2EhQs",
                    "recoqRsXiGGvrSjwZ",
                    "rec8ZV9Mn4t1xCrnu",
                    "recrNGnjmiYVTWezD",
                    "recLRtGk3FKdwe1js",
                    "recYbBFVjSTg45Sgg",
                    "recENIwXyp9SGnoQs",
                    "recdcsTGqatsaM2ls"
                ],
                "Tagging Vehicles": [
                    "recdIcZREqkjpJZGO",
                    "recO4GwjGXdrz8aRt",
                    "recOfNH3WLPoRTMEG",
                    "reclOICmXzzW5AmYq"
                ],
                "Site Name": "Redmond Hill",
                "Calls copy": [
                    "receiuIduFmmE0i01"
                ],
                "Property Updates": [
                    "recSClUZWHUW8Fouo"
                ],
                "COVID Closures": "\"6 - Wandering Creek, 25 - Fairwood Pond, 153 - Castle Creek, 154 - Emerald Ridge, 155 - Sammamish View, 156 - Cedar Terrace, 157 - Bridle Trails, 158 - Park Hill Apts, 159 - Woodland Commons, 161 - Palisades Apts, 167 - Evergreen Heights, 170 - Delano/Bon Terra Apts, 171 - Elevation Apartment Homes, 174 - Redmond Hill, 175 - Vesta, 191 - Inglenook Court, 192 - Ascent, 196 - Salmon Run at Perry Creek, 159 - Foothill Commons, 194 - Pinnacle Sonata, 197 - Stonehedge Village, 195 - Canyon Pointe, 168 - Highlands at Wynhaven\"",
                "Post Orders": [
                    {
                        "id": "attUmRR5Pgj7yomuP",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/kmqjKiJvnUJ-SFZ96NTeUA/nB-PPGlDZee1ft0RrjlZsE8B1SUI7OdUximqRBPUbnIuCWLtmlVc4jfPfaWNFM3qsYvt7LMTcvWw_TQ947HAEp6FQny10BCpyJ3PBm6IkQG692t9i02gwo4u7iampD_nfRCrZLUwPaR5ca20YgA2t-n9MZimwJi1pqoQEzCH8bQ/6Sf3X3hIYx3XfP68-QBDog0dv_UadpiT2z_drgLcrSw",
                        "filename": "174 Map.pdf",
                        "size": 428927,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/hM_w3FzazGmymGil8qUAbQ/FTSK5EKzH9fgKl9v7IW_1ciw7-OG_QyhutDFmrNQeF6Yii11tcEhWokt8a_cCi6Xvj9-Q_nez89YAVgHV6wZKHSkKYyroYeVrx4MaDpd3lhHj1zpSFAE7uObmkccJbaU8zuuNW6ihCTbRtILyFpDXg/yS7Tb1H97IX6Rywcms7pfnfv9FHIprmtufxebGp5Koo",
                                "width": 48,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/DbqS54NQNfyOjLYq2oRg_Q/Wl7NZopHemupksa5ikIvYjrWzOHNT9uGk5x1NfZ5BI21vH5tUh5l-sC38NMx4-qpCzu4vdUxxqumtdAr-aRwnlTk46PX_ppNGGZApYjEpZZpR2ambHqejsPz51N7sxxF9PqxBVsZ5wka735PY1FBxg/4SXcjqxF6uSUr6HFb1EKmdpysdl_QY38PUtE8HizyKI",
                                "width": 689,
                                "height": 512
                            }
                        }
                    },
                    {
                        "id": "attHW13gauc8qEDei",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/7iAubCvf5ZtEg1ljmEhh3w/4aspbXU-Mr9Ca9SaW6u5l8ppvODoRP0Ozf9qDdJAp5xuOuiDyMLoNzWQC6UGMHj0kGKhvC2kG2UntBYKhrqmGQtsOaBkXAbHK9XwhP5fpyLpt1nzRqSQYUEULY0zdwKX6JGi7iLo2t4a7qyZ0KDE9hznp6vZDE6MQvCl_B0ee28/S7c5ABLIB0xR10JsI9akDzNei2k_SPGJZzakI2ZMvWM",
                        "filename": "174 Redmond Hill.pdf",
                        "size": 302826,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/tEQYy7odojK02dKEbS7zAg/3EOS_M1N7fW99akeyoVMlPlJbbPACkHg2W98tE4UUWj8zV6YSFeTpsngItsgEWl_Vk3eljDR0PKVVJ2cKNp5Rgt0swK6DktrBKibQlhuDfrmduQRroHmTDf1ryj_N0553wLAsueFVvhSxRO-hN--9g/s5NgZGSoEbU_7advSHBjxR9W1peq9H1KIuzzDRVg5f4",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/4G2F-goSPMejxQofx3vbyA/ORQaIlq2_Ap9WYX2fn-EwSLBi0fdSuXgJbzt8c2XPlmDjVQmn_fh9lx7z3KWCrCQ_RP0vKYdKEK41eJOTtQ4-3dBPKQis0OQgy0TWWL0LWEWhwK-wOmsUQqoDCBGPZPCqCxAh1HMDvHdVoNje7sK9Q/5gUdVO3ctbFW7PewWnvbqHGYzOmzqnE6C3I5f8QzE5s",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "attbnI7JECCjWPFeh",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/0v-uZq1ghroMU5yS-Az04g/vP0BlX3ii1gB06WhD24w4Tt4VbfzAFmJII9KyCNnjk83cU3YiITWpbpQOsYbpScRxLOP17bqW1pMXjHGxDZd1AZoAtzdTd_Xz7pgxYpvV7Vtt8WN2LSvIW8Nh8DKaXz02DxTvySBCgSDg-yUY1itB588517iiOj0MZXw92ilXI-oNQTalNwfFUQGMBtQzgjC/JxaZvJVjCeLUU0iS9O3EtGYjeSxUhHhAJmqNokt47_4",
                        "filename": "174 - Redmond Hill Lock Up Guide - 05-22-2025.pdf",
                        "size": 919795,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/KgAs2JlZgHDTgS1n7imK5Q/_vUBYDtO_HuZdgKlDsGFSkiKp6PYnisQx9y5KfSM3fdPJJdvWFejqgWDAalSiLliXN9UR9FEJXC-rZ3znJoV_HmsYqFKMfCbdYtqioYnf_fZ-DrpCWBk1YFTD1K2HIukIA8Mpf4XUb-r8NmcQcPvDg/IKCeUBaIuxjKCSvamjrAtbKs3xA4YWxcMd00Q55ShGU",
                                "width": 25,
                                "height": 35
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/77t7qzkulrxBuUDLN67L5Q/hNhk7ceziHjt21xGri4s5IvQEYNhc5cOHvTD55fHd9jAd6X0nvfGekmqrcrN7Aiy9wDNL7sIeDp6VdSDt4vW5GGB3_EhQgjtviBfY7yPenS1iaSiEzYbTKYNCUnERgbUAXR1i8eoEMJTw7RRrYIKMQ/kjXtn32jev3ieSJWO_-5cJXbffFdODoxGtO7uNmr32c",
                                "width": 512,
                                "height": 725
                            }
                        }
                    }
                ],
                "Site Address": "6110 186th Pl NE, Redmond, WA 98052",
                "Google Maps": "https://maps.app.goo.gl/VwPWPr1SQrKkd2Q38",
                "Active": true,
                "Assigned Job Role": [
                    "rectLGnMglyXQB2uM"
                ],
                "Manual sort": "ab"
            }
        },
        {
            "id": "recnjcFi51MecyKjk",
            "createdTime": "2020-05-06T00:00:52.000Z",
            "fields": {
                "Name": "190 - Archstone Redmond Lakeview",
                "Route": [
                    "South Route",
                    "Seasonal (May through Sept)"
                ],
                "PMC": "Avalon",
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "190",
                "Calls": [
                    "reccvz6hSBPlOiWNI",
                    "recxp4xeOkw3bW0dy"
                ],
                "Tagging Vehicles": [
                    "recWGAGJmVdG3ZUkm",
                    "reccRNda6Q3WIGEhN"
                ],
                "Site Name": "Archstone Redmond Lakeview",
                "Calls copy": [
                    "recXshewdnlMPgfHF",
                    "recKg9puzIWacBFCG",
                    "reclLYdxMl7OFmvHW"
                ],
                "Post Orders": [
                    {
                        "id": "attxcix2Wsq9oQpAV",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/16JWc8IZ-Wd3tRk5pu0bkw/b2WDSBYpFDNlvXe0m7q0QEj8ba9LkchKyecU0-DUpy3aPi0HLXQx5jULF7cOVMUbbpEzay9yVuJGEcP4Pq_Sbhiv9HLrQcJNZaygAmpWmRQPF_YfbRw_cvfMHlMiHdN34n2v-T6LSODCHQyw_c9DC2NHjixh5z2b_kBHdHcnhKs/3A8bGUgOVPBQ2HMYAi5BOVQsrq550HQpZ7sn58rUed8",
                        "filename": "190 Map.pdf",
                        "size": 152961,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/Mn4OlxpF9dU3JWBAlw8lHA/rBM2w8WmI3vy6OQN7-g4_-fXEnR8apatQLiii--HD3XMY2z5RJ8GmA7GG64534vCkO7w-oZE2P_-w1GU_0hfelfGbetTQx--lp2Zo5zqMynqqjhnBFMje6lTKtrmL4Xf1tULcnLEVgxYMKmCd3jOoQ/_Vm99dI_LxzW_-ZW2LTZVBmA-JT_ogijJkcfK0rIEt8",
                                "width": 47,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/b5GVZ3mAtzBUQn8PZhLK4A/dMGV8kWzNddNld2OLWWtPyDOGF2OedklNxQQW_-pmKioBxGYIGgcP_4O43_Kq8axvuulzgVAREjtgEiepqt4W9cgTdxjOBeJQiqTjoFIz3IfjY9yNpTYP2LGHgPxOZuLrMj4231y2VFiyXgCz1o6-A/16jazDRvPe4-_MrPzkKnBCXFSyxBXnlu1mdpWUqarmE",
                                "width": 663,
                                "height": 512
                            }
                        }
                    },
                    {
                        "id": "attf3DWg7zbsSkqIU",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/0xWqdHp8uqqFPpuWGnwBgw/icB0W6iebQpHpozFQAzzGJsh0GBqQ5nLL6ePIpEw0NZNxUFaYSgrYsTIUDfvrR7_o_n0YEKHZD6IUaAl9qPnp6xbwtHwqDFNb3XJBsVkd22Nt7cyxoTQJqkwe2Qrxx7UJPZUekua1XRAY4fPUB3kOHkGAzB8IBDuPXXLQewW8oToLfD1fyPpuAU0qSTJJfWD/fMxw1Bewi149Y4DObMSW1Bx1EwFi9YVu63WvLWdoHt4",
                        "filename": "190 Archstone Redmond Lakeview.pdf",
                        "size": 287313,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/e_rIRolgaRbys0oVqyQl8Q/btzPovpajCD4boEuyt9cuG_FCKUsQTdcJaD2ABJQxcep1zH2IaEihZPAWjhxx7w_FhhzsididMDeNqYmQ95mrFOpk0aUBC_fhRgk1TBydlrq8N-vB28KqlmbSU5yc5WX6viZAVLnyelaJWUupud31A/iIZ7D8z66_4r98RAsxcpchyjjp36mVZNqMTEmXEXPNE",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/1zCJ3bwW2Omxj2mL4__VDg/aua3-bMDEEyZclvgnd4QGk9HWEPefnerMPU5It-TF7AqVzU-3AGHHA6fLTNU7Kz3Y15O-PWxtvbvLV05bOIXUko5exrg8u28cLuLIvmaGuui7JJCJiO63Wbnx-giJFgxEeqGinXACHrkelVl_Hs9nw/OgYy64TX7m-OEW-6z-FZ6-QZLN1nxwPSbLqiPLrookw",
                                "width": 512,
                                "height": 663
                            }
                        }
                    }
                ],
                "Site Address": "4250 W Lake Sammamish Pkwy NE, Redmond, WA 98052",
                "Google Maps": "https://maps.app.goo.gl/7mepTLdsejxi3irP7",
                "Active": true,
                "Assigned Job Role": [
                    "rec1UASONUxcvY0m9",
                    "recaX3mGcgrwn2y6S"
                ],
                "Manual sort": "ap"
            }
        },
        {
            "id": "reco92CBVEBFmNvfz",
            "createdTime": "2019-10-01T19:05:14.000Z",
            "fields": {
                "Name": "156 - Cedar Terrace",
                "Route": [
                    "NE Route"
                ],
                "PMC": "Essex",
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "156",
                "Calls": [
                    "recD4TiJFgYJ03MfS",
                    "recsNktOCLbinSiJf",
                    "recKrUstILpWq5JOi",
                    "recJpi8L5bDRIOSOt",
                    "recQ8KZDu98Cm4qY1",
                    "recCvzRntIGgqCiZR",
                    "recThzMICZ2VSo12B",
                    "recDqIlX4l2AY7wSE",
                    "recuozSYqQSLOSvf0",
                    "recPgAFoCVKswl03l",
                    "recbjeUXSQunGJ0e0",
                    "recjIpbAytT3bstEt",
                    "rec8FDbccUo3uAU0c",
                    "recnISSWpOk7s35FD",
                    "recODLEUsBglxLL6X",
                    "recosTZFXaruJv6ub",
                    "recb3Zy2yiO5IZYpp",
                    "recRKGItcyxSwhALr",
                    "recCOyjzWXad4rGzx",
                    "recza0KSb94qDzXzN",
                    "rec8rcmZQfuTjBOpz",
                    "recFGvCZkZBV3Rx8d",
                    "recg5ZE5JzFw9OcGE"
                ],
                "Tagging Vehicles": [
                    "reccYFi3NpYmEIyHg",
                    "recCVkmIs5JWwbASj",
                    "recoL9KJ4pTJEMUlx",
                    "recGPzUiZqs2ULAjF",
                    "rec8YtwLevLKjZJDn",
                    "recfB6vATLhWeDvnR",
                    "recbkUCCOPw2sgEG4",
                    "recfSz3iwdjhRXdDK",
                    "recOASbvuv0EsZCVY",
                    "recEUW0GYlPS3tTIE",
                    "recTJTSUvgVmx7IVG",
                    "recdpXrY5qXC2NweQ",
                    "recSWghuCqcNKG25f",
                    "recB9Ea8V2nVkcvPZ",
                    "reck19S4RAad9MhEN",
                    "recVIT9G4zGY3gLJF",
                    "rec6gK27wq1L97b8t",
                    "receW2qvCE1m2Zgp3",
                    "recJWYfukvg2z79Z1",
                    "recHa1fQxJ806apJV",
                    "rec10rat0yBG3YXeo",
                    "recMurrGhwH5i9qkt",
                    "recvcA5h68F0ubtw0",
                    "rec52mmy7EVEFzh1O",
                    "recwTiAuqWnShEbNQ",
                    "rec8ISAgmuOJgwgAI",
                    "rec7lCj2rkqCvsD6K",
                    "recBPbfids7WirwIc",
                    "recl3hqOV5qoDRYSP",
                    "rectFtYjfHvvm5OUE",
                    "recEYa5fONxtYMtYE",
                    "recKAUVouZSm4TY3B",
                    "recuUqnER7cnrV9CA",
                    "recSsNiuy20QnAPzX",
                    "recorrWm4fD6nVhl3",
                    "recwwMuxL7PnhBHij",
                    "recP8lRMBVGP9mKH5",
                    "recr9jB8sVF8N01ov",
                    "recX9zxog0BoRCjmo",
                    "recMpiz18athTU5GC",
                    "recXjwQYJag3aD41g",
                    "recDNhB4eZhVMMXXo",
                    "recZ6FpXK0nOYl4uU",
                    "rectV5MGvQrPwCWJ6",
                    "recZiBbe1fs3W34tJ",
                    "recDxnWTZaikyPltx",
                    "recG9HsW90DxPCtfv",
                    "recPYJH3XfJjJesqm",
                    "recP7KQI0te7920dD",
                    "recn3JHRpS5KSD31q",
                    "recXCigD0jY5fzTMd",
                    "recu7kpnw5n1VAw0D",
                    "reciSqVb0YGwHf4UZ",
                    "reclVDCzj8dxLzVvg",
                    "recnygvwnX1hFJGLl",
                    "recj9afVNVvyRe5xB",
                    "recVsDpAbsP2SYy9R",
                    "recX2kTBsnqghF4kC",
                    "recGow4Euqy3Ewlbe",
                    "rec1y9qyOiDwO2aTi",
                    "recbxYds6njeDKQN2",
                    "recaZ6G622C7mmvec",
                    "recnsPPuJTk0hGtjM",
                    "recIDIyiRkOPYW8Gi",
                    "recu0yRw3pOyf7JcA",
                    "rec2vjco9T9Wlei2k",
                    "receNX2tNPOHcxknx",
                    "recPyvEVrRUBvdhHa",
                    "reckoJ6CRvzX0zVsR",
                    "receROlkG2srnK1GD",
                    "recFhCN4ecwAVK2QG",
                    "recfy5ryWDzfwdYL2",
                    "recRogzQteR0bdk9a",
                    "recLoCp5lHFyN2heM",
                    "recW8joIQUyZzArbj",
                    "recB5XzBJgewyNVxY",
                    "rec7Vp7yDR7iKwc5P",
                    "rec8wGpOxq39kf5o9",
                    "recDOxY5TcDBlr1Qe",
                    "recbhCyND965DSLU2",
                    "rec0szcJ2ne8SoIBK",
                    "recvKMJiIyDjxqVNC",
                    "rec20OaZSzZSnkjDb",
                    "reckzTkGpgFy1nLUO",
                    "recm3t2YTexLudpGP",
                    "recR1CsEJuu2plaIy",
                    "recG9cNXCkNtse4te",
                    "recGmSu1bL5WAjn3J",
                    "recO5opzcPCG2Mwi4",
                    "reckAkp6oxsy35A1U",
                    "recOkkD1bIG50qOoC",
                    "recpJHAIy27ZyavfF",
                    "reckFJf7nKOFqBhiH",
                    "recstq1HZFLxTvidu",
                    "recYL07kSJa5j9IpK",
                    "recmboyo450RT2FIF",
                    "recPaq43agbWnoXQX",
                    "recO2BaGrWE6KGaq0",
                    "rectEqE8ZkkVAInRX",
                    "recHLi4FqFX5u1oz8",
                    "recENPzfdunx608jx",
                    "recooJQBNbRbBLK46",
                    "recGfQC7JGjfFsb4D",
                    "recsR1yiarRFMoFUg",
                    "reckQfY5noanze6aq",
                    "reczFd910BSMTXQp3",
                    "rechdyDwoxC1frHz4",
                    "recHzz730lj4pJoms",
                    "recezPES7mLrlGGwi",
                    "recOLJZM4PA1nxKzi",
                    "recbmrd5xUAGr3B7G",
                    "reco4J38aCiaPuajd",
                    "recprTBkau6nYoT8F"
                ],
                "Site Name": "Cedar Terrace",
                "COVID Closures": "\"6 - Wandering Creek, 25 - Fairwood Pond, 153 - Castle Creek, 154 - Emerald Ridge, 155 - Sammamish View, 156 - Cedar Terrace, 157 - Bridle Trails, 158 - Park Hill Apts, 159 - Woodland Commons, 161 - Palisades Apts, 167 - Evergreen Heights, 170 - Delano/Bon Terra Apts, 171 - Elevation Apartment Homes, 174 - Redmond Hill, 175 - Vesta, 191 - Inglenook Court, 192 - Ascent, 196 - Salmon Run at Perry Creek, 159 - Foothill Commons, 194 - Pinnacle Sonata, 197 - Stonehedge Village, 195 - Canyon Pointe, 168 - Highlands at Wynhaven\"",
                "Post Orders": [
                    {
                        "id": "attoXbRshs7Ex3Rt7",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/ntuH0CoJKZfHSeZNjE3wcQ/uuHpzzBFVV34Vb_wPZUhsFEuSpc7le-MIKi3ZK3idRdxSLXU3CclzkrAUiqDI43Ey2NWMBO9IOm2TwOzcvo2WeKw7DOXb44PHK7Q32kC5V2frha_2rbbNkRpuOcD2lnX_vbehxRquTijNdZyYHOWSHXH78kHMtWaHuQA1a8ZgcnK47_6ku1qiBBjCXeeFi6N/mZ7_Grq6oYM8MwK-Mj6l2tFTb96amAU8QFCL6H_uJ0Y",
                        "filename": "ESS_CedarTerrace_Premium.pdf",
                        "size": 13202339,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/mjSaPokgIDb8kT7wCXa-2A/66OPmHDoy80fzQ9BsfFlEtfwcD2lG4xZxwpnXy4eX-nmA1aeOTn2jpO85m2KgKGbIgzVwv5FN7VAjBV0DsJaXWbe5NgCPgNdj885UbyRqqvyw3NH_Uj4XzipfRsCUFoLfhPPkkgwuutyWkLEv3CI9g/pGSphX43seo7-5rLQval8AOT8sPvcsN1uYkxwJ1jWbM",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/8CAN2x-SLoJ16MIV57GUXw/kRygaLGbc6F0E9GxKhTGdwjZ0-hmjE4QCHTJvadNjQ3Xn-9NUFfEJL-gm8CtXdKIuUg-hIauZigetxzb2PqTcktu-a4nyhJGQbojXg0_0S64dOle6CTQKPs85lbuCDLQZggPLh-UvbtlQX-zrsQqGg/HiHh89wViZeQOgEgmu5sXyF9Wcc_EE_yHsukStyLR8I",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "attVmQ00hU0POBMtI",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/j9928KiW_3wtiMDsiRKAlA/bOwD_DHqd434vD5ZqmD5WIM1tlGAZrsPmu8cwNfoalNXyXZfAaYi59lF8fBtf2Qw0iXt65EYWyJimZe8mePz_nctLEy1v69GS9jfGhK-x-gxYrL0brg5uycjvLSVgQd-uF3Di4bk5Q_6ST2yNhUddbCx3sgOyziaGkiZIDTSxzU/_T_kPSCz5pALyL5JcCccjmpfmF_XewN6yvvqiNIElFM",
                        "filename": "156 Cedar Terrace.pdf",
                        "size": 312055,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/inme5HHN965hCuWPm8jAdA/quDXJ8_-80TOEn7gpcEeFP7Ou30UHAgs4H0GqvcAjlvAHmxBJKp0JueShst0Qndr9l0hu0b4GOU3TqAd4rF0W-pNmTGqDbiUO5wHpssB5qu8yTGV2KYham8QC6aPghyNzkTAgU2pu_4UwJHczWTIXQ/I6obAbr2CXZgBsTNAtduP_ZbMVj9bcGp2R7GSxDE-oc",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/QAtJBRs1ssCt-2y0_9ANZw/8t8HP4cBE0gb5mWIKoX5B1ahz68Bz0u-h3Oz8XWarR3asN1vW_xL4Pbp6f1zGgNdiUdKf12KUBAbtt4rXlgM52zK3hx7y-wdeuExLqBx6TXQWV7tjRfCr5bvRs3XupBPW9iKG4PeZRy2LFbx1q_YRQ/NquZhE8K2S_Zzanm1UrID-uPcWnhTpLnQuRZRcStOG8",
                                "width": 512,
                                "height": 663
                            }
                        }
                    }
                ],
                "Site Address": "3205 115th Ave NE, Bellevue, WA 98004",
                "Google Maps": "https://maps.app.goo.gl/h9S4TYitD3ngqXhn7",
                "Active": true,
                "Manual sort": "aI"
            }
        },
        {
            "id": "recqs4NSkjQkh0kyt",
            "createdTime": "2021-12-14T00:22:15.000Z",
            "fields": {
                "Name": "188 - Nightingale",
                "Route": [
                    "NE Route",
                    "South Route"
                ],
                "PMC": "AMC",
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "188",
                "Calls": [
                    "recamN8P3Pa6QCH3x",
                    "recNtKUCwvGQDArMI",
                    "recEVAVwhClhH2B61",
                    "rectuRaApjEhMx9V1",
                    "reclKgJHlsYjhmxO9",
                    "receBYHmGYtKGZC3j",
                    "rec7hlzBJT2xbq3fF",
                    "recTVs0iWB7wGIKQh",
                    "rec8BlBZqFKbEL7OA",
                    "recy8Kbv5tn1istIs",
                    "recRizOxlT2m6jR6O",
                    "rec46Hn4P0dHZ7Bia",
                    "recOKhZjxfRCBECf0",
                    "recVJdj8Qj3Fcnk8x",
                    "recxmV0WKbK06VAMM",
                    "rec6eiocV7nd6Nsmv",
                    "recz02QscyP7TEZ5G",
                    "recVS05QkHBznkitK",
                    "recVQFQ6a3ISVgvXG",
                    "recXSU35BbAQ7zMbH"
                ],
                "Tagging Vehicles": [
                    "recLYuRejGn1iX4AP",
                    "recSSWeZJLpYm7jEL"
                ],
                "Site Name": "Nightingale",
                "Calls copy": [
                    "recCBnv277NoiVqVw",
                    "reckE1Tzcn8TUrCJc",
                    "rec9WLLSL4h4PNvDN",
                    "reclQAulHIuuVQNfI",
                    "recVNCeqwPN3NeTFI",
                    "rec2W3IYPQZuiatLF",
                    "recqTDJSyWpk15VJB",
                    "recN3uaLHzb5JswvP"
                ],
                "Property Updates": [
                    "recPcC60A7Vjjw6kN",
                    "rec112XIShDHB2mof",
                    "recNyBDkv75BRwCLf",
                    "recKFLv0tfDWnxz1d"
                ],
                "Post Orders": [
                    {
                        "id": "attG8ynd5qf04QHDI",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/-uCIzmLqyq9uGWh9rK28uw/ZTuT3o1W0DCWOkEsaizDpTJ7IsuDza6unm6C47W4F_xox9s4NGSVayMH3hJUDXTcWy-BtjcS7PzzKDIPWqt_C-9sufvvmLVtStIFuPGilIaaFjfjFWhX8xJfYOcE3um_eHVxb-qaqjIhIpsfX7nQ0Cy9em9Rq-QjGTu09KuJR3w/9NuFb0KVvNlFZl_a5RymFI17uhRUTxwUrsNB8plPxss",
                        "filename": "188 Level 1.pdf",
                        "size": 571465,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/nlkGkacdQhhH3tC5VOm-2Q/Co_IYsv9V_JwZAXLGfa3zyqs2liu6v4pvK3qmeE5T_oAdOoX6c552IxM3kPncUbAW57vx4RdSzteTjCIcx_rfvUbtKb5bXr5Ir5Db1k_WPLxy59d9Sm-iC7NeL4k84KSWZBV3cZ0lUdnBcpWFK0VQg/I2f1Ufci1IoCU4zCghHC85fgP1cGdOKiBSglI51zFWM",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/NotU4n6FM8mKg1cGVKyjNA/Tz79ZhzTV5RUsiG0nCd_x86oT9_LluH3S-6z-CzwjWi9wnaWOOpf41lsOG6fY4bbH4Ad2pDXvlpttUvUi9AgnnK58QR-3P-3Qso4oAom5OR_MPuiWj8Y0r-okqtNfTqQMnZ3Sp4TszAHwsSe75439Q/TDHFnEs4PD_CPf99RPsLotMsKfUdU9tAgL-bT8W0lPQ",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "atteouxbYud7hDm35",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/LS7hb5sHUVbfM3YZkQsZoA/cmRabE8gzuHAabycpSjWBHbkJi2TwtbRsngh_1mAEybWlw6Dwslntoe_lV7Ph0773U2o1_3eVfGXP3cxU77XSYnNXcDN-RmpLpKYAbv1ShBDMtfJXTZLRqeQtK369TXaimODuYaJ3MhU4H1zV0W2TYj8SOzRNHkXflLXsp38_ts/VUcNCg1VwO73hSITpZQjg7o0xkVT8QymeR1gc5-SnTY",
                        "filename": "188 Level 7.pdf",
                        "size": 518487,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/psrtVgtUq0gfDbQQn1oESA/g3ARTLrx1P1KBXn_8cP6NplMG4vunQUfnovS6YF3FByk3Xbe0VfTW3aseeN07-aHAvVD2nZrKFZNHbQqU0FLttA2LjaG3fnVykHntCqp3QeuEngkP-I9mn-lOWTxHLiXCAR5cO7g3A_QWrS6DnbeLA/axkTvALyrMcxUMUQ_exMW-R590WkXP08_xgt2MODLhE",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/VIwU8AU-UMFbhtT6YkAfpw/ZctNl2XfVBOwx1QEZf31OjtlJDBnID9S7fgSSTFHWW5909I0zyPAtk9qjurFY9XcbNyVQIhiLJHuQ7LfGH1Zo9JQMCTQeqLNHdWfLn-IKLQOdI1zKydMvc4PRNAm8VMn83MynLf6Vr2nMySCp0q2iA/54QFWnchpM5WF1XyTmf-ogA2nSEW8s9drZVNuQr2rA4",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "att6TVFg05UUMbfvE",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/OXrRZmMvz_Zo3tkLvANsRQ/jBXqTYO99w5JnzD3wREHNhLJ2TDuXcTGFg3FZ7H7FIcs9STHYZbPOl0NIE31bskBmHXhCTUhAQzoecutxPE4kdyJQmjKrjXwPx3l-lbm2uc0mrf36J9bM-WnpTHnfAHM4P4eg1F2x0_D-9lXZVip6N9a5r8IEjcxd1Bx4UyP_-4CxXpf_TjzxBsLWMxHiK2E/qsgNQaTza82dXDHVUKWO1UDQsavExvMU8MZGUMUmzC8",
                        "filename": "188 Nighingale Checkpoints.pdf",
                        "size": 48868382,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/QgeOH10yLVBFlJUe1WSaOg/v2l2aXUIxFmj8GXO6IrknKtclvh0fnTduEXMSkumVT0D9h2_Qcy3KiJaA9pPKw1gZYdyS9uZzVvE_J56LMLtZSs6WQ5mZSQNR9Tx-4pGWOHiJk23QMQCOeRrTbna94mLIfI7_uzfIfb05UseXLJUQQ/DJcZAMWxinSr2Fl-El5HHY2ylBCj-U_iltCgVrOa25Q",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/y9_L7rvCNnGU0QyPi3Su3w/MpPBoAQnAkgXLpBc2p7yUXK38RFzCQD1xvLaolBXzSd_bLTWLvL8BzQmxAy-Lktfv5VOgDg71NqnTVd-b6uaowrygQGzRMS9TI-Ke5b1rKAZ9PMYnKHXdTXg58b05fnlT46Pazxvm-04JrP0PVMwgg/3viXqBWjgJZzDailknNpI1BRpEAOHpQtPe1ETdwUuBs",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "attcOQKQenW5dOeS1",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/steFTwaIGuXyQ5Uk3TiMsA/C5cB_aBhqS8VwwC8Bm-Iw147TyqzGlq7BD_UH-XS89r5iTrsVlnDCwI2rN3cSqftRWXpTV3hHpjqxoHYGU8SkUk1Dl1I3OAx0ROzIbraVpQqVEQ7esmIhfMs0TLfvFy2bxId63Pz8xvKWlAZJMocTEdMs_iFnPxSMEVGbvwnMHI/9Ieu727k1nm80zaIajctzinlBFGC59BIV7mWVEuHRTg",
                        "filename": "188 Nighingale.pdf",
                        "size": 273672,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/w4ztX2HzC4cFlEWnQGJh1A/W-DyJ1n-tLYDVXY7xCgBAzxQr8G4LlSpOUNkk0sQZM3WGYxY6kUCCYfsH7qqvpEZAoUboEwmpeUa6-vWEmb5rEjnxZpBjybkJ7Hf3YqUm-ZTSce8vnEpMqJNkBL6luZIc568jAi0Nyio4y8EZ_vKSA/PQzZH1pivupSpIUQhsIUadcJ_xG4IIEM5fk13YuM3qk",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/slh4sjiBaF1HDj5dTUeyeQ/hetA-252g8i1Fk2IOI-2fv8HFOvqQAOOSF_bsLbMZoZiM-Cb9amaF-bz9jEMbBVRvgmWZnHX8fwy15wVjU4NPYGFauGxKCDurPZt324kYomo7m1fe8_PFiReIZIB-ECz6p-GiFGW3cagoVz7kc1QRg/AislPZ4VOhwc_Y-K624KN2xhRPILXtd8YGBzIUHzcdA",
                                "width": 512,
                                "height": 663
                            }
                        }
                    }
                ],
                "Site Address": "2651 156th Ave NE, Redmond, WA 98052",
                "Google Maps": "https://maps.app.goo.gl/MPPpKmGqLMhy7s4A6",
                "Active": true,
                "Assigned Job Role": [
                    "rec649AMeQfZf0ozi",
                    "rec1UASONUxcvY0m9",
                    "rectLGnMglyXQB2uM"
                ],
                "Manual sort": "ao"
            }
        },
        {
            "id": "recrhLUD0obWDG1JF",
            "createdTime": "2024-05-23T21:12:27.000Z",
            "fields": {
                "Name": "92 - Copper Way Apartments",
                "Route": [
                    "Temporary"
                ],
                "PMC": "Inland Construction",
                "Status": [
                    "Temporary Onsite"
                ],
                "AOG Property Code": "92",
                "Site Name": "Copper Way Apartments",
                "Post Orders": [
                    {
                        "id": "attFsl8yrgdYkyWmO",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/vRXblMnewzFjbvjHTBUcsQ/plzu9rYv5mMeHXBUgldPLaq64WBdSo3nDREMZzCWj4cRFwubfNtO-wR2nkda7KKn6YVd86FqsPu4l54fYKW6OB4jXC250z-YAij4i_y87i3WeVS58SMRs3BEbkjZ-U-38Kej5te1tr883-RI3WAS-S7qKjBpV9zLFgeeDbB0WtQ/zOzRWZVi5AE3SofEHovKiOU42Jkgzm64lgMx7C3Mk0Y",
                        "filename": "92 - Spanaway.pdf",
                        "size": 2626901,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/G-idqv8xXA-bDNS_BuH8Xg/EJzwIA1DzWrnOAjF7LEWfDlgPnyoI5Qd5F7z3lJjcv15FU8RiPcPpqeAmO8B2aDOHxHVAolkg1DYF1Y93Cfm8LxfdVR9EiDnQIBXxR_rK7kWexpyQkvrzagKT5gDpaKFEIw706tGZYSBIFHvtnjJsQ/amUFwr8zZ3yDAIImXr1jHmv5mGcxYTwjrHLcz0xcb2U",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/4yKBvr3Kt2nqOnXH7CB5Lg/2lZOy4x7p0Pw8fKS0Sf5ny1D0E-1I6U5yRwnqidVnsfcc9hvzRueVe2cg6tM8pGTGq6q-I8vvRFnRGb32I1sE934CS0Ez0-tI_rqtxlxMAfdEB7tz3XgUH7McgzZHOvLLhT_rgeQqDKFO3H-jNAkZg/uaCWXqB0WgFoFcKPMVAmdLxSa6bzegU0RsRC_8ZJ0Hg",
                                "width": 512,
                                "height": 663
                            }
                        }
                    }
                ],
                "Sample Report": [
                    {
                        "id": "att8Npqk9HRBEAYtG",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/kQFkmi93C4OapvC1jiZ2Jg/_ShxMLqiTvv-2M-vktnmr1AOQBvoENg90TXUAzSJsFZ6Fay9Ra02wfMR0kXXBG2L-Khz4w-zcSz83cJNDccrT-jvGvHVzv2GkwKHmxKxZYQU6YeY-lw9WxVp_vQvyTTqnUtIT-TSQRAPHiKgKSYLS4-RmGRe-FYRC1is7HV1SJU/Dt5s77_QANqahoENe_ENmOnrLz1eXzhY0zVgmksHPxU",
                        "filename": "2024-02-24 10.14.09.pdf",
                        "size": 3437277,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/jaODoXAf4qUtddfKVNGxWw/hyGG3pj6LJ4_t4EDS42gKKFjSj-_tyD05aeY1PJoUwOywH-dvlFmlL7jfxfWujmJo-Ah2hxQGri55kxZHJ51bdHA7oVGgg4TUCMWz6Q_pog7agfXgJm8Zr8lMU0bK_78D6q9UNZagUJM2wHcFi8blQ/SEGTGsSm6G_ee55e1eF99J-ydE7-F1tbqbUhrBNcEHI",
                                "width": 25,
                                "height": 35
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/Nch3XksasnwFU1n7AX42sQ/mANvdBHmx21HMxgiS3L4Va2EFY8Gd9em3_pmrn-rrJj3TvXaz-jAJOI1HTVLd2LGGa78UIKajFqkCtemV7BWWfibSGhwiFvW9y5ncQg23wTDmRae6hHs4IyRwfy23ohtZvvMaQPLYAVZuwukK2B0KA/GIBBeo9p0sm5wiAbNuIsUxhnL6ExGQgNHpUrwDpMx8c",
                                "width": 512,
                                "height": 725
                            }
                        }
                    }
                ],
                "Site Address": "19422 Mountain Hwy E, Spanaway, WA 98387",
                "Google Maps": "https://maps.app.goo.gl/X3r3t4JsDQSQGNQQ8",
                "Fast Field Username": "39@aogsecurity.com",
                "Fast Field Password": "Guard2021",
                "Assigned Job Role": [
                    "recfxFNkbcxBu6UL7"
                ],
                "Manual sort": "aB"
            }
        },
        {
            "id": "recrueThNDsvVguQK",
            "createdTime": "2019-10-01T19:05:14.000Z",
            "fields": {
                "Name": "171 - Elevation Apartment Homes",
                "Route": [
                    "South Route"
                ],
                "PMC": "Essex",
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "171",
                "Calls": [
                    "rec8CZR5CKWcolzyj",
                    "recDOFAGiiFqGXhKA",
                    "recRVOBvL1rus6hN0",
                    "rece27oEBfw0ErSlG",
                    "recStJIFGVJ74vpO8"
                ],
                "Site Name": "Elevation Apartment Homes",
                "Property Updates": [
                    "recxRBDgQXje4vfUX",
                    "reci0AXFwr89ipgak"
                ],
                "COVID Closures": "\"6 - Wandering Creek, 25 - Fairwood Pond, 153 - Castle Creek, 154 - Emerald Ridge, 155 - Sammamish View, 156 - Cedar Terrace, 157 - Bridle Trails, 158 - Park Hill Apts, 159 - Woodland Commons, 161 - Palisades Apts, 167 - Evergreen Heights, 170 - Delano/Bon Terra Apts, 171 - Elevation Apartment Homes, 174 - Redmond Hill, 175 - Vesta, 191 - Inglenook Court, 192 - Ascent, 196 - Salmon Run at Perry Creek, 159 - Foothill Commons, 194 - Pinnacle Sonata, 197 - Stonehedge Village, 195 - Canyon Pointe, 168 - Highlands at Wynhaven\"",
                "Post Orders": [
                    {
                        "id": "att0wsjaerc7H0Vsh",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/ITyRP0YyT7fbOrC1hyLTtw/Kophhxste3ty1rPdBwfePf1nEIgP-pyDgfaJefZbqnRsTvVEoaAOrkGxkSebb5Bv8MByVJAnjwuk3xStNLn0cbDx5WiBfmlsEHXeHCgi85-bPeROjrk-kTzuY8VMtNs6aCBNrTNZdAEo96hFmFmqyRSiVFopB5YLDgYY-pDJfWw/LAj2PHHU5hyz1524LJcDt7NDNKePMiFUPN3YIkjqCTk",
                        "filename": "171 Map.pdf",
                        "size": 12481610,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/qNYhHeKY9cgxNRAPOqe6rQ/Bcwd_LyKisiyjZxMoeRadhCDkR-SglkyezAvPQituGq--25JRW1Hb4vy_1hTL0DpvkmQI0-xukREpLr1vOGz3LPOkmoNOC6vj0kbWNuBsGnrAgaEN8YiBdnyJPGXUvQxhKu1xZlWC8qkG5guDFGJMA/5i83hVrLbYA3a-fUpR7D7_Yt4--ixawhDikfWob8Qc8",
                                "width": 47,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/oePNXNDCNjKaPtg0Tol91Q/MbWguoOHuQCq82UEH9kqxSGB--bNwhxz-VBgNyXRiQzvT53Ok8Z5np89GoWZxese4ltm4b7W8zUdW8qde0a4eVVXNnLU8tJorSHspeIKUXESYnioGT_uCoyvmL3Jt2986cz5UQXI5-NtH6TdmCjOwA/v70q5h9qhGCz6OrEYFXyw4TNtf9NrWNwIcXx7SJVLEc",
                                "width": 663,
                                "height": 512
                            }
                        }
                    },
                    {
                        "id": "attFkbOzxHcwe798V",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/g-wwI4CqE_19R_xB0TeHIw/czeeJR109fb6KW90YcJ3tOVgIof5qeFBx6Zbf9gQUQit0K_R_93MFEmd9Syn4QZxpDq4Z71bYof5DSjI0uZgnNophkPJej6frTbbK6lNvJJFJrkV2MOZQAYNReuVanKX0c0KTxfkp4Mqjts9q4DuC17nj7PQD9HBjjY3Wh9ftgQ/vnON67OnTVfH5Y6kIWrmpjmHvhWrI2T83ASZMIKpErI",
                        "filename": "171 Elevation APTS.pdf",
                        "size": 282639,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/LiJAKNNtkfAmpXUk7j8q0Q/UI7Zd7yiWwYdKlyMYFn-vb23S2PSPukqKnFAEafDi1KcYU-A3HxHuhxdhwsC3v-vLw86hz4tK6-5qKUi2erdwM1PwDPvQzgt4oGv_AmSPCDBumOyE1rAPh_VhryGFYlAf7Jtstc2qyq-PG6Qrc2K8w/kq6ctENS3T8MWoZmDIxN4HltcHscSEh2skNcSZn2Gs0",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/c6osZ8Givx9hp6l9jAeI8w/2H_sWvIEdea_BB_FpiktTsLAVPmzfExrmds08O8CeA7aCA0LtaHEboH2AET3UEd1FEEQLa0wlipUjw1ep_sTpxtAXdttzXSy_HNFqHU9awdLMtBPZ3H07-IivcVZlpQ9pNa3qwChm4WCNOXni4helA/KlrJYJsSEy_9JME_gkiPdmHh8SWFbqFax5JZ4RQ3TAw",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "attOvaaBWwMIDo5KA",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/ldKiqdTywaB_U_6NqzJm-Q/D01NQo_pSXrm-DkbADtzllRGonV5-awW8ODLF8lb2PJukmZ3nfASsBlUI2PnvbbQdExgYUZrtR-xitY6y4uFPe18ggcjxsO3NJorQhCPyvBSVoF55DvHC4kE2yRWXveolVZguHIwALy70jiDF-etlg_zDUF68A21dKc1k_PSZfZmP5mPjZieKlPGHAxte3oJhRRnbmu8d7bxU6s5cL1tSA/3SOIDIZj4E1afgk0LT1GJWWtaYxOmn83ZwY6VFjEDgc",
                        "filename": "171 - Elevation Apartment Homes Lock Up Guide - 05-24-2025.pdf",
                        "size": 862892,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/JzReDLrisKzzqf83BJQ4vQ/NgIOpUfZj5Pr_E3kDGpMh2ghI4nwoCzjTt_yK2baWTiWVgB7_H3hNBNX6dRoBI0x4Jt0WK3PjqcBprgs5vIxuLK2YKzuY2x5Dk0sW-ALG2ViCuJzJLyZxYF8K9kDQSL_FSAeq0FkACG-52ECpOapWw/ycxG9nYmLJiTq1JGgd5G7t-TIM6jrKTZi4ptVCHCIXo",
                                "width": 25,
                                "height": 35
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/N4_FxmPUWm-w3g-nNwHiBQ/i_0BgcDJYmvqB5tjzKgEPFLsJjguuSJhl2mDbyHvX1cvLpkblubUwu6Ki-Lh0B-vP02sB_WWpYrLBsMEph9vtRJv_sly1HzxHmUHYV7sEX6ZS9EVEuJOJDgOfB4v4KMG8K0oW9qhsB5oYW1Szw2HbA/7UQ-jStDjCEVfYUel7wZciFmivwESqzs9-B98qSBQns",
                                "width": 512,
                                "height": 725
                            }
                        }
                    }
                ],
                "Site Address": "17202 NE 85th Pl, Redmond, WA 98052",
                "Google Maps": "https://maps.app.goo.gl/Z4MMagR5qBWWSzo3A",
                "Active": true,
                "Assigned Job Role": [
                    "rectLGnMglyXQB2uM"
                ],
                "Manual sort": "aY"
            }
        },
        {
            "id": "recseymSgWxgrZwTP",
            "createdTime": "2020-08-02T04:45:15.000Z",
            "fields": {
                "Name": "151 - Avalon Newcastle Commons",
                "Route": [
                    "South Route",
                    "NE Route"
                ],
                "PMC": "Avalon",
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "151",
                "Calls": [
                    "recqh9bhfWKS4zSeo",
                    "rec2BvE7s7U7OYUdl",
                    "recqTQzxijoi50vSM",
                    "recNGyFvPpQRb5Ysv",
                    "recNn5rInwsowyuKd",
                    "rec4bKlyCRkwaR7uX",
                    "recAZMOiezKJdiGEk",
                    "rec2HdZDQORIvpRT9",
                    "recTvfVo5Na8i5T4C",
                    "recxONdBuwR7hPA4Z",
                    "recu3PqGLELOThYX1",
                    "rec2I6v5l77sHZPi8",
                    "recZkqpgGbhAkDCoi",
                    "recvRqcIUYtqqanxY",
                    "recS0HxTcR6qcNiIF",
                    "recFVDwOO4cUtGzZX",
                    "recBLnCPPBamEbCB5",
                    "recIeyD9mDwHf84vz",
                    "recgaUurxX6E65wZO",
                    "recGUhbTKYRhPrza1",
                    "recFKyXUy814aPQp4",
                    "recbBwtHEQKCxBSbU",
                    "recuKt6aQnx3kyhOj",
                    "rechhWeluyuPkAqcl",
                    "recZCOm7pzIy3iVgY",
                    "rec5YXkhAYxPj352g",
                    "recE0ImpEdBijEToP",
                    "rechmjDwT7JmVwj7l",
                    "recYHzH8oS0lTPxIR",
                    "recqyAxo2nlD26arF"
                ],
                "Tagging Vehicles": [
                    "rec2im72OgTjHO5Si",
                    "recWHVoefrsIF657a",
                    "recH3oV5Ko6yIOJ2E",
                    "recmjvBjdxbOJoGNr",
                    "rectv5PNeFL2rDdbH",
                    "rec8YQ2dJ4QJRV9mj",
                    "recTsopF7YfeAyK0P",
                    "recJS0TyJolztMN7g",
                    "rec4x0HHWdeDLQjUX",
                    "rectrttVCaBfwRXOf",
                    "recjCvZ3KuIYF37b3",
                    "recA6JKNiDu3vqaUM",
                    "recqFEMLY9YBEpR2d",
                    "recDejJhBtzzZwNKk",
                    "recNI6kveZboSfdfX"
                ],
                "Site Name": "Avalon Newcastle Commons",
                "Calls copy": [
                    "recskgakWm7eBxGNh",
                    "recNyJwtlHNTSU1Wf",
                    "rec3I05il9WyUEnmQ",
                    "recDjHE5Iy34RUNzJ",
                    "recyFwpj85Ir12UaK",
                    "rec2h3r0azo4GN8yg",
                    "recrEeofxwCdtuiNT",
                    "recZ9faVqyC2S8oMs",
                    "recU4tmlOfhL7ELTH",
                    "recekccaTIp3nsteL",
                    "recOLNfct8XT8lL1i",
                    "recB9EtnM3TtWVVW5",
                    "recC4Z1X1kn6WG0JQ",
                    "recvoCpwOcGp2U2gS",
                    "rec116El991Ap3hbk",
                    "recOovPb7ZHvReQUU",
                    "recbphiuCSrAGkqwu",
                    "recD4BUeLCvJpSpMj",
                    "recfmQs0nFX070I2g",
                    "recMvtNNX1iAPLgaL",
                    "recxnlWxR9UyU96LT",
                    "recwi8MnnU1uqDFdA",
                    "recleAOlFR9fc6o6Y",
                    "recpVLXCQFMf5KQty",
                    "reclLF6IwmUBypZqr",
                    "recy1l4vgyrogpQEU",
                    "recp8xX5mfJyWYdKS",
                    "rec4mGeoAgXHSMBi5"
                ],
                "Property Updates": [
                    "recrhJSywdIeZ6s7o",
                    "recI6Mw2hL7czHjJb",
                    "rec26EbSmuo86lkwi",
                    "recCkQ5bLyjIFPiBF",
                    "recpOlDkFUmEFPLWU",
                    "rectBktWDpDuoCKjs",
                    "recrK6MkV9aeFEqkj",
                    "recVeBb21TxQf4BGq",
                    "recXwoQJ3BY2lZ5EB",
                    "recTHp5hc0FOQ5lBw",
                    "reciMZEQQokQTkKe3",
                    "recxlvfeIZPlWYkuz"
                ],
                "Post Orders": [
                    {
                        "id": "attIMiiasByWkdvGb",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/GMZKfhYkzrDRwDGDo906_Q/E1qqwnvizTppkfeDi03nRgglAx83eOmFpXLpbX06EbPC39zWIE3EKHnyf4x5y1f2ey4oxMMx3c-oTqH_Rr2bK_AuHHO8Kfq1yO-KtJjtRwb9EYJZuJ8WJZF6TBEqTJov-71iIhT3BKorPtYDe51TS2c-3p-ynBC5z20lNjJ8jMw/4ifqZOBb3PCHkjiDBoaDgeVAwxwN6nqGmqls88GkUWs",
                        "filename": "Map of Phase I.pdf",
                        "size": 2366814,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/-iYC3PKH1gKTkxV9O5fBwQ/twLN-SOf7OhXRxzxj5bfBGo0tJ3loioS02Zv3qhGi48_xGyYPe8j0wH7NprE6YKlE0OKXuhcpMUfM_gCRmUQHYkXTtwo4PMFCD57YMlBLOeSqslIr-SNvY69-35D-ElaOyrU6FSCKnmBYTAwm_AG1Q/6T60Th-qgBzAzH4SxmGxGPppmZ9-_f_WEsckStJBO3M",
                                "width": 47,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/yHuS5y8tZOYpgMLheZxsoQ/xDnjjs_-bSFRk9SJ1VJHhpDS-Cycs0UA4mUKrq5LbNJ3DHjB9KvW---sU5j9meOKyqmDR3F9c3iST67z5WDXEDD63t9PY3ri0W4N9e0fxIXcAYGx1yALgNSU6tuqOQxDTeUGK4R32v6Z9QGZZ5O6mQ/FUnVhLlvNtaMGbyamIi_Ku5goum0Fk-eaCjoBUc9KEE",
                                "width": 670,
                                "height": 512
                            }
                        }
                    },
                    {
                        "id": "attJKdxwBJVJDRCll",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/6FeBc4h2ve4MyQ4BJ8qjeQ/0Bo1KLiX-Q4c7r0FnYxR87ZO4DVoiUQELyaP-ANtJPenZn7NLEe3_tLGs8Sz3Ze9EQMcXvTgN0cSelpkt1GygjiDLlhdvdsJknPet1dJRFzaC1cPxy14eURM97vbL5M-UmoptQDroyFpB2-HsStKp8bnBNqz6TjIfR579iqs4RDlm5S3LtHsTyFHgSVBFwRT/MkImo2vIaOvupQ8dYZPri-6QqoBEoOI2XFi9KoNbkNA",
                        "filename": "Community Map Phase I and Phase II.pdf",
                        "size": 26184481,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/_bMaGK1pBVhu88_PC3iY5g/wAtyXD_IKaahmitk8PsHnSFl374PQStUCaxt4InQMRCRHipQyowERkaI6Gr4Mr9ExlViwRPyxp84PCq6FCMv2D4d5-GC4skP8XLF3Q_UIvsf4xNkh08tSr7kAgCVwiQ3Vj6MgffSzjzMAP4GraqCYA/zPOEbDX29HRm-CIVlmE7Jemtp3d7D8jobyciMMMnf_8",
                                "width": 47,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/z8FtRIYGGY4mQJrzAzFNzA/R43mYb1ull7H120Adqkgt4Xycqu4Syh4cyZ1gIIiugI8woo5VNZ8weClkUBFmvE2OlXqAb00DSOv_NdfCb4WRogZgGAsUUQCptPUL3Gsg-aIR76qzAwAODKVr23gzHjbRawt-EIEuNUueMT5pD0jVA/_Or35v1vSHhFZNKfdkFRnzU4f8bcfuHzQP3fNUbbybM",
                                "width": 663,
                                "height": 512
                            }
                        }
                    },
                    {
                        "id": "attY5oyTrOoe4SZqP",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/khRDAYKn0dpJQwD4OnTU6w/X5hDS82CqTxggSYoY8-XgHiVuQOu6guM0TZXdyTGLJfgmJEej446ufnBJgW5JR8m4gjtC0b9tUetwgo5ysk3g-4MRFWjFvgG4VlXIq-J5dpvxUoqMsBrbaufEsYHL2NbWvEqojkcApbTXSmdiQUM5pO7ocsBY-vIzU_cWJuunGtu1PsqfeZchj_Us8OzhZLB/KdMBs98L9JeszwEHh8nyO8a0PlCrOqSg116jdGGbrUM",
                        "filename": "151 Resident APP Mobile MX RESIDENT FAQs (3).pdf",
                        "size": 143009,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/5hqtzuOQu-8QfiG5fjz3IQ/iiVDa_gz4vMfxOUd-b52kH5yurxpW-8y75ZVFr5k64TYt9lNTBJ_iB85cOA0uzX16CLkRqi9l-wj-yIDfAF6GoL0rwyyJlMUt3JFFiKoVcgTIz5Abuo7jtEhhgSxI1AX_vF9zWE1P1RWB0SjIlYAtg/Jbd-IqvM9v-SudeX04CgrRz2EYSUE8fHakOuPeBa7rc",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/QyuTyBQt50xklHCJOncHqQ/9UGNX81n95Gi-aKvw5KLr1YIowlJGojjOkQBJ7nkGLvzbwrQKNQREJyTewtBqO3W1qy33Vw9ilkW0jW3J0n7lUS2UhU5NunoXijZ_gKI0NeevXw9FBoi040GGyMndCyZ5cmzDJmsgL6FMSnQqu-idw/FIchNVt27-rfHu_D3-TO6k78pACFmVrPlenpV3eCSew",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "attAXVaBgIpSckXv9",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/I613nq21pBRJcTwXCH8hoQ/gNSWeDGUX0mP4DqS_F5dCoK-IJkPvsYi9m84Am5ip1IDkTujxUI8Z65ldPVFBT2dYwLMoK0YfWHzevAK0659HHWRDq4B1prvxpC98GLWBtFxBponlIw_SF-Ha3v7waPVinBgLVFsDWRlU_SumJlTDnG9rb2TdPcdx4UrdYXfuWLjjWQ74wpkz1UH1Pd2Q9Mf/8x8QUY4ER6d1nqmBJxwGCXtQHbO3P4aItzK0e_XcPOA",
                        "filename": "151 Avalon Newcastle Commons.pdf",
                        "size": 94475,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/IVM8h6M0uRl5CJ2T94pqIg/d0lvP4-dEyhspqwyLEVa00dP1xD079919cJyV6V5LoQyje5fTc0iZTCAnHshmDPpusmDDbeC8a2P7KhLVNtoPPFkrxvG6BSh3qgiLIURAtn-7f1ObJ3O7eM3benjPyYY1CTpEojPkD7p5YZMjlQINw/Ss6OYfMS4wo6XmH93UcldMWWuOLDWRjIVlFUbTcP8Zc",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/1ysxMs-DpfR5k_2Y8Rwy0g/yUUzyxnPnO8Hdqwel_0ltKDeMlMK7UVEgMU5wnPIvIC-FJ2O2NtYRBhwyqgkZqV6a6WM851uyvRXbGYgx6BxlmFnOxb9Ft4cK1SS0V_wuMg1TFNiUY4maLaHc5jSIArkPed472vNBDvpVJ9v6qJ8SA/8TSmR6Fx7rWEE156DobuFndGz0N_0qoq4f9jGu3PSnE",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "attssR0v9v3urBGyW",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/kD9wxuSOE2tc9FCdUmZzhg/-J9_zv9T1KS3IjIijSWcZ_k2Km7UtBy51xn8F1wWHry9t8cGSXDuJ2zeNRdi2EzuPeah27sIerkF3m7ptsn4lPgvy4BYKnVR3DwP1h7L_qUkbDuBIwOaLvQwBMW3Eoco01JINvmKqY8iT3WZoyfwH10ZaOdgesEIdGDIUyrZIxuTQdJvKIh59_X3W4Q7hQHeWxV645TVZOFf3_EMBCzsUA/A8vYE9_N4g0BlG6452FJPZ2l1Yfjsjnugf_MpuJLYNY",
                        "filename": "151 - Avalon Newcastle Commons Lock Up Guide - 05-21-2025.pdf",
                        "size": 822277,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/BqtDfdQc46xOjACGcQSfEg/fLR5KVmCgqSu7XDEaivT-2GL2Kk-juYEMOBg6GUd4OdRNiEOyJfB4VhDwDm9IncuR91C3OBw5nglhvLXY_OKl3oTmJ3Rlxp1hPhp_BX8UG-ZNpCzkP3hToFNNzme_L5m7OH_h9xnRMzwdMZ2qfN7gg/7f2_6ol8pMXiiqhGPMGMNyy5I6RH7CZy11LJ9ZW_4Fc",
                                "width": 25,
                                "height": 35
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/nyit0Bix44Yl7BiZE2bYiw/OXKYn8WOk-9MFKaReIQ3wMyPZRgSJ21s9NMb069tCx8EaSWluyzjMRaxAB6JKuzx_btvefOe9G1pOe_M1w16pYmY6x4QVUCnvlJNRpTrBIkeTS2IQLn4q4Xk82RHnzU_95dKYdXPE0zOFqXLhiUDgA/Y6ira4shpbfq9iOCiLfnfTCGH7nVS1qKDq5H94UwrJ4",
                                "width": 512,
                                "height": 725
                            }
                        }
                    }
                ],
                "Site Address": "13398 Newcastle Commons Dr, Newcastle, WA 98059",
                "Google Maps": "https://maps.app.goo.gl/oVq5PBAPYnPPDhbr5",
                "Active": true,
                "Assigned Job Role": [
                    "rec1UASONUxcvY0m9",
                    "rectLGnMglyXQB2uM",
                    "rec9kTnA99Kl08hjc"
                ],
                "Manual sort": "aD"
            }
        },
        {
            "id": "rectu2mCSk0htQ8Ig",
            "createdTime": "2019-10-01T19:05:14.000Z",
            "fields": {
                "Name": "185 - AVA Esterra Park",
                "Route": [
                    "South Route"
                ],
                "PMC": "Avalon",
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "185",
                "Site Name": "AVA Esterra Park",
                "Manual sort": "al"
            }
        },
        {
            "id": "recu3ovqdup67U7ga",
            "createdTime": "2019-10-01T19:05:14.000Z",
            "fields": {
                "Name": "157 - Bridle Trails",
                "Route": [
                    "NE Route"
                ],
                "PMC": "Essex",
                "Status": [
                    "Patrol Monthly",
                    "Temporary Onsite"
                ],
                "AOG Property Code": "157",
                "Calls": [
                    "recjTOr8YKO2m5ndQ",
                    "rec70LmURtvMtBiGB",
                    "recAXmeS9lAtkAAtR",
                    "recnJ7j49EBszO6B1",
                    "recdklRb0AINzvSXW",
                    "recoFo4zfvNTd1qsl"
                ],
                "Site Name": "Bridle Trails",
                "Calls copy": [
                    "recy58PMMUIhWsGp1",
                    "recwbisM0QXqPgVrW",
                    "recku1mXXbhLSWB8l",
                    "recyj2NVRooI43EX5"
                ],
                "COVID Closures": "\"6 - Wandering Creek, 25 - Fairwood Pond, 153 - Castle Creek, 154 - Emerald Ridge, 155 - Sammamish View, 156 - Cedar Terrace, 157 - Bridle Trails, 158 - Park Hill Apts, 159 - Woodland Commons, 161 - Palisades Apts, 167 - Evergreen Heights, 170 - Delano/Bon Terra Apts, 171 - Elevation Apartment Homes, 174 - Redmond Hill, 175 - Vesta, 191 - Inglenook Court, 192 - Ascent, 196 - Salmon Run at Perry Creek, 159 - Foothill Commons, 194 - Pinnacle Sonata, 197 - Stonehedge Village, 195 - Canyon Pointe, 168 - Highlands at Wynhaven\"",
                "Post Orders": [
                    {
                        "id": "attAckamlHvU7qtBf",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/ftWSnPDDDEAGIywMuhm_ZQ/PnGvsWXWJp4YDEuV_qrXko9FrXHm-FXIkpfQ0lSeIwEiOMrOw85aXAsDGmhkAsAzfj_Bv48_rJmc16pbxFu5jiJwZa38Q95AH0PSGJjLTwFoqv3pgVpk31bxgplRehyKR71A-_U2xXjrY2BcQzHZpiJLiHiGYLGH_IwJlUX_vxTrRD-mDQu7eX9rNrVfKQ7D/eBn8vZltwZfd0gntjujciSErWR4BAIqxvrpfrge8-9U",
                        "filename": "ESS_BridleTrails_Premium.pdf",
                        "size": 5098508,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/vWUpy-q462Qd8tLhUoc_dQ/FQX_0pQHEfI1l0yWA33SJJCvuFzo_0kj37hOxUBqfqBJ1ytn05uJsbVOe--sP6A5XTJAp8oQrW0rE0mQLFMG6_KzQLdJNi9aySKUrvzxf_4_W_y8wr0DGJr8-rptOX1MK8qIe1vi1mD_Y92HSq6O4Q/RP0g59Od4MywilEQtUztxsFQ5M5XhDR6Gb4pwWJrwjM",
                                "width": 47,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/59oMN174QrRJw6QZNiGcSg/1n7aI__GAOAK-dYEPcVDPMqkBJJgazCybCoMV1I5BwKdFbTNF7oOxopInj00uylIW63VfGxARjWkFtZE0YvBtRQhpKIUkdm17YrCjjjGpycXnRTFOSPX_vhh9uMyn3Hj-ud_5g6XBYodXQNNjq2ujQ/zJFPvWSLRvHAsIlZKrxJHGCPtPBOhmZXdU_I5seLQXY",
                                "width": 663,
                                "height": 512
                            }
                        }
                    },
                    {
                        "id": "attlb38CPlunUM01u",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/ac00_YvAIDvXhhXi-iDfAw/nyzzuVizusmuEEfMQamJgfQLEDLNhYEMj2ASZrjbxOdJbEs9rdzjnJZKps7gDwDVQXxkoO3Lf2M4uVY9l6_vwxIt3_gIvTI7myniPIdUgTseFSXAEd_wRofdyMHGg-58zvrBApn3uwB6iDqdSZqakjGttSV7azqvi-uRNmo_1fo/2wHi3RMqlmIcEFHyDRMhTToqbT6E6kMCztMWClr-kn0",
                        "filename": "157 Bridle Trails.pdf",
                        "size": 300736,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/MfySKIpfbwSTTCM7NQrNpg/itnmVa8qQT5aPa1ck6X4OnswssFrMJD24EwuO-jN_bbQ8yyA5ObdbTn-cMosLokus5ujo6JRrQNg1qn6SYlKfqfKYKzzfRSrfDud6OTwqfgEaYPLJzzEbfJ1aPVdR8Z9firu2ra4tWp_A6n0S5axTQ/zycOHwStKNfnwB8WeYAI1aP58HtKBPoDImut4eDDbwQ",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/d3lzCf5qHz0QQNGd1znZ7A/kR3Eyw8OtDWtsapAuxNyfBHZHJLrreCdv4kiV3EB-6gQOP5l-lUqiLapMTofKx_UBql1aE3qWNF1XG4ZIQUqPFC6YRB-wQa_SmLrWayT1gsd64IRhsDXyQhtUEjhJbRiLhX7b6GZJ_bLdSzwjCgVkQ/I4gAMeKIQrX_cMn7vMoLoBo5V8RRoTXIsQ6HxsMaYO0",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "att2QcZCaQPeLMojR",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/Jp2wngN72nKgUmWVsixs1A/aM1CcR6Weq4Lwm2VPfU8HmzrEOLtYN6aUOOESxxFjt0G5g3x5QTIUOArNXg0XDKteHLxxocpbmhL_yFmDwbh5bxad2o9Z35q6zKZWziDcWaSItA6ckxVhaAboXcZSaHNX9tNTDuem2lE3mXpvtCJmmjPt1m5uqxWoJR1mL5r9QCSZ3brQv7eUZGpBcszYwGBIUdaTTCTDP33tmXAvfEN8g/9zio_SDnczaUFt30e8q0giNxyIr5ZMPrkSXexiGtjWo",
                        "filename": "157 - Bridle Trails Lock Up Guide - 06-13-2025.pdf",
                        "size": 1120154,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/wC2BzGDYDaY8QXlnivBVPQ/TKN9XZduRlP34wlbASpEymeTQsBcfd6EoJo8SV-REL395UvFGxwJI81oXgUzFHvJzi1ggs4rtD0tKBERf6kTnlMt8g6jl2X9VOfTT00Rqlo_mEANMnG1XCHjg7KKApZ9G4JFbO6BkZPnD0wyKJtrYg/WCrTWMHz5bXrVhu82vz_6igLcA_w2hLZHQ-Vl-5OGLs",
                                "width": 25,
                                "height": 35
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/KqM8GLy8m33tsaOHRTnEeA/iH-OZW93x3ONOkQXcZtjK48y32HXclGxjc3DdMPs_p0M-KKkXfYv6z4HMJYXQujiZe0gjjOt789f7b8_z_s5BCDr4HuwREr2_fB9RcbbKj4KZmhwWZpGBrOv2hDhB4Hn6xbBARTb01Af-ELxgZb2Pw/NRKwNFBqBxWle3L26Gs6VqyYPFFVoOipNjgwC_rIsvI",
                                "width": 512,
                                "height": 725
                            }
                        }
                    }
                ],
                "Site Address": "6600 130th Ave NE, Kirkland, WA 98033",
                "Google Maps": "https://maps.app.goo.gl/Gn4cGYcByVpPxcXZ8",
                "Active": true,
                "Assigned Job Role": [
                    "rectLGnMglyXQB2uM"
                ],
                "Manual sort": "aJ"
            }
        },
        {
            "id": "recuMBSzLP9pz59u2",
            "createdTime": "2022-09-13T17:49:14.000Z",
            "fields": {
                "Name": "589 - Verde Esterra Park",
                "Route": [
                    "287 Community Officer"
                ],
                "PMC": "GreyStar",
                "Status": [
                    "Dispatch Only"
                ],
                "AOG Property Code": "589",
                "Calls": [
                    "recSPRyYUNsIOeBiv",
                    "rec39znDyShHNkuXG",
                    "rec1uPo6Onn465MwC",
                    "recAF2EgnwtWcyYzl",
                    "reclbMSLefuKXJx2s",
                    "recuIFNWgi6N5U4DJ",
                    "recVkBqxs011G2bHX",
                    "recICkGqFJ1AJ2l4H",
                    "recKXtJ0Ix8Ahq06O",
                    "rec6Kqzg9t9k8gbYm",
                    "recLOE7yFgj1VcnQt",
                    "rec55bCjGY6aLt0jk",
                    "recFhdqGprSTKuPcI",
                    "rec2regKdl0rjD1B7",
                    "reci8hhL4fXwNMnTF",
                    "recQctSj7ow7S2CkH",
                    "recC9dVd8EHOLYJ6Y",
                    "recaWGvw73Jl4sg2U",
                    "reca2Gj7HXWxWtH7A",
                    "rec2o0UMSjXoDMcTF",
                    "reco3CWpelDiAPYzB",
                    "recfjj3JVtYHQbAaP",
                    "reccZAOhkDUO427Qp",
                    "recqxFFMtzGvAwloM",
                    "recEcDyeEnWqcu9mR",
                    "reckYAWyZljVQOL9S",
                    "recN3Ly0QTExxeRKp",
                    "recmGCbkkIXlxmOop",
                    "reca6UuQplSVgmmQI",
                    "rec5fkLqD8y9s0xUU",
                    "recHRWbfNnCq26E4f",
                    "rec2PKu3VwsLDICcG",
                    "recwFprcdr8Yodluk",
                    "reckpgfohFAtZxmw0"
                ],
                "Tagging Vehicles": [
                    "recm8TK3P1oiKDv1N",
                    "rec8EM3TzanQiUgoE",
                    "recHIO89HSeO2KYJq",
                    "recAHRdJ7SEDwwaDY",
                    "recABldyP5Nxdq4EL",
                    "rec4W5ErVj1RN8ubX",
                    "recxQeVZOFLgyf2oL",
                    "recgfk2emfiFdWCGT",
                    "recS0AO2syNaW74Ie",
                    "rec6fVvRaUjt8hdXJ",
                    "recWv3aSc91cW1kZn",
                    "recKXL1omHWiFHbT9",
                    "recB5WObiUhBWUfe9",
                    "rectptyVUN2itwsG6",
                    "recOUtNOMR0jbUjEv",
                    "recoSneJZ5kSGzZ7b",
                    "recZh1QG98aCmxvzE",
                    "recy7POZqRT6qtjXc",
                    "recTsDPZtosDH6jWJ",
                    "rec38gYN4eVGOvAFZ",
                    "recyOZiGbzN4yyftb",
                    "recgWwAt34KpGR5ub",
                    "recwndAepTtchr2lw",
                    "rec36BvSKaluNRCtP",
                    "rec8BT2OvRTkOSZRY",
                    "recmgx9o43JKRyNwC",
                    "rec66fdVMdi6lvzPl",
                    "rec7Za8x7hepUXBL7",
                    "recIOYrSduqABoecZ",
                    "recTPTnb319teNxjo",
                    "recx8H1sSVecVgdUe",
                    "recopouGwrKl443PZ",
                    "recuNvleVzKGLFcid",
                    "recK9nCRVMB3MuBWq"
                ],
                "Site Name": "Verde Esterra Park",
                "Post Orders": [
                    {
                        "id": "attH2GQ9aepjEjapZ",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/22IZrdcch994SrhXqqg0wQ/GBn9U55WODfORE9bZInS5IOX0IIKvTk0AXqTSvuf15V25VXcj-XAKWzRoJRQeuWUtfypv313_55_xhwZRCnSgNofM_rt2PPtqmqo2KKuxhgeFB59KwFjUXpTsNGapTEd8N0aoUGNuf7DmoHxLNhh2mqs9ZJ_R8_240CKQmC3_C4/b7q9oRkvGAFfWg-0cvezVwKJ6pi-Gev2aKkc7CIGLEA",
                        "filename": "589 - Verde Esterra Park.pdf",
                        "size": 45142,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/RX5hReFAvwdEsSukh-n0-w/v7BglUtYHvWQlXhIIZUD7tr3oXf4-tJNQqm2TMDz9i-kc6tGjB9Z8IeZTt2FBHDMwZ5nneYNiTHakIqt_wxPfpDhg4b_u-BjNBi7RSDSUu2BXKg5iU4s-pKgvTYUbSmOv1AjjXzurtBWA-oTpTfkIQ/0SdKScnw1bHINhs7prAhz01fTXzVx8pgHHOgMNWQWow",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/xMfhbHqm6YblBtYfxsodlg/9kn28U8_KryuIYnGmvfG8G_6e3yIDF0aJHWixNPDZ0z2IL-HDnKotqgtXtxv7dHt3EW32oJUpWrfO5Zrrs3IspL9SUI1tdNGI2Gal73UF1uD5or43x10GUc1jhwD-xUp3ejQj6JzZ6lbXkbM_lwUjw/eAk98TBAS_wg1lXMrTGUrz3_QykG2hmLlyc2R24fhh0",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "attRCyuAjbyBbeEUC",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/JDaIecZDiDwjkEtWRbAZnA/T4uzqalmCDMVNMJGSFY_a9fyGzNpUCquqDce1nephN8SnqyJT1ISOhHvqb-pOigb4XU0Od3CIrebvlD0XabyaqxiKPtgSbrt1nyaRgzYbpMxFa-xYgcPq5MJF3xfgI4lKEhEGLuvem0wczIpP727mzWJt98X8sjwpmiEr0WNLZw/fgjGSvGn8TkY7NTupHGo-58u2wVRnEYgryG-oCwee5Q",
                        "filename": "Verde Site Map.pdf",
                        "size": 3896229,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/-GqH6jl3BsMI45lwzTrosA/qawgTeqK83l4N9bP8z2AbdrDejwpSkjpP2pGtQiAE1Kfwuw_qQ2AQfaG9rm473QckYTxXb9droWF7Bsg_oq10VCWHxVtN_ctdK3SaEJJMpjv6WvNFtNQpL679NQfuJrwPM-UVWoLOAzcX3kQ1gI9Ig/P2du1fMneTLdNzWqwfx3iKraF6qSDAuQZNX3eYLoG4o",
                                "width": 47,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/RFq1mBLResvfJU0ZF8yyMQ/N-xZe-v9lr7gt7tZsPyKYZ_OiY5U1I41XPVwQCdiXagv3ICRIPqp1B5t-ApSvGb_1FJsjf-y40wuTfJjxm5c8e6C-lB4euCqpTX-kj1VrJDE3Q8nGho1NeijI21JSeNmoqEg_Llf37CvHngi6YTxtg/z1cZWZBF1ulIQYdyqVkmtbwtvkgkNvxwyLkW2Pm-ujA",
                                "width": 663,
                                "height": 512
                            }
                        }
                    }
                ],
                "Sample Report": [
                    {
                        "id": "attg9LPTV9Ky4sB7O",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/ExWnwmtunwfwN-FNqtSvXg/9VsqiOT-Mtn78RbvOH-nozeoj3TP3T8KZi5UqgbWOYTODYEGOrp20LwuhVCuWyOo8ceN9pHpVVC--japXid0ulwncSx5mVleo0qwP1NganU_w7KFKX0LcKRDczjB2j2YASEqoKcV4OgfzHqGZQ6JRf1eO97VwRnMcRyHbietkn22rDotJoLwFWv5dM9g0NWe3S_bxvQ9xILteayVe8nIcg/WgKE0xGlDQQNBuAAfNAzPrPzFkcWozxLm8Sr4jDmPtA",
                        "filename": "On-Site Report - 06-07-2023 - Verde Esterra Park (1).pdf",
                        "size": 103143,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/LAwV6cDMbgnYJuKLMeVoqg/WTFUBMvrqXtvZ0dlcXiAmHs9Cmn2dZ7IDX7nsQZiPR3-30qpBSxxh-UUdhOcNSDKe6zH1LQmng4oPncaIm3KQbXij3qAzqnUCKMW3L6VWqjueriYWSCvRldIVWkdQjs0QRV6MKuGoT2FRMsylZM6sQ/26ayRtULAIDFk32kJfi9VhyBNX-elKvgS7LF2sps9kk",
                                "width": 25,
                                "height": 35
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/eZX4axUC0WWFiCI3WhgNzw/vT-Mn57aF_8EpAmyM1z1NLrKZce16IdsMN42dCfo-RcAn878UtO_3QmjRFpL22khftqyklCmLrAp1uOicQvdZld0bjZe-pEYKXsAt7paaOLTnXf9nitoI_K7dOUhbiGAGzMOdHgd9jglHIl-X9fgNQ/eT3Wozq_WFKr3EFrtFnjMDUIC-ZaBg87Tq7iBMzy0q8",
                                "width": 512,
                                "height": 725
                            }
                        }
                    }
                ],
                "Site Address": "2808 Calder Ave NE, Redmond, WA 98052",
                "Google Maps": "https://maps.app.goo.gl/FaHinnZ78zAf57Vb6",
                "Fast Field Username": "training@aogsecurity.com",
                "Fast Field Password": "Guard2022",
                "Active": true,
                "Assigned Job Role": [
                    "rec649AMeQfZf0ozi",
                    "recyoArXcM8CF1YqX",
                    "rec8l30i1JtqPoTzY"
                ],
                "Manual sort": "b0D"
            }
        },
        {
            "id": "recudGyUwrsElbMit",
            "createdTime": "2025-10-13T23:32:00.000Z",
            "fields": {
                "Name": "234 - Fremont 65",
                "Route": [
                    "Temp Onsite"
                ],
                "PMC": "Exxel",
                "Status": [
                    "Temporary Onsite"
                ],
                "AOG Property Code": "234",
                "Site Name": "Fremont 65",
                "Post Orders": [
                    {
                        "id": "attZDyCx4HztchKe5",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/xxZfXRqvEvFlmKjmucd79w/Vzh7ihkxKJbntcT4YXgzXYiXbrs37hvlmgxpTFzccFYPSpmqQ6egzxKTYwDfiXIQS8yt3IApUVzk32aQejhJt8X9_1M3ME73DfYRhFC99gA0wrS_bwTwPqgzyYUdbA8tzzlbwW3xUQdk0QMp9gZazccXgzH5QfI4pT95dCyy1iQ/ab67EXkZcl4-PadZ7bev5vlMK7DW_6h5hFW7wa4BwtA",
                        "filename": "234 Fremont 65.pdf",
                        "size": 5015351,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/qgA4Ln58jmDvFfnJquGC7g/IHJUbzR1zMPwobjcNzjYTIg69jJGjJxqSlsl_vPvkJryDFuwhjVm-oZJWSBiA-l-ws9fca7xoevyH4eBWXmjeDW-y6xhRNxEL2-1SDPbtL0xqao5UvdPFJp_YVetx1UUZkIf4nJIdrS-xtzhifOJGg/kSleV7SoL47UibfCKHf68VBs7joFhF8AQcntP_qr4lQ",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/CzXWEACH-agbaDtUvzTK2A/ZJ3JeRd3_Rb-3wlqUbxSWdfvTjMRo-nqCPtGEP3TFj1ctpT_O39J5dYjoTH6SJLNoXcMONSn--jieMlbx7I5Wm0jKRB5kpJCwm8JZdEIuguiamI7NG_CAaA9kb79ooWhvYSv2ppPomh9mrIs1Be_xA/Gi8lHaw6tKh_5M9WX2EintibhsZypk7WxsILHj2q_wU",
                                "width": 512,
                                "height": 663
                            }
                        }
                    }
                ],
                "Site Address": "3609 1st Ave Nw Seattle Wa 98107",
                "Google Maps": "https://share.google/YImyGxWCer3GK5WFo",
                "Active": true,
                "Assigned Job Role": [
                    "rechxgfF1cdCZfVLU"
                ],
                "Manual sort": "b0R"
            }
        },
        {
            "id": "recujwOAvV9LbmUuH",
            "createdTime": "2019-10-01T19:05:14.000Z",
            "fields": {
                "Name": "65 - Affordable Self Storage/Kent",
                "Route": [
                    "South Route"
                ],
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "65",
                "Site Name": "Affordable Self Storage/Kent",
                "Property Updates": [
                    "rec7aXnUIKkI8SLFH"
                ],
                "Manual sort": "aA"
            }
        },
        {
            "id": "recuriT1bg0fESvbo",
            "createdTime": "2021-11-01T23:04:25.000Z",
            "fields": {
                "Name": "187 - Parkside Esterra Park",
                "Route": [
                    "287 Community Officer"
                ],
                "PMC": "Lincoln Property Company",
                "Status": [
                    "Patrol Monthly",
                    "Dispatch Only"
                ],
                "AOG Property Code": "187",
                "Calls": [
                    "recmgVnChR7p1e7Wz",
                    "rec3nBJ6GHmG2pnCJ",
                    "reclqLPtmEDVRUEWy",
                    "recvCdMRsHXHcBmwz",
                    "recovJ9ucgv1aTzU9",
                    "reckvmDjO3xqKzAc7",
                    "recTpUyO0j0DL7CJc",
                    "rec1LF5U9w4dk828z",
                    "reccNgWTvLWfMbHjH",
                    "recit8xIultmpYqje",
                    "recryDPLeOM1NB0xn",
                    "recoTiiQSyUqRNBxl",
                    "receCFBt6l7aAnbAL",
                    "recpVSZfEnJnrYg5u",
                    "recCNk06osnIlRGhU",
                    "recRdewlNK9pQ2DIM",
                    "recSzLyRIBuSj9PvO",
                    "reckFj3cHE3wXZf8l",
                    "rec3DS9pcTo8RJstW",
                    "recbF8mpxwToaOWyI",
                    "recETc7uxnZMMlSQH",
                    "recfirVzjPhZndVXX",
                    "recc6OBv2ph0TVDkf",
                    "recueOT948vibSPVT",
                    "reckAzwtpPxa6dtcG",
                    "recpnUpMUXdiWlh9F",
                    "recNJxvjSuJrMRmvY",
                    "recnEl8Owst3rx6bq",
                    "recTlXwigE8nsnzNu",
                    "rec30DMy0VM6s9g7h",
                    "recnm1JwSuATIW9RE",
                    "recRQ2VoDnpy5CUxD",
                    "recITj5aNka1F1QHZ",
                    "rec8X1H2SAUMYk186",
                    "recZ1QCCYNxwDtV9H",
                    "recwTF7D0qA4bK63y",
                    "rec8lhL9GzRQHjJun",
                    "rec2mCWiBW4HE6pgQ",
                    "recJlaC3ewfam6lxy",
                    "recuOvF3KZNsgT0qz",
                    "recOzrfuBUlN88KKu",
                    "recAe0mX42U2akcLi",
                    "recOiDW67G5WXpG1Y",
                    "recDk9cI2A5SDAblt",
                    "rec94Yj1jlxkouxln",
                    "rec9U7I40Dglhu6Vm",
                    "rectKGR6nVvvR7O80",
                    "rec1PJ0HAYl0pcPij",
                    "recoIJ9dksLjpKTio",
                    "reccYKcsmjqxitzLF",
                    "recC22mKyzNj2Zja0",
                    "recyJSnwN5sSquOsO",
                    "rec0VdhuKkpti9XWh",
                    "rec6YhveoQHV6zVBx",
                    "recjaWVrKxoQulIJH",
                    "recC3uDnivxUNdzyf",
                    "recHYRZDCUZnNWZAs",
                    "recFAwJqaRlT4pF0v",
                    "recQcbceSCT0iEY4S",
                    "recSmvOKJ1fLSnlFh",
                    "recppX14Fw4Xk71V5"
                ],
                "Tagging Vehicles": [
                    "recPuzUTcQ9sDGg7v",
                    "recunpT9Il0VWUwQz",
                    "recHd5gIAgICfoXNe",
                    "recBvrz1ZQGphcTBA",
                    "rec8qRlNz5EPDhe9m"
                ],
                "Site Name": "Parkside Esterra Park",
                "Post Orders": [
                    {
                        "id": "attjYHUOnZmT98qoc",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/Hlt4sOZrAEmXeLHT5dSc3Q/wdg70ydxXrTn7fmpljSRHRC_3YbceZhRDjt6POBwvttuwPvqieAOpJnp46yQ3_fiw1sxPHvvYDoV96FPOVve3eck6uGZH0BfCUE4ajLBeNnZNIcSeZ-CsgLUZ-4gf7D92G-8NLisa0x-eAx2GVtSWyc2uF6Y4kgPGOwbDTlxqJw/-AGsL6d3ikZBhqpo1hK_UUsavDmt9fjw8vp8SwpoW70",
                        "filename": "187 Parkside.pdf",
                        "size": 98327,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/vqJ0YJbgG3opi9OiVrm7rA/lpfkms9ASJVHIZ0io0spmD3fxAuqsk8d5p0QGo2sAonl5umRboQT8QjDAn_UqGwrFGPLfJ5-ZhUcMroCIrlrjMldoHngOd5YhWbSwldKnhrYqevCI5DfZqoKL3Si5GR03chNfuQF08La2uwRPH7FKw/YKfzceS26dd4kBdxYkymwEc5YV96sjgPJo9u56FF_w8",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/30FGNigEPmHbBOoS29cX_Q/spHj5UGJu7msyPlMQx6TOQavvD7-d8rk4TETmSxyAxoHTThldEe8S5LmcaAue8EYCAD9xZAU9caitag_TOd12EeGQBhlS4t7bqUL-nYBNfIj7j5qyG93mXgs57LUThQ_-74Q8_9FSUWbKuoLacqbbw/FoYkfB8TasTCdi6NEL1BYdtcftLekl__0lBvsEsYv4Q",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "attScPKhAR8ArVXuJ",
                        "width": 1438,
                        "height": 1210,
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/6iyrwhAC_B1aJNmnBAwTdg/QhLSxKTV2-QVseVHgJv_mddwpxear2xzvhYJG2HaKD2qYVWiibD-h2Dzm4pxSQMIl-LOTWNA4WxGiKb63Ob7i_d9OUwc1Wy1FEI5UA_EdJgPOX_fjmHLtospRqXXDnW2bFKjqKF0kxdJpXQw61X-YmLnhQkWtmwik28mD1fP0_6eOohV-psTU1XDnpNuKwPY-TDsZVW1_lq3-A33VZTnBg/C-3y1qzWcHscgnVIsu6GjqLsEfJjMaem2cchNBCb3EY",
                        "filename": "187 Building Identification and Garage Entrances.png",
                        "size": 2839618,
                        "type": "image/png",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/7CcJGFdgJtyoEqNglv75aw/g5h4gkUZEYcgnWktPhy8MxlFXCR44W4n0YY4R_BlcQlxLQEH1HQ3aIXHb0SsTAvj1Uh98Z98YLNvxA-saswu0MnNJfeJPCtjcbToIHPwCDk1luB4N_vLacBMGAibbXRAHIWehloAy5XSQ_kPgmqrpQ/eKyNdDXBJFbfttsV2qi5DcwuGn_ETEZr8lbMVgdBn68",
                                "width": 43,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/u4Oeb16_oDjeqn8aoZmOqg/e97FV0dvSFVV5O63pYY0XZSidJr71a53MacVeE-xw1c4Ck7DsAU0CJ4FYuQDck2nq5urSconvMwrFUinh7G09kQWYIB7eY9FtWMZI9FXLkqGWfbmgaWtIDNK5v5WCQboXgwZ_CIJrZ0Ge4oA3BJWHg/_QAtBPgGVDJArNt-5MGYNvhtDLEvBf8UD34KWZgnYX4",
                                "width": 608,
                                "height": 512
                            },
                            "full": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/g81O-ZTDiituwDWDmXGi2g/GyfdD9rFR3atEqd3XJt708l_9R70buVFlBEhPokR5k7_GmvKOxT8dAvipuHJPIQ_89m8GrwcVToGVyLLjKivCWHYqs2rSUOudiMHlhFXL4PMdaaJeVbZeLVrHBkqmuJCP8sVx-YbrP5m6jAaK8o14g/waR3pjTBPj5uT19NjuZTUxENEmVwhIjHEJixpqpySLo",
                                "width": 1438,
                                "height": 1210
                            }
                        }
                    },
                    {
                        "id": "attKXMp44nwSdaBsd",
                        "width": 3024,
                        "height": 4032,
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/qH7Qne-ijG9mWFTtlL3CAg/beMxfWjfFL98Eo7iLwzHM_vjRDV_VFcIM-8sPolnUVPs4LyqCT-Kgi9mK7Jhnh0DrSkUdTltWsuyfZB1xFoVg1fkoAvtNgMgVAnFyZcenq48bGSKz3VCxETNluevPOhI7wUg8XsWRRnJfB2cF1PxRnJsxsW1Lt-jxXDYL2t-hco/Ms4BqoJ6xmdpzq6L_hQQYoDaT_kuMcY7Db8rUodSGfA",
                        "filename": "187 2023-04-10 14.53.05.jpg",
                        "size": 5767155,
                        "type": "image/jpeg",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/lkzaHrS15uIerO3aVCDotQ/GoK9NXKlHvbNPXzKk_bmQHU2Elj8ZJ2P4OzbH2JepYLGJOSL_BVhVmEeo2GiQd8BVNxyYnzZF_MO95ILUae7YnO7ipA2rEGFknqWPcRTjThodypbRe67vMQ_eQ3B2dWESVKZpFj6_y3BkulYHT24gA/nYkZoYRkZCRqdPft8QaKj2zjmj3XRCxn5_OJCQl1cSI",
                                "width": 27,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/8UIBq3Bj16nV_qgXZMyXRw/JRCel0OkJbrMz2Tm605_RU94zHAi7VJb70yE_YyXySZWFMOJzkcvm1Q2HVXWCOBpFSJ9XNFVzKV7VEnoG8cSS12-IgLzPYVZJCSz5ThAx_-gPs2yWoCn4Bz-_TKPZvpNE4OkUHw5P5dcNarq4NYGww/8-KI83bclrJDRm8ha7Rc_Ny0mQfjPdTkhtlvcmJaXQ4",
                                "width": 512,
                                "height": 683
                            },
                            "full": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/SdYba_SjutyAexp6oCAVBg/5YN_Vyj2BILjCaMp2jTGwBzePNW98P48L1A_xdVC4GFf6o_Q7N8tkusvQMxuwuOZscVvfYCcKUSmaqTP5Udxw39LLTeipPvHmEO-amGveaghgBb4cthlcQoY2Lc1E58s6gPxpO-dQ-qgD4nXwyAkaw/CWkhLFjYg83-r6NsxcYgirqEzWU0TAboRt9nbKhBpCQ",
                                "width": 2250,
                                "height": 3000
                            }
                        }
                    },
                    {
                        "id": "attcLWEA7gwNvi9uv",
                        "width": 3024,
                        "height": 4032,
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/MhX43yBDk0QWscJx4Q2SIg/dTKmkg0eM_6VAsYgwE3_0IlActhZuRuJ4PAlf2N8k3kVT6C0ve4bCl6qKlfOHxpKgjVvfGcsKwYClf8kesjuLNg3pJc4160vwU2Jyr2HGmOd7MdzJOIBvpd910VMymgJ-TsLFNm3yjtuhpVxr54E3fVehVQ7w_1tLUmiJ_YyOZc/OML8vlcworwnzpgRLrzj0cQflFAwzx3FDAD5rsP3R1Y",
                        "filename": "187 2023-04-10 14.53.17.jpg",
                        "size": 4035779,
                        "type": "image/jpeg",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/hifENFnHgdHKepCxv_cWMw/i47LNxMXrlVzH-0W5eyHrAX7Bk0gdG83iRqqhktwVVLSgSy36cVEKVSQ2aCfpVuLxRCisn3YZOK2JF5ARTZeLayIMzbO1ys8GOOEbyy-Stjk3kuZNavEQENSfqgXfJ_AmBTBRaBY9TtnU_yoV6TSoA/Z0v5ncoV_JWTuhMl00Gu46aoEVi1yyqBTj3u2lVBgvc",
                                "width": 27,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/oZ_Fj0lpTykeLLOcGYogTg/cswOsqYgAbRwBv0JywOp2oLaWM2qgIdimiu3tAmb7yFjwg7YZsDez7HkKiS82giPMN2liyzpHVVqsBi5AeZiBnM8O5mAfowiqkkaxgrQvewnm-h7dVVEr_aoDzBOyssAvQoZd0KqJcHjMNDp359Pgw/hCP9kfHU2awDCIjIchGlP6oZcVulJbvscaVrKpRTk_Y",
                                "width": 512,
                                "height": 683
                            },
                            "full": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/weOUZPNmyQxnh7SQWwLt2Q/f8JcV4jQSuK0UflfsvOg3wRR3bfq_DfHfT9buo_CFClKQzHryup9Xg31ZgdZVl46w08YL3NdAiOES8DtMidUk7Pr2CUSsVIIQ9Ja4-tmdicJyCoPo3S-atSQCkrMa2fJVD8Sd5QacWaqVpTDREkmiA/0oBqzYWgE1m4OwcC_re_7QAYjxmOAWaBpjy3PTjJTZU",
                                "width": 2250,
                                "height": 3000
                            }
                        }
                    }
                ],
                "Site Address": "15551 NE Turing St, Redmond, WA 98052",
                "Google Maps": "https://maps.app.goo.gl/s9RGxozgnyPCiXuX6",
                "Active": true,
                "Assigned Job Role": [
                    "rec649AMeQfZf0ozi",
                    "recFna4KcJQlGnenu",
                    "recBpMpvkbM2tyfB8"
                ],
                "Manual sort": "an"
            }
        },
        {
            "id": "recvaIeyXmbbmegNj",
            "createdTime": "2020-08-26T19:06:17.000Z",
            "fields": {
                "Name": "1999 - Training Update**",
                "Route": [
                    "All"
                ],
                "AOG Property Code": "1999",
                "Site Name": "Training Update**",
                "Property Updates": [
                    "recNPbyE9ZEVcUYeK",
                    "recxd7q61tPf0xYbE",
                    "recAwZPo3WMv3Foyk",
                    "recSLqTnSYhCuqpWI",
                    "recxEZQBkccEotusD",
                    "recuN8kQK7Q4eCnDO",
                    "recgEvOisee6lq7CS",
                    "recSN2tho4iPneopR",
                    "recaaxlTcIl5AHIiE"
                ],
                "Manual sort": "b0G"
            }
        },
        {
            "id": "recwFR4nS0dARg44p",
            "createdTime": "2023-03-15T06:55:35.000Z",
            "fields": {
                "Name": "288 - Capella at Esterra Park",
                "Route": [
                    "Perm. Onsite"
                ],
                "AOG Property Code": "288",
                "Calls": [
                    "rec3bksMFV7uoYO6S",
                    "recxBOiWQbJlSmmNl",
                    "recavyB9gYVKtUfkw",
                    "rec9bvwyZwX9MMvcE"
                ],
                "Tagging Vehicles": [
                    "recOhpJT8BXmOD42C",
                    "rec9vHxdQCyAW4Moc",
                    "recw0F3N5aew5SaYw",
                    "recyIxJtuJAYXG7aw",
                    "recLas4YQrf1eBqRl",
                    "recbC8OoeGgLkmmjS",
                    "rec9CzzXnEKjsgJAa",
                    "recAiZqynZum0cEab",
                    "recKAjDEeh4BDNwiF",
                    "recgVWfFPsmEK7sI2",
                    "reczwM7YC5atNQ3CF"
                ],
                "Site Name": "Capella at Esterra Park",
                "Post Orders": [
                    {
                        "id": "att4NQDtMUQVKFz2j",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/aeRIDVAUntSYtjK72pGeWw/keTaNbjVSQubCs_cGF_NxExwgPdR0zlGHIzKoAFGpd_mS0ZXVpCC1qqPgjjR7_4Xg2a8DnwWiFdCntWEzW477J069jLMISrmn0VkmrbLV_axEgMavNjIT2_TPmnEJEpFyxK26C0ZegzA0CvtfUrYW9mnBg_cNeq8YJrLfG6BLCAdDWfRcgjOvJV-mvOFeKOn/9LjWKx6i3XGhs4c5dxPcGTtMWe9EGRjmhxfXJefxV4w",
                        "filename": "288 - Capella at Esterra Park.pdf",
                        "size": 82872,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/JvmHrqoWOWEYU7G9lyud8w/AsjgCrF-BNegIguzZDQRD8FYkV9UC9kzmFkZ2m6a9Xxx1l65QDRKvuGBSKERTcaGlhdmEJG2Gh71fRLwQg3MLRL18L3sMFkGcpcrFCELjesCVLIf2rwTwhXQnXP008BDnJuXHKbWR6Qkbejg6NAEGg/JZMfVgVdOBygc26pu8g03Nu46VRCaPNiYhyAWCQPbNI",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/YmB7vKUMqiH-hlH5lpefwQ/TKuAnIiyU5CcnSpFAF9BJFmzGbxqhRkuH0Y-jyeXa8VBPiichOtiMJSYgLhBr_wjWY2VwxcYtAPz1_cQ-kLgjLgi9yewlxnkE4x_YNKFSmkf__LuzMElrG6v3SUisUK5vbaytN8RpqDhmHmy-WNPEQ/QSp-wWAJ3o7HIp2ULU33qgWgOopPOHqG5T95PjaJdYI",
                                "width": 512,
                                "height": 663
                            }
                        }
                    }
                ],
                "Sample Report": [
                    {
                        "id": "attOImtzV5Qzp1XXW",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/IEv2T-CIrY8I3p7OHpg7IQ/Tk4DNB1pj8PiWVkdrcm9bWR4KD4jQAKIqdjYCvN4Xkw7sEWfUsh6dJredvE_tn3VxOf_k9CrDgdH7lyyOLULd0fO1dI7HCgd9FY8_vrzGzO53xl7hAN4NxCBBt8S9z1BvOvwIduPf03ewUcEcRgDJDG2uvXW6w2vwUZLQvncrwseUEI7A1vGQPoPfz9fACd_fDXwJoqn8Ujjqd04UPx6iYBDKi5BijiY2Q3WaVPflpk/FxMslbJNPMyNA7mYf_3_caJCaHC3PJ1a-EfhpLirdhM",
                        "filename": "Capella at Esterra Park - Daytime On-Site Officer Report - 09-12-2023 (1).pdf",
                        "size": 314029,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/ikB_XhVa_Nad3RWrovQB9g/_mSexAYU2Qjc4qdqiVKnZaf87whCvCUmJ3Q8SAqNo6Hil_B6LRVv9yjL5_nvZyOX31U7UI6IFiCY1WU-Ha9xrAJdDDcjMbC6oomMnFX9FafB33CFTwDUAIci8UIOC3R6sXSf-siu2CA5GSxCq_9LzA/1ByvZPhSdXxsM5w6s0G8pVT1c7-jTg3UYPaUulIedkw",
                                "width": 25,
                                "height": 35
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/zr9QRe_WIZYQHT0dZOIRww/kPl8OJkIxdOnRX3fabKpm98P7BWeJljLYQkDJbLYdXCxOsad-GGWsP0Qi_1OllQX4rdMCWRcOSg5xYMWtlAeqKr7u6SR1-rUHsWGrdw3b3-zzR-QYOrWTd-EriAd2Hlihr1xXsgi7JaXKOhjm8MykA/mIlVwj8gGa_OdqsPqa9rq8qGCOuaTl19IwstPh2v8NE",
                                "width": 512,
                                "height": 725
                            }
                        }
                    }
                ],
                "Site Address": "2710 Tagore Ave NE, Redmond, WA 98052",
                "Google Maps": "https://maps.app.goo.gl/wu4ZvdNyNW5Cg7Dp6",
                "Fast Field Username": "training@aogsecurity.com",
                "Fast Field Password": "Guard2022",
                "Active": true,
                "Assigned Job Role": [
                    "recLBSN57eOEvjJyx"
                ],
                "Manual sort": "b09"
            }
        },
        {
            "id": "recwG9OyBuhSzOEz8",
            "createdTime": "2024-11-26T20:25:08.000Z",
            "fields": {
                "Name": "203 - Beaumont Apartments ",
                "Route": [
                    "NE Route"
                ],
                "PMC": "Essex",
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "203",
                "Calls": [
                    "recRjyJrZvMDnAYA5",
                    "recy1fXxjfzbkBMG6",
                    "recwMvOXcubAFPZMF",
                    "rec8GmyoPGEYWs3zz",
                    "recp8hdDKTUOjZxZd",
                    "rec0ls3W8pBi8KBmN",
                    "recoKJzRHiyd5ZVhe",
                    "rec9bDZGL84OgDker",
                    "recJjaUUDSX41MChU",
                    "recvHQB8DmQjzte5Q",
                    "reccknW4m65UvZuTC",
                    "recBgh8GmP9HLVApW",
                    "rec1Q4LfOwCm4x0dH",
                    "recA1BlbBWfTR3yW4",
                    "recQengVDXaLOP8DD",
                    "recZELXfitEvhY1b1",
                    "recOCrZJsEwuMD1ZE",
                    "recjTnvI51EQdbvol",
                    "recNFk7sbilkvj88c",
                    "recyOs47GJCWOqgFZ",
                    "recIqKCWqbHVne8kq",
                    "recynjxWFYm96GKx6"
                ],
                "Tagging Vehicles": [
                    "rechGNqcnF1cXB0HT"
                ],
                "Site Name": "Beaumont Apartments ",
                "Calls copy": [
                    "rec5icRPAAHRMytUH",
                    "recqN0oKspRd3PUYO",
                    "rec5ICfdCIyeIFog9",
                    "recUtwc1WrpqpBvZA",
                    "recK7a01xyRsSQ1yU",
                    "rec91fHmcl5uUTHvj",
                    "rec6Q8dloWi420V4p",
                    "reclXNTNZFGhmQ3rn",
                    "recm26qlPFfVagEF1",
                    "recF6lD2kM6Se12Rj",
                    "recAeaqKMyipsXmqM"
                ],
                "Property Updates": [
                    "recHhZHvLwuoOdg4w"
                ],
                "Post Orders": [
                    {
                        "id": "att0RZvOLuTXxWtEN",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/2-sKNzRTKL2zyOV9779ErA/CDb298xAs4PA-GY3CFKpxujfxWxVFVzoZw2MPWr5MHhrK_oVDycdofnyJmB7HrDosq3RW1mFjQfnqq9EmFju5Z6Vjxqd9SPpjE3kVdd6WTBu22akJCG3xZBckkHacp-V0JVT0qGcNGq4A5hwsLPRfhtMOUBNBh2wYeA5_RUYP7YdPB8yeBQBfm0VzxZNc590/XGa8YD-p3cls1f-ZpJ_CaYAGCK8a1BWHlExSoEAzRnk",
                        "filename": "203 - Beaumont Apartments.pdf",
                        "size": 1943467,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/nBC5zHTd1-cuYUgpU-flSA/jGcz_SHL7K8lIDrrojMmusUip2EAdggefjKQRgGTGxSymAlAGXWMKF3kRjfIxwavOEMtDf7IY3CUhEihAV3cVAHd2H7UdV7a32XgwdNhPRwoHGpZZ5xPg027JGdcF5WnQo74Ap4h2KrmH7c4iYlFNg/t8g8Y5yYhMLcXVS-J72G-rjOV63RjAA3wYF6JbpqsNI",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/ROD2QKfx3z00kfKE-YPq2g/C2cyMS-h6QIoHvPv5Y1DE56LLjBM1C9Pbg4o7GnjleQgIqcNGH_MHtUr2-hwkt1NFM2ZdA4gKxWIkzIFIBUDANwIcwwjsnUCVSMs8rSFf3TdFjvXEbT93cpM5A9BiUCxqzUkYoxtYA2LXESGh9KXFQ/ijqDl8-dIdOBNGomW8IBQBejGK8tuILMT5vA9a61TMc",
                                "width": 512,
                                "height": 663
                            }
                        }
                    }
                ],
                "Site Address": "14001 NE 183rd St, Woodinville, WA 98072",
                "Google Maps": "https://maps.app.goo.gl/NXk7jUk9j29UKHnMA?g_st=com.google.maps.preview.copy",
                "Active": true,
                "Assigned Job Role": [
                    "rectLGnMglyXQB2uM"
                ],
                "Manual sort": "b01"
            }
        },
        {
            "id": "recwLdDeyjXTWrP4G",
            "createdTime": "2023-05-27T21:15:04.000Z",
            "fields": {
                "Name": "144 - Pacific Raceways",
                "Route": [
                    "Seasonal (May through Sept)",
                    "Perm. Onsite"
                ],
                "PMC": "Private",
                "Status": [
                    "Seasonal"
                ],
                "AOG Property Code": "144",
                "Site Name": "Pacific Raceways",
                "Post Orders": [
                    {
                        "id": "attbf26lKyT8bOJ81",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/PYijVnO7X1oQRN_E3dkv9Q/9rBsZrNFwnw5qR-N4IbqT1VcfL1_hG0nInPnW-SYDWcZLdqxvioEWN84vVyV3zDWdXFqd_N9X2jYy8v9X1tv7AlzFxTxxSn5sMnGt_7PoOqKLIZyFSRgFwWt1WDY-KjIxxVgeqzcJ8gEHvYy8xpNC8bl0lkzSUFa2L-QsO6Rl4RJwyg7vTdwEoEFjy9Jfki9/y4uE8WBYUdfnQlT7JG4aiYfqeAtKmB1-q7GLlGKqPNo",
                        "filename": "144 - Pacific Raceways - OTHER.pdf",
                        "size": 5459305,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/8AG0kgYqn6oRVSt-Zldbiw/4Yy9kgzFS9V1dWutiBak29aVlQ90MbZk7A3FcOMqX6gS-55uoltGY6k3eL_jDJziiyg4BN1f-9O7h1T39ZvlnF00neTlaEz_bfWOVUNE4uXgDr9Nx9efJHtHCZ6MBjM88GcT3K5F4yIh-Q8ySEnTRA/WBFlyRl1oL4GOFJkqALOT92tXRGIta5bRpiuHnfTl8o",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/7fQZGO9JmhRjvFyG2F76aQ/_4J07LSFeIrhKhRYWw-bqLaTr1p-QBuSCz2b_l5oRXiQt0-XsFJUCatHvaHcMPS8sz3_3FeSqhJdkRrDubzHmgD1O99v7R0OzDVBbMsa6w7K-voqo3YbJPRLskkIJdmF4JMmzD0f-Oa5qxfNn9I-Qg/OOTiRnKOSg872kIsy17GvoiD1k6OMzjXMiEe8I38enU",
                                "width": 512,
                                "height": 663
                            }
                        }
                    }
                ],
                "Sample Report": [
                    {
                        "id": "attLQCcJ1mmXB6hsE",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/a99tpumkjdQ7Ugudhzfspw/MdqrIOyYDCENXDLrNgYFRNj9PbTz9jOgxzGduBTavKavcDgZpvvCYjwsGXfaM60aZjyLIXRjjOgLGgt-EHSJDsHi2HifJJIrWHzQCuoY1WhA671olyJb1PnhRjMa60YRgcwX6txNhohDwR634zEr7E6ojrqRcHM-2uGrfEIXUEE/QZhr6B8vJCdvxeFQQ5X1clPsFSErO1lS2RywXNQFNRc",
                        "filename": "2023-06-01 16.56.07.pdf",
                        "size": 79729,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/NsUHU6_jVxX83ZVtbuY1Pg/KYc_9qdUA4KRidaqWJ1Sg4QnZR9SkIl3AWZRaCOXkIIyR_AIK3JwDfLOTK38IyhoiV_-JSLvxmenVEOLmQKTBQYl5Eprj4WwcNx6eE4iYevakVDIG-TqybEwP7x6EQgVp3O1LJ3chihUING0GxNLZg/2pe8oBQYpLjX0sxQm5GIukz_G5VqSG3iJFZiZUFsM5o",
                                "width": 25,
                                "height": 35
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/jHw9O_kXYmUDFbAhQaaeoA/wB_kNx9GvC1jf37YUz8FzqiKOqwM_7LJ2zm0WD38KAsNmpzfGGSN_LXKiZ6cEYitB7-WmYSiTPhIGv7A8suXS2D4Y8nOU6jvhsK0ZQpvDh3wvW7G1cBMlArx_Ey3bgWmQObmzNiqDNS4T3krYF7XkQ/CY8zNRO66xA68GE-Y8SuOSJUCjausBXiK0pdrG4LPE4",
                                "width": 512,
                                "height": 725
                            }
                        }
                    },
                    {
                        "id": "att2PLgfXigkhsXJE",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/TyDET1IFCk07BsAgZXxkDA/NKWO_TVaxCIRo7efWat06hDuGtLQlXTdu4CJGMAVPjH3LuSGT_MKIhICtItaYQej_NHh-NMyuGJqh-srVSwbzfY_Sv788V5M5xMrwWwiYeRYH59lf0IBEtJWFk2nl9_TQ64z9MPd2HJ-4_ejzjaaKQRxMVm5ID-DSMayZxvV1JQabTsvXS1MPZKyCdkqTdH4h74An7KIoDqAIjPvDx2_1g/uoX52U9E3bqRymw3hieWSAXgjaXj_VWxKmrW5JMTGGs",
                        "filename": "Pacific Raceways On-Site Report - 06-01-2023.pdf",
                        "size": 92468,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/-DqH_YrCHFVquNKIZEM86A/ZoJW5ZjZ6yt8_8n5fZ2gfNZZlOtylrZFxedNVMwagWXNPGrI6iLH0ZWPRGMN5Y-5lctb3qkX8XIRYKAXMEX3s8wDP--GO8xu1wqU9Gke1j02sirsxSVzKslNtUfou5YNY-8Z9IemITBZ4fpu4qriNQ/4HCVOpNnkH_XdaaOgLaiLX_U9in0E1CMkc8A4zsmIPI",
                                "width": 25,
                                "height": 35
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/DI8lRf0RIxoSAIHKvJr-Hg/tFSaTPZBxIq0oUU-PbQsOBhIjohm85f0ThUVEc03PvCWWkn4x27oZ6mN5R9GCTm779LqpmP9f0Zm98wKv2V2whQUO2uAh4YRdVvYxy5AyMYdQx2J2II4h52E1YU54yikqFbt-VBHc3RdWNVAO59-Kg/4uHghVOvDu2JqyKOy__pJEzRle8AqEmGtL-gmAUuFtw",
                                "width": 512,
                                "height": 725
                            }
                        }
                    }
                ],
                "Site Address": "31001 144th Ave SE, Kent, WA 98042",
                "Google Maps": "https://goo.gl/maps/vX7nW1Qzob8SUSNb9",
                "Fast Field Username": "Training@aogsecurity.com",
                "Fast Field Password": "Guard2022",
                "Active": true,
                "Assigned Job Role": [
                    "recIt1FwREW0FxPhj"
                ],
                "Manual sort": "aC"
            }
        },
        {
            "id": "recwU8F43p6wkIGjP",
            "createdTime": "2024-05-23T23:08:17.000Z",
            "fields": {
                "Name": "291 - Polaris At East Gate",
                "Route": [
                    "terminated"
                ],
                "PMC": "Avalon",
                "Status": [
                    "Terminated"
                ],
                "AOG Property Code": "291",
                "Site Name": "Polaris At East Gate",
                "Post Orders": [
                    {
                        "id": "attFNMLkMvVjXvxuM",
                        "width": 2364,
                        "height": 1234,
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/_AZxPAWqHh1xCRPbhQHFUA/an4poRC88AmXZSQuPBFqWUujfMgcDaceY74B0gYAWpluQMe-nG3gFpK5Bu12czFdsSoRrIVCmXVdXMhMt0hTF2BnvxTbBznIxYaWTubkT41PBh58js0juRAJskc_3gDfq5bX2ZfNBwgXytjYPw9s5J0VJkRYyaFysEwhHZAbdz-LcMgnv9NZ6JS3-tsa1OOw/hYwIcS-Ph0U7X_ZiJBURfsjVsfFWUhez913LxKTvsbo",
                        "filename": "Patrol Map of Polaris at Eastgate.jpg",
                        "size": 789044,
                        "type": "image/jpeg",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/QEp7eAXvLTYJIDig95LsMQ/bhUDA_IvS74u3u5VQqOjpdt6xkCdpzA6FHFvz3ZbItQyrwXyxSQrZ4IDBFSnlEjVXQbVYtMReoldZ1Equ6yKIlJuGcHRJrwEMmFPudXrUWlXHlzGZJ5YjZ3PMBJhTPBZFzSwES-H5ckMlxMhyWwoKQ/IYRv1bTYpzMW8DuJ9QbbsQr4KTXq2tI6awmj3NaOX7I",
                                "width": 69,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/aMfTHxZZU_tKlurbC9tLqg/FUOxQCNPhC8I34k1jWalyKDCc4Ec1LyAeditCDKx22gwKiQIwJBPXgK4_NGBvlL00LWAInOYUmvKmZEoGb-Kj3ngTnVFnaD__04aLowbQjsLD_URiNdlkx3_5MJ-qy447-qGkzI1Cf2zoRpXw9wKLA/yyjiHsnsw8DNydMVRXc0T6AKLsrzfKU7rHC5M71bGaA",
                                "width": 981,
                                "height": 512
                            },
                            "full": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/DP2TaDNrDG8UQKUjuzJ5pQ/X4oafvk4EO5C3WPPuvNNwzqswuEye5MzHyonQ6ZDRNptuSdWc3xJ2xRMNlqaoTBwq7Z3Jd95ILLekqAv94Nnugt7D8eyQQmSsxY_TK99zTDblEfOQcRfgQrxyQSjpcPUp3WI06TGX52cBMx5P2zWug/55jKrlvH3WFb-NjVsszZRbXXSoqbrMr1ao_QRZBkgdg",
                                "width": 2364,
                                "height": 1234
                            }
                        }
                    },
                    {
                        "id": "att9oMKVdE0Fhcjuy",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/IdRx5Qu0crhsN_to12m9pA/GxHZeuWZ_kM4CKMaNKzVm6Wq-X2x2iT-o0GME06embqKvb0pNg8R9Td5Wrw2SwcNe3f6BiQMQhWiunwyV1JA8OMMvPhoSmiMZ5rJFkjWAPPfiepUaeMJD4iiWIfMb9jHidGBQxyX8sKD6O2bV7d-X-z0b63tQyvywFvq5qtC1kc/3pSdRUaC6AtuayXwGoRM9V3rpT80RIKa8D3VHY4qmz0",
                        "filename": "291 Polaris at Eastgate.pdf",
                        "size": 4391663,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/1PyjOIHtjUgmLaUUPURmAw/Sh9l-m2KENt5Nl6qdcOAfHwvI6Of5fM-NtZfL8l9er5U0Q-hpRxLjDpIR-2Oz7CJasVoNTNvgtfmk0gYd-6_uY6oGBotAYfghgdt423C0E3_BXDnWTMvf4Yr9rJ5QSD2iFZ1RYkHoOBJxq3nRZFy7Q/iry0f_J_kcY1WKywMa0QL4Ijn0ECdnTzNFri1huYzPs",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/lW-8TCNGca0kgQANiDacRA/9C0hA2QHYtjGas8bmFB3IL8j3FQIRT8GpmngKgqkfjGyBdx7SMdn6VsOJzfF52xNCLYpCsfQ0yjHoxLlb2nbrCZ9d1qXX4ZiJhYJqd3dQ0pTyFZmAkKFL4b-7qH8wnpyhirne2JzC_2XGAEIJZ2kGg/ykVAHFrB7Y4ERQ78NCudkN8a0csYLiHZFp7ai5Y3wgI",
                                "width": 512,
                                "height": 663
                            }
                        }
                    }
                ],
                "Sample Report": [
                    {
                        "id": "attNUB3Fubl0c75KY",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/WorknzYOrQjFLuyt7pK9Tg/_CmQ2B2IqITWQMrcNTJD5RqTulxC4Pni01kkn8i5amkxYbJuFZoSrp88pSqoMq9bEdx6hGFMUyeMp3HGaf8l8PJom0NsKMEp-o763tOHQdjFEU4W1UL96JtLgeWxATAmtxwZsUUp8fvywJ9VfQaN186CQOgH6xqh9q9WlAnelut1MhzyAriHfAvHBoR4r3YUyXykA7T3eAUVo7jak_CPvg/zP5-jOfj1vymv7oZJxbok_jMgDxYO2XxAFe0UfvmLbU",
                        "filename": "Hassan Mberwa - 04-12-2024 - Polaris At East Gate (1).pdf",
                        "size": 4604960,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/nuP_OdvzLBvNlTcPXkFyKw/U2VtDDR0FNYKKaTt2e7Dz_jiR4Z4ckUjb7JJY08XAZTWR5cS9jsK31L878vJE8QFTLDzzRBq2VraICFSWpGyQ-oeUuA7xAoDaFJXuhQq_vCzQEWD1740S3u_8TQRSdXjWwNuPjkk13RywzKIDJU8fA/Lu-LnmFEtOHxIc8fYf5cwCd3sHjLdvZkJrrDfYBBink",
                                "width": 25,
                                "height": 35
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/GG6hTuUuqKm5uT9PlNl0rg/n6SQ7zUOemF5rHPpwIcaxZvLwW4uamoD0VLcqNAbJnHJ9n3ZYT8zhjp5-GF2z9dSuQJXkTeVMu_7OTdrcMm75FwKy127Q25bYvBTh06QC7TQ13ZVsdcyTTJOWDmF2xBVau6VcGtGSaZBQOCtryR4tg/cI6gEGQiRseYfs03guupbJ4QugiWZycNjz6jq-mYCJY",
                                "width": 512,
                                "height": 725
                            }
                        }
                    }
                ],
                "Site Address": "13300 SE Eastgate Way, Bellevue, WA 98005",
                "Google Maps": "https://maps.app.goo.gl/iAhcGpG6q2ZtQ2Mc6",
                "Fast Field Username": "290@aogsecurity.com",
                "Fast Field Password": "Guard2024",
                "Assigned Job Role": [
                    "recDE3RjUOQs7WI5t"
                ],
                "Manual sort": "b0B"
            }
        },
        {
            "id": "recxRDdfh0vGEIg2i",
            "createdTime": "2022-08-01T22:27:25.000Z",
            "fields": {
                "Name": "199 - Pure Redmond",
                "Route": [
                    "South Route"
                ],
                "PMC": "Essex",
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "199",
                "Calls": [
                    "recPhDNWVQDSWOAfI",
                    "recXNBwpM8E1Rvwgm",
                    "recdmYIvHtgF8gbwj",
                    "rec6iBDrbaaYqU6vd",
                    "rec2k2MLE2hSmEsTt"
                ],
                "Site Name": "Pure Redmond",
                "Calls copy": [
                    "recuI2aO9OaiRgNCW",
                    "rec0sy9fLdfWMjQJB",
                    "recJyzOMNBW6N3hjE",
                    "rechV69ljWy20qkwu",
                    "recgEX0eUb3G4aBzK",
                    "rec0lSUx5s6MGqsER",
                    "recWMmLuFKgNW3FhU",
                    "recuDezqiOHOGeIno",
                    "recRpYZ3A5K05gE1y",
                    "recANYA7W6ZwMDz6W",
                    "recJ4wAKguotIBsOd",
                    "recJjCneQO1QSHyYh",
                    "recUKJ6jcSWAmn6tW",
                    "recVdKaUk3KDrfM9T"
                ],
                "Property Updates": [
                    "recb669FMq4vdx3S5"
                ],
                "Post Orders": [
                    {
                        "id": "attzxlD7PLwCp1cae",
                        "width": 3024,
                        "height": 4032,
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/ve9p_Auvxec6ZZKZi2a0mg/U6LspwQoKCzUuGydTK-SkjqCK9K_cewYIB5B9HB-kuhep1GtBCzlLFCku9-r4A0GXkJ4SWW6gRBhBXuF7Ds104tw7SmIkM7Lq21XAcgdcPdbNGLh3V8h81cJ1Jvp5Nf28sk7vk7LArf-Et8HqdPwv6A0LXTmGDiFc5MZR3_Sz5M/71thVVhalNW_Og3mlDflKV-PtRLY155sqsVjm2Fi3Bk",
                        "filename": "199 2022-08-02 13.43.37.jpg",
                        "size": 6184339,
                        "type": "image/jpeg",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/f5LyyxLJ1t1iF0EAdODz7w/Q3P4rLLQXygqvzrPEGaqg0JLsJXIdeM75QM6HGDa39gsSFPp6sYhE_5pc9C--BSnB7jRuqN4v3HgUsnRSytXXbFO1dAmoL2HhRFWARtdNXHKHYhgDidLO8vgvKFMKeY9aL8DPEAvkW8mDYMUVMUFXQ/9PZtkJUXA9EJFVzZ_EmbbnT1Z67l22cpYB1PdkMDpBU",
                                "width": 27,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/XmurHItyOyNRZd8nMekfAw/XxKxRyWBd7TnHshJqME6giWOIrGpxIVlUN1Sai49psB4ejjaMoqOMID7KeUmZRT6usOP6Yh-qT5M76cg27zkZXdFfVxACD-V_kPa3GR3BIBSwpzHncEVM1Br431Bg8H5e6rxTloPD5crp7x68W8l_Q/LR0RQPtip6GZkWIezdCPqCM6fU_1fH1fIELGSAZ-gbo",
                                "width": 512,
                                "height": 683
                            },
                            "full": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/8nG9Ak_c00_oNHnZwhM12w/4YxVAWsdPQZbKj2DKUaXZTdOTo8H2-gHf0x2aJ4Cl_4uJAIo7z-ZqlGlE7cENV8hKlYQn6kGyAwfMVCW_w-fcY-v9BG9c_Z11SsL8LkbXaqkMKIhnsuTvdSdKjl9filAFqnLFLuIN6xLwwurr28afA/gTEM1myJ1ParSDHO2k_Xs0xUyVX6mT-Y40_ZjXbMe2Y",
                                "width": 2250,
                                "height": 3000
                            }
                        }
                    },
                    {
                        "id": "atttAns8xyFGOUEvS",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/fejTbr-nSztTum_hszo5ow/zGKPO5F5zjYBEXeUYmjK4Gz0SeDCcCUMoPUZ8DHByLAzR4wsEipU8fPjePkm13NZqyQc9tAbGFfjn-jvnfY8rjYCKHAYq-NqotCfmaxfkXgRkmSp31WHtR9_DFDhOBY2Mdyg9Cfjb9WSCvJ23WeRmOxdkD4GLXgfcLPHpoV_VrM/ktgeP5WnAcWy_SVzvgr0Wd5bxvujv8ZC0JoblFDiM8M",
                        "filename": "199 Pure Redmond.pdf",
                        "size": 53445,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/Gk70kwFG2XkUlznRF44jgQ/egeoqz385CzKQESYg2F66YXEIDvZ51SmtOT1y2O9kuEH7-P6uQwfcV2xOceRPQKRpGiuxyjmCLgMCoNOcwrmsIZd4hkNQ92GrFfklgf7k2vA4pm4jdRMH4MitTapNZZ47o81z_wLtzf_bGYPP2lwCA/kBkbConuqLl718fh6T1mIC4Epi-59f6A3qXiNzL5RK8",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/lEsHxKC63bNUxLXZjJ6P6A/f-FS9j5sUnxfs8bLdqQCpm4BQGt5Fgh-TCJMa63sk-hZ01jYv22Ve1GoVXjsd-ySDARiWMspcP-a2hVBxYoKymc4MLyxItYCZPpJITcwNLUhyYR7c4NUeKshUKXAeZQYuWDuw2dfBBNKFdpdrPo3jg/HOc2KoHYJdRULwM2sIKsegMpPcIDwW7mQEy6r5S-t9U",
                                "width": 512,
                                "height": 663
                            }
                        }
                    },
                    {
                        "id": "attvFDaBo6CLmBAYZ",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/C3zz32i3v9PU0gQX67-MYQ/JR92jMHGZqRb_cpmzBOPOsaiDVLsNH4ODCMRp-YKizPKs-tGxWhwfe64iPoHFm2UQsoDO4QvYwLazMvSzygDcamrO433jcpfL3BZW9lpNQ6mY4Fj01dr4AnsPx7Z4GN-fGkwq3oQaBdKA-KohxV8G_6PuKPdbXneCBP-VhhreXeRjBdRmQSQfd-AFSG7wyRa/xETfTgEePn9RRBFRGrrGPosq9FzTiyysg85pkApI1z8",
                        "filename": "199 Pure Redmond - Patrol Guide.pdf",
                        "size": 26124256,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/Bxhh7wOVRCiXchsLXnoIdw/PbevSbipAt_oX8Mk6fCFLTcWsxNvovc-NB6AjVa9DACTW3OBnboRMWwItU1Fd75WeFW25YW9HOm-ba5qqtsGcBOt7X975lt6_E7LNGSBkR0HrSVko5JtIsTJyIrYfd6UV6nuGzr1SZz6bJk1s3Rf9A/9l7oT26UqeyJZif0N5F963fOqJbqn9bWQnfbsx1eoXU",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/JJ2ScGQkLYvQeAZm7BGe7w/0PNlDmNKYo9iwpLOaInt0_gYxF4ZMivqLHBCJgDK-Fbe2ivxP8TgnVO-lA4sIH3Lm19xEJGg5OP4YIo6jnnOQq57iCKGIKebRZH5vyJvMTKD95Dz0PIoTi0tfs3mbgU-qQkt7e9QvBfRxPtr66meuA/X-GYRis_oe30DMsXB2dPiidi-NYnR2ZFiQ9AT5IRkvs",
                                "width": 512,
                                "height": 670
                            }
                        }
                    }
                ],
                "Site Address": "17634 NE Union Hill Rd, Redmond, WA 98052",
                "Google Maps": "https://maps.app.goo.gl/yA9A9oBFcyPmTHkG7",
                "Active": true,
                "Assigned Job Role": [
                    "rectLGnMglyXQB2uM"
                ],
                "Manual sort": "ay"
            }
        },
        {
            "id": "recy9x3qyl3x3N8eK",
            "createdTime": "2020-05-15T01:41:36.000Z",
            "fields": {
                "Name": "200 - Auburn Way Self Storage",
                "Route": [
                    "NE Route",
                    "South Route"
                ],
                "PMC": "NONE",
                "Status": [
                    "Temporary Patrol"
                ],
                "AOG Property Code": "200",
                "NE Route Orders": [
                    "Nightly Report",
                    "Hardcheck",
                    "Patrol",
                    "Foot Patrol"
                ],
                "Site Name": "Auburn Way Self Storage",
                "Manual sort": "az"
            }
        },
        {
            "id": "recyy0g8GNuWMKbXi",
            "createdTime": "2025-05-15T22:33:31.000Z",
            "fields": {
                "Name": "233 - Polaris at Lake City",
                "Route": [
                    "Perm. Onsite"
                ],
                "PMC": "Inland Construction",
                "AOG Property Code": "233",
                "Calls": [
                    "recooQIwvtEPRFsIe",
                    "recM8ameN1ylNz06y",
                    "recZdOH8ROfMBxrKN",
                    "recMVrxXkasQbnweQ",
                    "recivnYNH3T320IHf",
                    "recg56IfHTP2t0mae",
                    "recnH72yrlQ6mEy9d",
                    "recfRnvEl2duYh7Qn",
                    "recCv1oe1tMiZi6ou",
                    "rec6tgaZxZkfjMOjN",
                    "recftKoklF6zV4bmq",
                    "recVGTxZIWYScTAmr",
                    "recHQ46Z7eKCOcOSh",
                    "recToAvPWNikVk2iT",
                    "recMoNh99mt2n7Krg",
                    "recvEArsHQYBLngU0",
                    "recWzxEU5lNFlQcBR",
                    "recJ8uCm9beaps8jM",
                    "rec7KuGHwSFI97x2y",
                    "rec4xz5hcwAgYrNHU",
                    "rect9Pojgedk881hz",
                    "recPZQETQh5rq5MHn",
                    "recwy7sRo1gEqt9zK",
                    "recwBp48Zx05unIT5",
                    "rec0QO1rhC1UrmSu1",
                    "recg7Uikbv0mbaJwg",
                    "recQb5wiYihR321eq",
                    "recofMSOa61078opK",
                    "recSOWyRKWjPspW4d",
                    "recElEEMJrLmpK9Nd",
                    "recwnOP6K45Lekw5S",
                    "recQazz7Q9ikWnlBM",
                    "rece6gpo4IzUa0mGW",
                    "recIh0FXpUKvqKDgm",
                    "recNbxYVtm596e3ql",
                    "recpaSbheOEkLQpT7",
                    "recPc6uRT3Lfd4dy0",
                    "recVdwHAOmetj5O1V",
                    "rec9IbsiMW90QeWTX",
                    "recEQAUOufMjuytrm"
                ],
                "Site Name": "Polaris at Lake City",
                "Post Orders": [
                    {
                        "id": "attYut8MBZGKkI9bB",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/kyHr2CVx2NomPlLMaTW2XQ/lrrXVZCQRvZe5x3TgFOUxODO9NGpA0XWUERxXyrTXURPut0mpDHg7DICZA2-uu304h7I8i2pbAIY7Y12m_JUmWwr29t7qWKPjoJ_LktIqOGr-zUOE6nFGx3XqBpjBdqClk128CqpC6rAnO9dZw3n1fKcm78NjXqeMr_vPMbxZfE/HJEkC9I7QwIlM3hY-4t-WH4mFWjVoJs8LRqeC433jNE",
                        "filename": "233 Polaris @ Lake City.pdf",
                        "size": 79804,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/64fPeQVu9QJcVqh6cewyWw/3I5WHPU8ttWS7yao_XwWNe-TjYGzY3xYyzSTYCT2BUS6D6GPawYl2mlafj6I3bcUxrKlkFqLeqzdxah4ZntNCF1EcvBFys-5yoTYBDsfcXjHvgkAFskaO4bBXgqRksRTaqzqpsMhH1uDAv417AKC6Q/rcmwA2MqzrGTQJDapvxAbnAgvNale7e_Oh0Vc-DAH10",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/Y2hHeP4kP_4WtU9HnxKcVg/RXHgEiljmaZtsTHNtzvzib8yo3UxGL2mdQ1lLdv3KVz5MAciVrtxhw2YMXCUmSIsSCjgFpVy2otRXPL-_NhfqovzNWkxZiPfmXLfkn-Eiz3esbGS0HsZgd98HsGHqtoIBZ0vNI_5OkWqihiMPFDRiQ/NWqfWTTJtiv80bDCWGEaqhZ37Lt5a2rkktO7eIjCxt8",
                                "width": 512,
                                "height": 663
                            }
                        }
                    }
                ],
                "Sample Report": [
                    {
                        "id": "attNOyxmqzxke2fiw",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/Ec9LqnHUx0ELuPKP7uGTCg/fse0Z_vg_5q-Y9rRADJJAqDJdp_UVN7olxfbbcrq88-pt4ySeaz3Xli7nJnigsn8bpmVK0VrKGXZ5eH0PVrDkhbo9xZTaqoGZ_PorOTw4DwwBEqzZYAxSym2prJLQ3KpFSXqZ9wWQIWFiTF15t0HCq7oebeQlUCzEuFGB2KzboQ5v2E7qMsCoPL_eT2YzwnG/eg-1ixAZScdnaaWrIe9BDv8sb_OWogsz8fi3OAWcy5M",
                        "filename": "06-06-2025 - On-Site Report.pdf",
                        "size": 3347165,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/fMT9HZ_yOI59nKpAKBjbPg/zC9a7tsjtMh6VPUOpxhAMrZZoCKkF2XDni7r4BHlPqqmFiq4gRB8O0tl-OEjH7axmqh4T-nEGK_1lKqbHU89Vf516wtbn8W0odGYQCTAlSQxNukCbGVofVgjq5KCx9t3KsOv_pgjmNqnyMoWtWslzw/2UhHgT8rNQBMCKL8_TfYf9zi90rPrnGPGYuMXmCfpKw",
                                "width": 25,
                                "height": 35
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/n_SSL0xRF0ytD60ipwu0dw/aXtiM6qITT8Pmioq6dyTvtqqaVQeUJUjMmntsL98U6bzJ2GeANWxK-YE14MIwCmnbISKb_yA5fD9Hmr69cwcTEHT8A21DGoj3c6LnjrIOyRWJm-fxjwa6XLEbzgxlQVMY1tlyLvya5E49cGpXuGwaw/SEfCzq8EKC2iprCavncxmZgYvd2ADKe9BY1WkSvUqj8",
                                "width": 512,
                                "height": 725
                            }
                        }
                    }
                ],
                "Google Maps": "https://g.co/kgs/1vcL1qN",
                "Fast Field Username": "TBD",
                "Fast Field Password": "TBD",
                "Active": true,
                "Assigned Job Role": [
                    "recuqm3IKBxdU9N2W"
                ],
                "Manual sort": "b0P"
            }
        },
        {
            "id": "reczX6h9NAVWSF9f5",
            "createdTime": "2020-09-05T03:16:45.000Z",
            "fields": {
                "Name": "41 - 212th Plaza",
                "Route": [
                    "NE Route",
                    "South Route"
                ],
                "PMC": "Azose",
                "Status": [
                    "Patrol Monthly"
                ],
                "AOG Property Code": "41",
                "Tagging Vehicles": [
                    "recmLsOn27ty1P3VU",
                    "recoxgyY3JPP4lZUL",
                    "rec6NnqKrf5cIhGGu",
                    "reczt1pXjjxikhJan"
                ],
                "Site Name": "212th Plaza",
                "Calls copy": [
                    "recnfASygvppjULsS",
                    "recFhQuLqaQsJqXFq",
                    "rec3cjYQ2GzKi3oxQ",
                    "rectBaLraTCd4X0MA",
                    "rec1wCQ6xFhA7D3kl"
                ],
                "Property Updates": [
                    "recx06q6pCgMII5Gr"
                ],
                "Post Orders": [
                    {
                        "id": "attdtSkFVAM08JwSY",
                        "width": 1462,
                        "height": 810,
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/mIlYg7QeJpBmQOToc0xGvg/VNq1QqaFEbJcTmpZ-WTWHOfTKvTLUtPNh8_2W263h91HQk_EsquUAVa4zqr-rwgmaU_S9FOhlkvGG7bO5i69Iszjlha1Tm0QL7qCsX40FqcUh8jAHZlWmOkWM3gcHc0gRNBDLn30f-RNWY2NI27orA_Al5dG7heDV9NmJ7wQT4A/_YaTLa4YnvFWilNxgRHTubXnATxfUx329aQaX5kYUgM",
                        "filename": "41 - Site Map.jpg",
                        "size": 476084,
                        "type": "image/jpeg",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/4hrZUKbTGFa070pkoXaCVw/qpCnNyiqZ20Uoah-0ZobGATaf17IbnXWPPy9mzh4dyMmv4w_6oNLvxy7Gsj_fFwYOvTClzS9fVZRUWOroOhH8_6dhAfMy665vBQMv9tI3mw7sPhRBJbuu8wIV910Sni02kbNIfZmI6ht75wDihSKQw/9-bVhjvHqxs9B90JspPxBDXrjcnDMRdMIeFTktHpkD4",
                                "width": 65,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/Efl2d4hmV3ms9_UPLr33xg/udk5gwDsZ0F3dYOcfeTqVGV34UnoCUtx8NjF8_nTaBPdVgYMD7e5VZThFDayQ2lJw9nJxHxMxq2GebwknV7d3r8d9FimUAEMGm0uC5Ggunvn-EaLj0r1s9SBFw5XHRP-Qi2lfefkun1b4hVaZ2bnyA/tsmqpO1WgdOEngjoBNHC_cZwQ6TAziVfE2WnaiVD5NA",
                                "width": 924,
                                "height": 512
                            },
                            "full": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/HgNRftwlvzIdeg4TbVQx9A/LhhxatUhUJJraCtoN3PvtnN8aWHX-dCIvGga90Hba4DeAX6m0mNrTOWS9S3hYDqgIUc7wwhMmL6IV2r0kRhLP46m13a1BU094qIJqaZJY6CeHvMRNMjrLCgCNc0wfLUSRqLUcebb_oluk-DFA3VHAg/QwbbguiN3uk4GV6NmvZ7RL2hQAIImg4URkzVopjfRyk",
                                "width": 1462,
                                "height": 810
                            }
                        }
                    },
                    {
                        "id": "attMW68GQjsO515Sj",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/lU8luVx3JOvVW-brHy0Hsw/uPOtW71YoxtlC364vWVeWPXoxNCU5kjoyVwSPKl_UomohLbR8e01h14P1Fd1I_BvFSmcgm0VAIl0GUdRR0kFVNTKQ8XzU5SYFMXM4HG4LUeXmDVE34PNhp_YtXUs_FrzJL-O6vGTPV2UHNqsBJlT3JbZisn_hjAKP7jMNagOyRA/wqt0uZllOKsjxou2cBWm7ALo_8gEzwdqXnNo8-mQIMY",
                        "filename": "41 - 212th Plaza.pdf",
                        "size": 558315,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/8BkGAyz5oJ46Hn2B63rbfg/GI71tNNUjUGeD7wxyW7MmmZakCkcadNZ0GDYMzvx8rjAH6mZuwO7C-UDeoFhrLDhlHWoFqanv4GgjxSFS3olKC6QpI5u-_mRyCnsNcoH_X7_R-qCzU848p8gjnKzneVOxrBqAmvAiocnhJLsJ9C1Vg/NMbVramMrDeR7nPeYxRp6ROFyti8odzucTvZuqn4XDE",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/6FWGnV5ZOXUK0ZUDfIXj6g/iR-OjXe5t7mHcgA3kb_dgb_lcM01t77Wh7ElgKgYQkqpHw90Gviy680KR81z3_e1g9wC3FIV0OM-g2WvJBHHE6aRKrwgiUwq4uUiqvUNrq4KAsFVOxZEi02EHmd2_PiIxbjoPc4uGnIgYdjd3JgQ_w/sM9cyyFPtPcIkYW_fpbBq7V1LnTn-wWvuaw7wugQU0w",
                                "width": 512,
                                "height": 663
                            }
                        }
                    }
                ],
                "Site Address": "21218 84th Ave S, Kent, WA 98032",
                "Google Maps": "https://maps.app.goo.gl/MmSwrhN96L6hxmh97",
                "Active": true,
                "Assigned Job Role": [
                    "recQKYvEuPm5J05BW",
                    "rec1UASONUxcvY0m9",
                    "rectLGnMglyXQB2uM",
                    "recXGYGc3I60uWs0N"
                ],
                "Manual sort": "a8"
            }
        },
        {
            "id": "recziJT8TgCNd0qpq",
            "createdTime": "2022-03-14T22:34:04.000Z",
            "fields": {
                "Name": "221 - AVA Capitol Hill",
                "Route": [
                    "Perm. Onsite"
                ],
                "PMC": "Avalon",
                "Status": [
                    "Perm. Onsite"
                ],
                "AOG Property Code": "221",
                "Calls": [
                    "recxMCRvHxo5syg4N"
                ],
                "Tagging Vehicles": [
                    "recgV02ceNcutBeah",
                    "recNEChQAT426gFwh",
                    "recLKZbg1wpTyqeq8",
                    "recKEVt1ceIH4gdzf"
                ],
                "Site Name": "AVA Capitol Hill",
                "Post Orders": [
                    {
                        "id": "attIkwSYjEv5pqaCT",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/HVKdS38Iqiwd_PLiOsJdvw/0533MjUIwhSHHTNc6MRzfgpWsN9TcBULndHSWJwviWnUcUrW2Wug2MHwOUTzVO7OVRqDrgf7PwfniI12ryM2bNHvTKHZZ4HN5Iksq3GK0GZJGfyPYzkbVEXLuBgAqxgPCl6Aw-j6_zQ-boXrtIZVGM2GOZQc9ZlCQEOMR7HOOiwVoBdSe2QDWgNQE5G6RBz8/eYjWbF2lvMya7PirlFLSl2JHqivVrZFtokoCMPri0RQ",
                        "filename": "221 AvA Capitol Hill.pages.pdf",
                        "size": 2245869,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/v5JRQnsJN-hfrRXh0rsAxA/zumVSUSqPxUl4ts885soLNd5BtxdRgCYNGaUMu8phF281HIfS-iolQUHkJXk_raNEIsI7I0QQStTtFMN77BFndJemSU4JxjYrEv0Q0WNQk0_uG_cZuq5QuSWGEk42t2qB_tp0goEvvnyPpwayTLsaQ/BJzppq-D-AgjqsU3DLw35SnZOz4Up8rwQxretVEyrcE",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/NG8-PP66V1Ymd6voM65ufw/b7rt7y7yq8CEpsiPrMtZmwerpiIlDF1sRXw46UGVN789tE58o5GrOW9fwMsoGQr9XILiOvOlp5PdW-cMuArWDspPfR892TlpEZirI1z-v5TLnYRAU-yrDsIAns2Y0eazQpo72pMB7LYpdiiurteU-w/6hQ4oreE7M4LdLwQalPZWL6eHV3oK35St04Cdxq6bvs",
                                "width": 512,
                                "height": 663
                            }
                        }
                    }
                ],
                "Sample Report": [
                    {
                        "id": "attGYE2BvRhgbyjYW",
                        "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/dm8NUBEl_SqufWK_3ecpwA/EbSb6D36ve8zGch2wrHe8Nhsi0UGIgV3z20kAVaeJZQaqNX-4hJ0Yxexms_N6RQCieDPn9E2OsqFyr8VrY2uE45SwyenQvZ0jmJ63RZmDPtbJcDS6V957JFMLzLNy0qnR-0ZwjFIl-OZn_NKL5lE2WzFSTln833nr5ky4Bnp8tTWjqRwRCJgKvamq1Bx7gia/qxmJtOgixGZaCCZoNhDBOC6MviuUPS3-LJmeUpqkzvY",
                        "filename": "AVA Capital Hill On-Site Report - 01-06-2023.pdf",
                        "size": 452576,
                        "type": "application/pdf",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/tLgEpvIUWcPiuoBmhqZ-Gg/3ywUTk9m8vY_EOp3YTGP1lqYDsjgM2hyJol0t_9Fx4b6TK3HVnEfglRdg8ta6tKoFpEZ9W7tU2zjX6hMxbVMy9Aj4hiE0_cJcO2vxyjM0OyUs6X59Ydna9Df9FlQmL_p_MUplzEKZRKqICpt4Or0xA/DW-gAdh0dDR3gRsdDBvbngFk_JSH8gVnaHoNeQE983E",
                                "width": 25,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/FjVk7EHOLArN-XkZ4ygmSw/p6-Sf6ibdCl_aouDb8S0fJQaqISXwjX2ablL22e5HU335BWjpt1nny68oykbGsCWOsO6E_ITH2Y4bcykpS2tnZFV9IoSBCUz3WTbmcpHiaoJF91-p_cTmolMvzZ2PvLYbgaifZPZwu6Jf7P-c3WjDg/TeLN3IM09oVZWOS-68ehAyLSG05jdxdGJ8otmTFHqKQ",
                                "width": 362,
                                "height": 512
                            }
                        }
                    }
                ],
                "Site Address": "1530 Belmont Ave, Seattle, WA 98122",
                "Google Maps": "https://maps.app.goo.gl/DdEnGrmFN5eJVj7J6",
                "Fast Field Username": "221@aogsecurity.com",
                "Fast Field Password": "Guard2023",
                "Active": true,
                "Assigned Job Role": [
                    "recudWYtDLty0DBoC"
                ],
                "Manual sort": "b04"
            }
        }
    ],
    "propIdToRouteLookup": [],
    "incidentOfficerList": [
        {
            "id": "sel9P7sw8sICjlSrR",
            "name": "Nikkie Schumaker ",
            "color": "blueLight2"
        },
        {
            "id": "selAQeAJtxWxLSZAM",
            "name": "Matt Brugman",
            "color": "yellowLight2"
        },
        {
            "id": "selHgiVwsa0pQp9g1",
            "name": "Whitney Barkus",
            "color": "redLight2"
        },
        {
            "id": "selP0py6JfqD0027G",
            "name": "Hassan Mbwera",
            "color": "purpleLight2"
        },
        {
            "id": "selAp9ie1pVLa1K3w",
            "name": "Zakk Fjeldseth",
            "color": "pinkLight2"
        },
        {
            "id": "seluWgM25q5wvkOGD",
            "name": "Carlos Williams",
            "color": "grayLight2"
        },
        {
            "id": "selZBFYFaDa2xqR46",
            "name": "Zack Zesch",
            "color": "tealLight2"
        },
        {
            "id": "sel4mItmWkXWUUOKI",
            "name": "Charles Brown",
            "color": "greenLight2"
        },
        {
            "id": "selu4PCQbkU4b4bxr",
            "name": "Zekiah Hurd-Thompson",
            "color": "cyanLight2"
        },
        {
            "id": "selTXiB0GRRrj8h6j",
            "name": "Thomas Kosta",
            "color": "redLight2"
        },
        {
            "id": "sel7igzBNhKp5LpUu",
            "name": "Dan Gruver ",
            "color": "pinkLight2"
        },
        {
            "id": "selyOaLR6KBDqUatC",
            "name": "Marianne Cliff",
            "color": "orangeLight2"
        },
        {
            "id": "sel7kduDU3UOMNkmi",
            "name": "Brad Hart",
            "color": "redLight2"
        },
        {
            "id": "seltCcBb3mAp9x3NM",
            "name": "David Polanco",
            "color": "pinkLight2"
        },
        {
            "id": "selCBtPTmAYQsS6uY",
            "name": "Nico Lang",
            "color": "blueLight1"
        },
        {
            "id": "selNcgOimLfuw0SQT",
            "name": "Kazandra Torres",
            "color": "cyanLight1"
        },
        {
            "id": "sel1TzNAJtjdYlyKf",
            "name": "Hassan Mberwa ",
            "color": "tealLight1"
        },
        {
            "id": "selXO8lcLPTdkgQk5",
            "name": "Draven Mosher",
            "color": "greenLight1"
        },
        {
            "id": "selU8Q8nItoXhchcT",
            "name": "Mohammad Tarin",
            "color": "yellowLight1"
        },
        {
            "id": "selOY5IzigyIw7KIY",
            "name": "James Osborn",
            "color": "orangeLight1"
        },
        {
            "id": "selurQaqV6Rqvpig2",
            "name": "Oscar Flores",
            "color": "redLight1"
        }
    ],
    "incidentRecs": [],
    "incidentRecsModified": []
}
//dataBase = db

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function load() {
  //await preLoad()
  //console.log(dataBase)
  await dataBase.initDbAsync() //Load main db metadata
  //console.log(dataBase)
  //loadReports(dataBase.subDays(new Date(),1)) // Load ObsReport

  // from incidentreports.js/loadReports()
  let startTimeStamp = dataBase.subDays(new Date(),3)//shiftDate
  let endTimeStamp = dataBase.addDays(dataBase.subDays(new Date(),3),1)
  startTimeStamp.setHours(20); startTimeStamp.setMinutes(30)
  endTimeStamp.setHours(7); endTimeStamp.setMinutes(0)
  await dataBase.loadReportsAsync(startTimeStamp, endTimeStamp, tableName, 'Date and Time of Incident', "asc")
  
  /////////////////////////////////////////////////////////////////////////////// 
  var times = {}
  dataBase.incidentRecs.forEach(rec => {
    //console.log(rec.createdTime + " = " + rec.rec.fields['Record Code'], rec)
    if(Object.keys(times).indexOf(rec.createdTime) == -1){
      times[rec.createdTime] = 1
    } else {
      times[rec.createdTime] = times[rec.createdTime] + 1
    }
  })
  //console.log('++ ')
  //console.log("EOL 1st", times)         // sort by route, sort by mandatory
    
  var mandatoryCreationTime = ""
  var largest = 0;
  Object.keys(times).forEach(itm => {
    if (times[itm] > largest) {
        largest = times[itm];
        mandatoryCreationTime = itm
    }
  })

  // console.log("EOL 2nd", times)
  // console.log('++ ', largest + "  --  " + mandatoryCreationTime)


  dataBase.incidentRecs.forEach(rec => {
    //console.log(rec.createdTime + " = " + rec.rec.fields['Record Code'], rec)
    if(dataBase.isDateWithinMinutes(new Date(rec.createdTime),new Date(mandatoryCreationTime),1)) {
      rec.isMandatory = true
      rec.route = dataBase.propIdToRouteLookup[rec.rec.fields['Property Code'][0]]
      //console.log(rec)
    }
  })


  await sleep(1000)
  // console.log(dataBase)
}
await load() 

var tstRec = {
    "rec": {
        "id": "recbIMycGseQQK77x",
        "createdTime": "2025-12-26T22:30:23.000Z",
        "fields": {
            "Record Code": "590 - Highland Apartments",
            "Property Code": [
                "recllE3eJZsw46JMe"
            ],
            "Date and Time of Incident": "2025-12-27T06:02:00.000Z",
            "Description of incident or observation": "Status of the fence: secure with some fence sideways.\n\nDetails of encampment remains: still has some garbage and shopping cart there.",
            "Reporting Officer": "Mohammad Tarin",
            "Picture or other attachment if needed": [
                {
                    "id": "attffsaJ7mM2PiNfS",
                    "width": 1284,
                    "height": 940,
                    "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/rxW5Vgo4KNLPBwg8LE_jkg/J0oXk_TDIxaFGjd-UfVjZut_8E6gzjArnJgG6SsX4i1KemD4s7KWU3tjv-2NpPnT9pP8JuVxkWs9pVkty46HXJw6R86KsBPlPH7b9-S0HmmRP1ggLJqrKKNL3WlgoI0wpv3rZfjTFqImwdRK6eVX6xik96WqI205s04B3tbDT2I/trd1LnDOyxWD0O4kcmKtLJSejht1aKWTk2rocA4V1II",
                    "filename": "2025-12-26 23.02.58.jpg",
                    "size": 706584,
                    "type": "image/jpeg",
                    "thumbnails": {
                        "small": {
                            "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/Z-6jlvStMZlWA4QRPaI0nA/zmzotOfeR5mf9E1ZnywqhPjluhFA4atY4MdK-WlhHfzJj4xsE-DEZATtasvbAFmcJ4CEijs-sAf6IKAP6OlLDVpL5emEM-egYSWPz6Dl2ToZIreHg1IrgjRe0iMYEFuF3hd9wgPNrKn-QhKV9598tQ/q45MdgFbnQ7fuDsEjhWNKKiYVWb8EjOqTxcEP0f5Kd4",
                            "width": 49,
                            "height": 36
                        },
                        "large": {
                            "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/BtpEV9ikXCQnP-NeoUaENg/UvjqHq0NZZayDigRO3jPRFwGEFm2PSfUCLUsSReiG2T2nz4WWTrwHjLYgn9Xxr-WkxRyXH9q4FunPda9eJAWgyUEMhKSQi5qd5lOpNdg181xOtxyfoVP75WU8_hV0kMVCrzx0yu0m4OpryUDK2SDPg/lgs9l4faw3xkZ2qjtf64eWVeC0kaHCKRthemBKe6wLs",
                            "width": 699,
                            "height": 512
                        },
                        "full": {
                            "url": "https://v5.airtableusercontent.com/v3/u/48/48/1766894400000/2UZYjuJlSpa4bTEvfVXg7g/Kp-INuNxtvXc_Zf5gw6tY-BdGmwYg9TeUU1Cx_CtFVVu_v3hapwNbsONhy_jkwTIa_XOh_KdM-gtD6X1h29cGprV04k5gKmUw5ACUEuPBVGL6WLaKwijdGZ1TB-4RAcCi1g6MlpiBsYgRdqUzG4LVA/cIUDceCY9EyZAVMpK4csr7nlahy9HHtNtX0p4lF51f0",
                            "width": 1284,
                            "height": 940
                        }
                    }
                }
            ]
        }
    },
    "id": "recbIMycGseQQK77x",
    "createdTime": "2025-12-26T22:30:23.000Z",
    "isMandatory": true,
    "modified": false,
    "route": [
        "Temporary",
        "South Route"
    ]};

//////////////////////////////////////////////////

import Reports from "./comp/Reports.js"
import testForm from "./comp/ObservationReport.js"
import MainTabs from "./comp/MainTabs-vanui.js"

const { div, button, input,p,hr,span,select,option,article,summary} = van.tags;

const App = () => {

  return div({style: "height: 100%;"},
    MainTabs  ({
      "1": testForm(dataBase.incidentRecs[6].rec),
      "start-flag.svg": div(p("Content for Tab 2")),
      "3": Reports(),
      "4": div(p("Content for Tab 2")),
      "5": div(p("Content for Tab 2")),
      "6": div(p("Content for Tab 2")),
    })
  );
};

van.add(document.body, App())

