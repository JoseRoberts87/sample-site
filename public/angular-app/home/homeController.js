app.controller('homeController', homeController);

function homeController(dataFactory) {
    var vm = this;
    vm.title = 'Home';

    dataFactory.posts().then(function (response) {
        vm.posts = response[0];
        angular.element(document).ready(function () {
            vm.posts.forEach(function (post) {
                var quill = new Quill('#a' + post.post_id, {
                    readOnly: true,
                    modules: {
                        toolbar: false
                    }
                });

                var postEntry = post.entry.substr(0, 190);
                var parens = ((postEntry.match(new RegExp("{", "g")) || []).length) - ((postEntry.match(new RegExp("}", "g")) || []).length);
                var quote = ((postEntry.match(new RegExp('"', "g")) || []).length);
                console.log(parens)
                if (quote != 0) {
                    postEntry = postEntry + '..."}';
                }
                if (parens > 2) {
                    postEntry = postEntry + '}';
                }
                if (parens != 0) {
                    postEntry = postEntry + ']}';
                }
                console.log(postEntry)

                var entry = JSON.parse(postEntry);
                quill.setContents(entry, 'api');
            });
        })
    });

}