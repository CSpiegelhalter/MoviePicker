
const netflixMovies = (sequelize, DataTypes) => {
    const NetflixMovies = sequelize.define(
      'netflixMovies',
      {
        title: DataTypes.STRING,
        thumbnail: DataTypes.STRING,
        year: DataTypes.STRING,
        rating: DataTypes.STRING,
        maturity: DataTypes.STRING,
        seasons: DataTypes.STRING,
        summary: DataTypes.STRING,
        genres: DataTypes.STRING,
        cast: DataTypes.STRING
      },
      {
          tableName: 'Netflix',
          timestamps: false
      }
    );
  
    NetflixMovies.sync();
    return NetflixMovies;
  };
  
  module.exports = netflixMovies;