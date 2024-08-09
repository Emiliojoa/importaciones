import mysql2 from 'mysql2/promise'
const newConnection = async()=>{
try {
    const connection = await mysql2.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'tasks_db'
    })
    return connection;


} catch (error) {
    console.error("pasó algo conectando la db", error);
throw new Error({ message: "se produjo un error: ", error})

}
 }


 export default newConnection