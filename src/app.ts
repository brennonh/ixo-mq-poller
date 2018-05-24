require('dotenv').config();
import mq from './MessageQ';

mq.connect()
    .then((conn: any) => {
        setInterval(mq.subscribe(), 3000);
    }).catch(() => { });

process.on('SIGTERM', function () {
    console.log('Shut down');
    mq.connection.close();
});