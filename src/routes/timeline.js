const express = require("express");
const app = express.Router();
const functions = require("../structs/functions.js");
// hmmmmm should this work so easy by the way
app.get("/fortnite/api/calendar/v1/timeline", (req, res) => {
    const memory = functions.GetVersionInfo(req);

    const generateEvent = (eventType) => ({
        eventType,
        activeUntil: "2026-12-31T23:59:59.999Z",
        activeSince: "2019-12-31T23:59:59.999Z"
    });

    let activeEvents = [
        generateEvent(`EventFlag.Season${memory.season}`),
        generateEvent(`EventFlag.${memory.lobby}`),
        generateEvent("EventFlag.SpecialEvent")
    ];

    res.json({
        channels: {
            "client-matchmaking": {
                states: [],
                cacheExpire: "2026-12-31T23:59:59.999Z"
            },
            "client-events": {
                states: [
                    {
                        validFrom: "0001-01-01T00:00:00.000Z",
                        activeEvents,
                        state: {
                            activeStorefronts: ["FeaturedStore", "DailyStore"],
                            eventNamedWeights: { "athenaseason4": 4.5 },
                            seasonNumber: memory.season,
                            seasonTemplateId: `AthenaSeason:athenaseason${memory.season}`,
                            matchXpBonusPoints: 0,
                            seasonBegin: "2020-01-01T00:00:00Z",
                            seasonEnd: "2026-12-31T23:59:59.999Z",
                            seasonDisplayedEnd: "2026-12-31T23:59:59.999Z",
                            weeklyStoreEnd: "2026-12-31T23:59:59.999Z",
                            stwEventStoreEnd: "2026-12-31T23:59:59.999Z",
                            stwWeeklyStoreEnd: "2026-12-31T23:59:59.999Z",
                            sectionStoreEnds: {
                                Featured: "2026-12-31T23:59:59.999Z",
                                LimitedTime: "2026-12-31T23:59:59.999Z"
                            },
                            dailyStoreEnd: "2026-12-31T23:59:59.999Z"
                        }
                    }
                ],
                cacheExpire: "2026-12-31T23:59:59.999Z"
            }
        },
        eventsTimeOffsetHrs: 0,
        cacheIntervalMins: 5,
        currentTime: new Date().toISOString()
    });
});

module.exports = app;
