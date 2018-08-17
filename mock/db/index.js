import Mock from "mockjs";
import dbAPI from './mock_db';

Mock.mock(/getDBTextSearchList/, 'get', dbAPI.getDBTextSearchInfoByPage);
Mock.mock(/getDBTree/, 'get', dbAPI.getDBTree);




export default Mock;

