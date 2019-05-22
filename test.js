var users = [{ departmentId:'001', username:'laibx', point:'4.0' },
{ departmentId:'002', username:'huycv', point:'3.9' },
{ departmentId:'003', username:'chinhvd', point:'3.8' }];
var departments = [{ id:'001', code:'abc1', name:'product1', companyId:'001' },
{ id:'002', code:'abc2', name:'product2', companyId:'002' },
{ id:'003', code:'abc3', name:'product3', companyId:'003' }];
var companies = [{ id:'001', code:'xyz1', name:'vietis1' },
{ id:'002', code:'xyz2', name:'vietis2' },
{ id:'003', code:'xyz3', name:'vietis3' }]
var result = new Array();


function return_result(a, b, c) {
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < a.length; j++) {
            if (a[i].departmentId === b[j].id) {
                for (var k = 0; k < c.length; k++) {
                    if (b[j].companyId === c[k].id) {
                        var temp = new Object();
                        temp.companyCode = c[k].code;
                        temp.companyName = c[k].name;
                        temp.departmentCode = b[j].code;
                        temp.departmentName = b[j].name;
                        temp.username = a[i].username;
                        temp.point = a[i].point;
                        result.push(temp);
                    }
                }
            }
        }
    }
}

return_result(users, departments, companies);

for (var i = 0; i < result.length; i++) {
    document.writeln(result[i].companyCode + ' ' + result[i].companyName + ' ' + result[i].departmentCode + ' ' + result[i].departmentName + ' ' + result[i].username + ' ' + result[i].point);
}