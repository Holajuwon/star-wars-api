module.exports = {
	/**
	 * @description Creates the incident table
	 */
	createCommentTable: `
     CREATE TABLE IF NOT EXISTS comments(
        id SERIAL PRIMARY KEY,
        movie_id INTEGER NOT NULL,
        comment VARCHAR(500) NOT NULL,
        user_ip INET,
        created_at TIMESTAMPTZ DEFAULT NOW()
     );
     `,

	/**
	 * @description Create a comment
	 * @param {number} movie_id the id of the movie
	 * @param {string} comment comment from user
	 * @param {string} user_ip public ip of user
	 * @returns {Promise<object>}  returns the created comment
	 */
	createComment: `
    INSERT INTO comments(movie_id, comment, user_ip)
    VALUES($1, $2, $3)
    RETURNING *;
`,

	/**
	 * @description Get comments matching the movie id
	 * @param {number} movie_id the id of the movie
	 * @returns {Promise<object>}  returns all comments matching the movie id
	 */
	getCommentsByMovieId: `
    SELECT * FROM comments
    WHERE movie_id = $1
    ORDER BY created_at DESC;
`,

	/**
	 * @description count movie comments matching the movie id
	 * @param {number} movie_id the id of the movie
	 * @returns {Promise<object>}  returns all count of comments matching the movie id
	 */
	getCommentCountByMovieId: `
    SELECT COUNT(*) 
    FROM comments
    WHERE movie_id = $1;
`,
}
