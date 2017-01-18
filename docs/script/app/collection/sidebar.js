define(['backbone'],
  function( Backbone ){
    var Sidebar = new Backbone.Collection([
        { name: "Dashboard", url: "dashboard" },
        { name: "Users", url: "users" }
      ]);
    return Sidebar;
  }
);