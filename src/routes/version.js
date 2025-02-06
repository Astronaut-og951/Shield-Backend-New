const express = require("express");
const app = express();

app.get("/account", (req, res) => {
res.status(200).send({
    channels: {
        "client-matchmaking": {
            states: [],
            cacheExpire: "2026-01-01T00:00:00.000Z"
        },
        "client-events": {
            states: [{
                validFrom: "2024-01-01T00:00:00.000Z",
                activeEvents: [],
                state: {
                    activeStorefronts: [],
                    eventNamedWeights: {},
                    seasonNumber: 4.5,
                    seasonTemplateId: "AthenaSeason:athenaseason4",
                    matchXpBonusPoints: 0,
                    seasonBegin: "2020-01-01T00:00:00Z",
                    seasonEnd: "2026-01-01T00:00:00Z",
                    seasonDisplayedEnd: "2026-01-01T00:00:00Z",
                    weeklyStoreEnd: "2026-01-01T00:00:00Z",
                    stwEventStoreEnd: "2026-01-01T00:00:00.000Z",
                    stwWeeklyStoreEnd: "2026-01-01T00:00:00.000Z",
                    sectionStoreEnds: {
                        Featured: "2026-01-01T00:00:00.000Z"
                    },
                    dailyStoreEnd: "2026-01-01T00:00:00Z"
                }
            }],
            cacheExpire: "2026-01-01T00:00:00.000Z"
        }
    },
    eventsTimeOffsetHrs: 0,
    cacheIntervalMins: 10,
    currentTime: new Date().toISOString()
});
});

module.exports = app;
