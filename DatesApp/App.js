// Importing necessary modules
import DatesModel from "./DatesModel.js";
import Holiday from "./Holiday.js";

// Getting the current year
const yearEntered = new Date().getFullYear();

// Getting DOM elements by their IDs/classes
const BTN_ADD = document.getElementById('btn-add');
const INPUT_HOLIDAY = document.getElementById('input-holiday');
const LABOR_LIST = document.getElementsByClassName('labor-list')[0];
const LABOR_TEMPLATE_ITEM = document.getElementById('template');

const JSON_CONTENT = document.getElementById('json-content')
const BTN_CREATE = document.getElementById('btn-create')

// Creating a Holiday instance and initializing it
let holiday = new Holiday(BTN_ADD, INPUT_HOLIDAY, LABOR_LIST, LABOR_TEMPLATE_ITEM)
holiday.addholiday();

// Creating a DatesModel instance with initial data and executing methods
let date = new DatesModel(new Date(yearEntered, 0, 0).getTime(), holiday.getHolidayArray(), JSON_CONTENT, BTN_CREATE);
date.InsertDateData(); // Inserts date data into the DOM
date.removeHolidays(); // Removes holidays from the date model
date.removeWeekendsHolidays(); // Removes weekends from the date model

// Generates JSON data from the date model
date.generateJsonData();
