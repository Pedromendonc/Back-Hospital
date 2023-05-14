import { Model, DataTypes, Sequelize } from 'sequelize';
import { sequelizes } from '../instances/mysql';


export interface NewsInstance extends Model {
  id: number;
  nome: string;
  endereco: string;
  urlimg: string;
  horas: number;
  telefone: string;
}

export const Hospital = sequelizes.define<NewsInstance>("hospital", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  nome: {
    type: DataTypes.STRING
  },
  endereco: {
    type: DataTypes.STRING
  },
  urlimg: {
    type: DataTypes.STRING
  },
  horas: {
    type: DataTypes.NUMBER
  },
  telefone: {
    type: DataTypes.STRING
  }
}
  , {
    tableName: 'hospitais',
    timestamps: false
  });