const fs = require( 'fs' );

const pathTag = '../tags/';
const pathTxt = '../textos/';

const findTagsInFiles = ( path, callback ) => {
	const tags = {};
	const regexTag = /#[\w|\d|_|-]+/;
	const regexTagLine = /#{6}.+#[\w|\d|_|-]+/;

	fs
		.readdirSync( path )
	 	.filter(( file ) => (file.indexOf(".") !== 0) && (file !== "index.js") )
		.forEach(( file, index, list ) => {
			fs.readFile( path+file, 'utf8', ( err, data ) => {
				if (err) throw err;

				const lines = data.split( '\n' );
				const title = lines.length > 0 ? lines[0].substring( 2, lines[0].length) : null;

				for ( let line = 0; line < lines.length; line++ ) {
					const tagFind = lines[line].match( regexTagLine );

					if ( tagFind ) {
						const tagNameFind = tagFind[0].match( regexTag );
						const tagName = tagNameFind[0].substring( 1, tagNameFind[0].length );

						if ( !tags[tagName] ) {
							tags[tagName] = [];
						}

						tags[tagName].push({
							file,
							title
						});
					}
				}

				if ( index+1 === list.length ) {
					callback( tags );
				}
			});

		});
}

const makeTagFiles = ( path, tags ) => {
	for ( let key in tags ) {
		const fileName = `${path}${key}.MD`;
		const linesTagFile = tags[key]
			.sort( ( a, b ) => a.title > b.title )
			.map( item => ( `* [${item.title}](../textos/${item.file})` ));

		makeFile( fileName, linesTagFile );
	}
};

const makeFile = ( name, lines ) => fs.writeFileSync( name, lines.join( '\n' ));

findTagsInFiles( pathTxt, ( list ) => makeTagFiles( pathTag, list ));