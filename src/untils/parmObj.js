/*
 * @CreateTime: Apr 20, 2018 10:39 AM
 * @Author: huangxiaoxiao
 * @Contact: ljyxiaoxiao@gmail.com
 * @Last Modified By: 
 * @Last Modified Time: Apr 20, 2018 1:51 PM
 * @Description: 将url转化成json
 */

export default function parmObj(url){
    const search = url.split('?')[1]
    if (!search) {
      return {};
    }
    return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
}