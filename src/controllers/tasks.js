import { connect } from '../database'


export const getTasks = async (req, res) => {
    const db = await connect()
    const [rows] = await db.query('select * from tasks')

    res.json(rows)
    // console.log(rows)
    // res.send(rows)
}
export const getTask = async (req, res) => {
    const ID = req.params.id
    const db = await connect()
    const [row] = await db.query('select * from tasks where id = ?', [ID])

    res.json(row[0])
}


export const getTasksCount = async (req, res) => {
    const connection = await connect()
    const [num] = await connection.query('select count(*) from tasks')

    res.json(num[0]['count(*)'])
}

export const createTask = async (req, res) => {
    const db = await connect()
    const [result] = await db.query('insert into tasks(title, description) values(?,?)', [req.body.title, req.body.description])

    res.json({
        id: result.insertId,
        ...req.body
    })
}

export const deleteTaks = async (req, res) => {
    const db = await connect()
    await db.query('delete from tasks where id = ?', [req.params.id])

    res.sendStatus(204)
}

export const updateTask = async (req, res) => {
    const db = await connect()
    const row = await db.query('update tasks set ? where id = ?', [
        req.body,
        req.params.id
    ])

    // res.json(row)
    res.sendStatus(204)
}
