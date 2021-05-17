function serializeToJson(form) {
  var result = {};
  // [{name: 'username', value: '用户输入的用户名'}]
  var f = form.serializeArray();
  f.forEach(function (item) {
    // result.username
    result[item.name] = item.value;
  });
  return result;
}
