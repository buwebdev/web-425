import * as express from "express";

const app = express();

interface Composer {
    id: number,
    firstName: string,
    lastName: string
}

const composers: Composer[] = [
    { id: 1, firstName: "Johann", lastName: "Bach"},
    { id: 2, firstName: "Wolfgang", lastName: "Mozart"},
    { id: 3, firstName: "Ludwig", lastName: "Beethoven"},
    { id: 4, firstName: "Giuseppe", lastName: "Verdi"},
    { id: 5, firstName: "Frederic", lastName: "Chopin"},
];

// TODO: This is a todo list
function getComposers(): Composer[] {
    return composers;
}

app.get('/', (request, response) => {
    response.send('The URL for composers is http://localhos:3000/api/composers');
});

app.get('/api/composers', (request, response) => {
    response.json(getComposers());
});

function getComposerById(composerId: number): Composer {
    return composers.find(c => c.id == composerId);
}

app.get('/api/composer/:id', (request, response) => {
    response.json(getComposerById(request.params.id));
});

const server = app.listen(3000, "localhost", () => {
    console.log("Listening on port 3000");
});
