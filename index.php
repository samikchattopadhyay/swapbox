<html>
    <head>
        <script src="http://code.jquery.com/jquery-1.8.1.min.js"></script>
        <script src="swapbox.js"></script>
        <script>
            $(document).ready(function(){
                $('#payment-method').swapbox();
                $('#cuisine-type').swapbox();
            });
        </script>
    </head>

    <body>

        <pre>
            <?php
            if (isset($_POST['submit'])) {
                print_r($_POST);
            }
            ?>
        </pre>

        <form action="" method="post">

            <table>
                <tbody>
                    <tr>
                        <td>
                            <select style="height:95px; width:270px" class="inp2 " multiple="" name="source1" id="cuisine-type-source">
                                <option value="nind">North Indian Food</option>
                                <option value="sind">South India Food</option>
                                <option value="ff">Fast Food</option>
                                <option value="cc">Chinese Food</option>
                                <option value="tf">Thai food</option>
                            </select>
                        </td>
                        <td width="65" align="center" id="cuisine-type">
                            <input type="button" value="&gt;&gt;" class="send-all"><br>
                            <input type="button" value="&gt;" class="send-selected"><br>
                            <input type="button" value="&lt;" class="get-selected"><br>
                            <input type="button" value="&lt;&lt;" class="get-all"><br>
                        </td>
                        <td>
                            <select style=" width:170px; height:95px;" class="inp " multiple="" name="cuisine[]" id="cuisine-type-target">
                                
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>


            <table>
                <tbody>
                    <tr>
                        <td>
                            <select style="height:95px; width:290px" class="inp2 " multiple="" id="payment-method-source">
                                <option value="chk">Checks</option>
                                <option value="nb">Net Banking</option>
                                <option value="fa">Financing Available</option>
                                <option value="cs">Cash</option>
                                <option value="cc">Credit Cards</option>
                                <option value="pm1">Payment Method 1</option>
                                <option value="pm2">Payment Method 2</option>
                                <option value="pm3">Payment Method 3</option>
                            </select>
                        </td>
                        <td width="65" align="center" id="payment-method">
                            <input type="button" value="&gt;&gt;" class="send-all"><br>
                            <input type="button" value="&gt;" class="send-selected"><br>
                            <input type="button" value="&lt;" class="get-selected"><br>
                            <input type="button" value="&lt;&lt;" class="get-all"><br>
                        </td>
                        <td>
                            <select style=" width:200px; height:95px;" class="inp" multiple="" name="paymethod[]" id="payment-method-target">

                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button type="submit" name="submit">Submit</button>
        </form>
    </body>
</html>