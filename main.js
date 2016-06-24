var API_PATH = "http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=0a1e7957-7699-452c-8020-bf11a5408fc8&limit=50"

function getData(cb) {
  $.ajax({
    url : API_PATH,
    method : "GET",
    success : function(data) {
      cb(null, data);
    },
    error : function(err) {
      cb(err);
    }
  });
}
