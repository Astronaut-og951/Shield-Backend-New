const express = require("express");
const app = express.Router();
require('dotenv').config() // i think you only need this

app.get("/fortnite/api/calendar/v1/timeline", (req, res) => {
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    const somethingmidnight = new Date(midnight.getTime() - 60000);
    const itemshopDate = somethingmidnight.toISOString();

    let build = process.env.seasonNumber;
    let season = Number(build.split(".")[0])
    
    const generateEvent = (eventType) => ({
        eventType,
        activeUntil: "2026-12-31T23:59:59.999Z",
        activeSince: "2019-12-31T23:59:59.999Z"
    });

    let activeEvents = [
        generateEvent(`EventFlag.Season${season}`),
        generateEvent(`EventFlag.LobbySeason${season}`),
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
                            seasonNumber: process.env.seasonNumber,
                            seasonTemplateId: process.env.seasonTemplateId,
                            matchXpBonusPoints: 0,
                            seasonBegin: "2020-01-01T00:00:00Z",
                            seasonEnd: "2026-12-31T23:59:59.999Z",
                            seasonDisplayedEnd: "2026-12-31T23:59:59.999Z",
                            weeklyStoreEnd: itemshopDate,
                            stwEventStoreEnd: "2026-12-31T23:59:59.999Z",
                            stwWeeklyStoreEnd: "2026-12-31T23:59:59.999Z",
                            sectionStoreEnds: {
                                Featured: itemshopDate,
                                LimitedTime: itemshopDate
                            },
                            dailyStoreEnd: itemshopDate
                        }
                    }
                ],
                cacheExpire: itemshopDate
            }
        },
        eventsTimeOffsetHrs: 0,
        cacheIntervalMins: 5,
        currentTime: new Date().toISOString()
    });
});

module.exports = app;
