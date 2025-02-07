const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
app.get("/fortnite/api/v2/versioncheck", (req, res) => {
    res.status(200).send({
        type: "NO_UPDATE"
    });
})

app.get("/fortnite/api/v2/versioncheck/:version", (req, res) => {
    res.status(200).send({
        type: "NO_UPDATE"
    });
})

app.get("/fortnite/api/calendar/v1/timeline", (req, res) => {
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    const somethingmidnight = new Date(midnight.getTime() - 60000);
    const itemshopDate = somethingmidnight.toISOString();
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
                        seasonNumber: process.env.seasonNumber || 4.5,
                        seasonTemplateId: process.env.seasonTemplateId || "AthenaSeason:athenaseason4",
                        matchXpBonusPoints: 0,
                        seasonBegin: "2020-01-01T00:00:00Z",
                        seasonEnd: "2026-01-01T00:00:00Z",
                        seasonDisplayedEnd: "2026-01-01T00:00:00Z",
                        weeklyStoreEnd: itemshopDate,
                        stwEventStoreEnd: "2026-01-01T00:00:00.000Z",
                        stwWeeklyStoreEnd: "2026-01-01T00:00:00.000Z",
                        sectionStoreEnds: {
                            Featured: itemshopDate
                        },
                        dailyStoreEnd: itemshopDate
                    }
                }],
                cacheExpire: itemshopDate
            }
        },
        eventsTimeOffsetHrs: 0,
        cacheIntervalMins: 10,
        currentTime: new Date().toISOString()
    });
});

module.exports = app;
