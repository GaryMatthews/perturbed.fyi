#!/usr/bin/env node

import { publish } from 'gh-pages';

publish('../packages/public', {
	branch: 'gh-pages',
	repo: 'git@github.com:GaryMatthews/perturbed.fyi.git',
	cname: 'www.perturbed.fyi',
	message: 'Publish commit',
}, (err) => {
	if (err) {
		return console.error('Publish error!', err);
	}
	console.log('Published!')
});