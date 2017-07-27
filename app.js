/*
Here I initialized package.json by using node init
And then to intall 'lodash' : node install lodash --save
*/

/* 
Bes practice: 
Never upload node mudules folder on github,
just upload the project files,
to use modules from the node modules folder ( here lodash )
package,json will be helpful
we already initialized dependecies in package.json
So, when we download the files of the project use 'npm install' command
in project folder.
It will install necessary modules according to the dependencies in the package.json
*/
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const updateJsonFile = require('update-json-file');

const filePath = './data/notesData.json';


var argv = yargs.argv;
var command = argv._[0];

console.log("Yargs args: ", argv);
//console.log(notesData);

if (command === 'add') {
    //console.log("Note added");
    var note = notes.addNote(argv.title, argv.body);
    console.log("----------------------");
    if (note) {
        console.log("Note Added:- ");
        console.log("Title is : ", note.title);
        console.log("The Body is : ", note.body);
    } else {
        console.log("The note already exist with the title: ", argv.title);
        console.log("Try using another title!");
    }
} else if (command === 'list') {
    //console.log("List of notes");
    notes.getAll();
} else if (command === 'read') {
    var outputNote = notes.getNote(argv.title);

    console.log("----------------------");
    if (outputNote) {
        console.log("Title is : ", outputNote.title);
        console.log("The Body is : ", outputNote.body);
    } else {
        console.log(`The note with title '${argv.title}' does not exist!`);
    }
} else if (command === 'remove') {
    var isRemoved = notes.removeNote(argv.title);
    console.log("----------------------");
    if (isRemoved) {
        console.log("The note removed succesfully!");
    } else {
        console.log(`The note with Title: '${argv.title}' does not exist!`);
    }
} else {
    console.log("Command not recognized");
}


