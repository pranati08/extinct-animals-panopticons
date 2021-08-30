import { createContext, useState } from "react";

const WorkerContext = createContext();

const WorkerProvider = ({ children }) => {
    const [worker, setWorker] = useState();

    const changeWorker = async (worker_name) => {
        setWorker(worker_name)
    }

    return <WorkerContext.Provider value={{
        worker,
        setWorker,
        changeWorker
    }}>{ children }</WorkerContext.Provider>;
};

export {WorkerProvider, WorkerContext}