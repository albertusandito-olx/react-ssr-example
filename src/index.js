import path from 'path';
import fs from 'fs';

import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
	const content = renderToString(<Home />);

	const indexFile = path.resolve('./public/index.html');
  	fs.readFile(indexFile, 'utf8', (data) => {
    	return res.send(
     		data.replace('<div id="root"></div>', `<div id="root">${content}</div>`)
    	);
  	});
});

app.listen(3000, () => {
	console.log('Listening on port 3000.');
});

// const html = `
// 	<html>
// 		<head></head>
// 		<body>
// 			<div id="root">${content}</div>
// 			<script src="bundle.js"></script>
// 		</body>
// 	</html>
// `;

//res.send(html);

/*
import express from 'express';
import renderer from './helpers/renderer';


const app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {
	res.send(renderer(req));
});

app.listen(3000, () => {
	console.log('Listening on port 3000.');
});*/