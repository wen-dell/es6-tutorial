function go() {
    {
        function doSomething() {
            return 1;
        }

        console.log(doSomething());

        {

            function doSomething() {
                return 2;
            }

            console.log(doSomething());

        }

        console.log(doSomething());
    }
}

go();