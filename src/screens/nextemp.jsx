import React from "react";

function nextemp() {
  return (
    <div>
      
      <Box className="card-body d-flex flex-column">
        <p className="card-text">{props.taskInfo.description}</p>

        <Box className="mt-auto text-right">
          <button
            className="btn btn-danger btn-sm mr-2"
            onClick={() => props.onDelete(props.taskInfo.task_id)}
          >
            Delete
          </button>
          <button
            className="btn btn-success btn-sm "
            onClick={() => props.onComplete(props.taskInfo.task_id)}
          >
            Complete
          </button>
        </Box>
      </Box>
    </div>
  );
}

export default nextemp;
