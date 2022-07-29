import pkg from 'pg';
const { Pool } = pkg;

const connectToPostgre = async () => {

    if(global.connection && global.connection !== 'disconnected')
    {
        return global.connection;
    }

    const DATABASE_URL = 'postgres://xiujapdtjagvit:125dca7b92b793f8cf3409746068f3d5119362a1eca2ac782a659e58f68d74a5@ec2-100-26-39-41.compute-1.amazonaws.com:5432/d5ei1f2tuscrfd';

    const db = new Pool({ DATABASE_URL });
    console.log('Conexão realizada com sucesso.');
    global.connection = db;
};

//export { db };

// connectToPostgre();

 export { connectToPostgre };