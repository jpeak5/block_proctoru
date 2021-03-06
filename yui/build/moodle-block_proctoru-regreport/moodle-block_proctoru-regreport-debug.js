YUI.add('moodle-block_proctoru-regreport', function (Y, NAME) {

M.block_proctoru = M.block_proctoru || {};
M.block_proctoru.regreport = {
  init: function(data) {

    var table = new Y.DataTable({
        columns:    ['lastname','firstname', 'username','idnumber', 'major', 'college','status', 'role'],
        data:       data,
        sortable:   true,
        scrollable: 'y',
        height:     '600px'
    });
    
    table.render('#report');
  }
};

}, '@VERSION@', {"requires": ["datatable", "datatable-scroll"]});
