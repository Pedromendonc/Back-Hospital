import { Request, Response } from 'express';
import { sequelizes } from '../instances/mysql'
import { Hospital } from '../models/hospital';


export const testeconexao = async (req: Request, res: Response)=>{
    try {
        await sequelizes.authenticate();
        console.log("Conexão estabelecida com sucesso!")
    } catch (error) {
        console.log("Deu problem: ",error);
        res.status(400);
    }
  
  res.send('Está Funcionado!');
};

export const newHospital = async (req: Request, res: Response)=>{
    let { nome,endereco,telefone,horas,urlimg }=req.body;
    const hospital = await Hospital.create({
        nome,
        urlimg,
        endereco,
        telefone,
        horas
    });
    res.send(hospital)
};

export const updateHospital = async (req: Request, res: Response)=>{
    let { id,nome,endereco,telefone,horas,urlimg }=req.body;
    await Hospital.update({nome,endereco,telefone,horas,urlimg},{
        where: {
            id
        }
    });
    res.send('Atualizado com sucesso!')
    
};

export const Hospitais = async (req: Request, res: Response)=>{
 const hospital = await Hospital.findAll();
 
 res.send(hospital)
};

export const umHospital = async (req: Request, res: Response)=>{
 const hospital = await Hospital.findAll({
    where: {
        id:req.query.id
    }
  });
 
 res.send(hospital)
};

export const hospitalAleatorio = async (req: Request, res: Response)=>{
 const hospital = await sequelizes.query('SELECT * FROM hospitais ORDER BY RAND() LIMIT 1');
 res.send(hospital)
};



export const deleteHospital = async (req: Request, res: Response)=>{
  await Hospital.destroy({
      where: {
          id: req.query.id
      }
  });
  res.send('Deletado Com sucesso!')
    
};


