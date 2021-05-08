import axios from "axios";

const ADDRESS_API_BASE_URL = "http://localhost:8080/api/address";

class AddressService {

    postAddress(address) {
        return axios.post(ADDRESS_API_BASE_URL, address);
    }

    getAddress(userid) {
        return axios.get(ADDRESS_API_BASE_URL + '/user/' + userid);
    }
}

export default new AddressService();