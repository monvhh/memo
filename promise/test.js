class Scheduler {
    queue = []

    max = 2

    currIndex = 0;

    add(promiseCreator) {
        let promiseObj = {};
        if (this.queue.length < this.max) {
            promiseObj.doing = true;
            promiseObj.promise = promiseCreator();
        } else {
            const prev = this.queue.slice(-1)
            const prevPromises = this.queue.map(({ promise }) => {
                return promise
            })
            promiseObj.promise = prev[0].doing ? Promise.race(prevPromises).then(() => {
                promiseObj.doing = true;
                return promiseCreator();
            }) : Promise.all(prevPromises.slice(0, -1)).then(() => {
                promiseObj.doing = true;
                return promiseCreator()
            })
        }
        this.queue.push(promiseObj)
        return promiseObj.promise;
    }
}


const timeout = (time) => new Promise(resolve => {
    setTimeout(resolve, time)
})

const scheduler = new Scheduler()
const addTask = (time, order) => {
    scheduler.add(() => timeout(time))
        .then(() => console.log(order))
}

addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')
  // output: 2 3 1 4// 一