import * as json from './jsonSvc'

export const getData = async (currPage) => {
    return json[`json${currPage + 1}`]
}