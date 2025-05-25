"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const watchlistController_1 = require("../api/controller/watchlistController");
const router = express_1.default.Router();
router.get('/watchlist', watchlistController_1.getWatchlistHandler);
router.post('/watchlist/add', watchlistController_1.addCoin);
router.delete('/watchlist/remove', watchlistController_1.deleteCoinHander);
exports.default = router;
