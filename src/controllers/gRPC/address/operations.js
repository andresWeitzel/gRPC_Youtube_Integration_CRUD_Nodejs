


const createAddress = async (call, callback) => {
    try {
        const address = call.request;
        address.id = address.length + 1;
        address.push(address);
        callback(null, { address });
    } catch (error) {
      console.log(error);
    }

  };