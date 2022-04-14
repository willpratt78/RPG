import { Character, NonPlayerCharacter } from "../src/character";
// import { Battle } from "../src/battle";

import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';



function CreateChar (isTurn, type, weapon) {
  let info = new Character(true, "#type", "#weapon");
}

function NPC (type, weapon, isTurn) {
  let npc = new NonPlayerCharacter("wizard", "stick", false)
}

$( "#charCreation" ).on(function () {
  const newChar = CreateChar;
  const npc = NPC;
})