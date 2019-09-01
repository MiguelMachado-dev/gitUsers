import axios from 'axios';
import github from '../../services/github';

class SearchController {
  async getUser(req, res) {
    const { user } = req.body;

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const apiResponse = await axios.get(`${github.baseUrlGit}/${user}`);

    const { login, name, location, bio } = apiResponse.data;

    return res.json({
      login,
      name,
      location,
      bio,
    });
  }
}

export default new SearchController();
