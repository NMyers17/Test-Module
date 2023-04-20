import {registerSettings} from "./scripts/settings.mjs";
import {refreshColors, _performSheetEdits} from "./scripts/modules/sheetEdits.mjs";
import {EXHAUSTION} from "./scripts/modules/zalgon_functions.mjs";
import {DEPEND, MODULE} from "./scripts/const.mjs";

Hooks.once("init", registerSettings);
Hooks.once("ready", refreshColors);


Hooks.on("renderActorSheet", _performSheetEdits);
Hooks.on("dnd5e.restCompleted", EXHAUSTION._longRestExhaustionReduction);