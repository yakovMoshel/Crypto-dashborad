"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cryptoController_1 = require("../api/controller/cryptoController");
const router = express_1.default.Router();
router.get('/', cryptoController_1.getCryptos);
router.get('/:id', cryptoController_1.getCryptoDetails);
exports.default = router;
