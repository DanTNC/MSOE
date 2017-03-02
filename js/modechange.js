var edit_mode = () =>{
  $(".left").show();
  $(".panel-group").show();
  $(".edit_line").show();
  $("#share").hide();
  Edit=true;
  MSOE.print();
}
var preview_mode = () =>{
  $(".left").hide();
  $(".panel-group").hide();
  $(".edit_line").hide();
  $("#share").show();
  Edit=false;
  MSOE.print();
}
