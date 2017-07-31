import resource from 'resource-router-middleware';
import facets from '../models/facets';

export default resource({

	/** Property name to store preloaded entity on `request`. */
	id : 'facet',

	/** For requests with an `id`, you can auto-load the entity.
	 *  Errors terminate the request, success sets `req[id] = data`.
	 */
	load(req, id, callback) {
		// var facet = facets.find( facet => facet.id===id ),
		// 	err = facet ? null : 'Not found';
		let facet = facets.findById(id, (err, facet) => {
			callback(err, facet);
		})
	},

	/** GET / - List all entities */
	index({ params }, res) {
		facets.find((err, facet) => {
			if(err) {
				console.error(err);
			} else {
				res.json(facet);
			}
		})
	},

	/** POST / - Create a new entity */
	create({ body }, res) {
		// body.id = facets.length.toString(36);
		// facets.push(body);
		let facet = new facets({
			text: body.text
		})
		facet.save(err => {
			if(err) {
				console.error(err);
			} else {
				console.log('model created.');
				res.json(facet);
			}
		})
	},

	/** GET /:id - Return a given entity */
	read({ facet }, res) {
		// var facet = facets.find( facet => facet.id===id ),
		// 	err = facet ? null : 'Not found';
		res.json(facet);
	},

	/** PUT /:id - Update a given entity */
	update({ facet, body }, res) {
		for (let key in body) {
			if (key!=='id') {
				facet[key] = body[key];
			}
		}
		facet.save(err => {
			if(err) {
				console.error(err);
			} else {
				console.log('model updated.');
				res.status(201)
					  .json(facet);
			}
		});
	},

	/** DELETE /:id - Delete a given entity */
	delete({ facet }, res) {
		// facets.splice(facets.indexOf(facet), 1);
		facet.remove(err => {
			if(!err) {
				console.log('model deleted.');
				res.status(204)
						.send();
			} else {
				console.error(err);
			}
		});
	}
});
