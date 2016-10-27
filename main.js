window.onload= function () {
    var mycan = document.getElementById("mycan");
    var con = mycan.getContext("2d");
    con.strokeStyle = "black";
    con.lineWidth = 1;
    //在画布上绘画17条横线
    for (var i = 30; i < 510; i = i + 30) {
        con.beginPath();
        con.moveTo(0, i);
        con.lineTo(1200, i);
        con.stroke();
        con.closePath();
    }
    //在画布上绘画17条竖线
    for (var j = 30; j < 510; j = j + 30) {
        con.beginPath();
        con.moveTo(j, 0);
        con.lineTo(j, 600);
        con.stroke();
        con.closePath();
    }
    //绘制四条边沿线
    con.beginPath();
    con.moveTo(1, 1);
    con.lineTo(509, 1);
    con.lineTo(509, 509);
    con.lineTo(1, 509);
    con.lineTo(1, 1);
    con.stroke();
    con.closePath();
    var dex=0;  //记录黑白棋子总数
    var all=[[0,0]];  //存放数据的数组
    var whiteArr=[];  //白棋数据库
    var blackArr=[];  //黑棋数据库
    //获取可视窗口宽度
    var  mainWidth=document.body.offsetWidth;
    //左侧空白区域的长度
    var    halfWidth=(mainWidth-530)/2;
    mycan.onclick = function () {
        var thisX = event.clientX;
        var thisY = event.clientY;
        var mX = Math.round((thisX-halfWidth)/ 30);
        var mY = Math.round((thisY-120) / 30);
        console.log(mX);
        console.log(mY);
        console.log(mainWidth);
        var num=[mX,mY];
        //查重
        for (x in all)
        {
            if(all[x][0]==mX && all[x][1]==mY  ) {
                console.log("该位置已经放置了棋子！");
                return ;
            }
        }
        all.push(num);
        //绘制黑棋
        if(dex%2==0){
            con.beginPath();
            con.fillStyle="black";
            con.arc(mX*30,mY*30,10,0,Math.PI*2,false);
            con.fill();
            con.closePath();
            blackArr.push(num);
        }
        //绘制白棋
        else {
            con.beginPath();
            con.fillStyle="white";
            con.arc(mX*30,mY*30,10,0,Math.PI*2,false);
            con.fill();
            con.closePath();
            whiteArr.push(num)
        }
        dex++;
        if(dex>8){
            var countX=0;
            var countY=0;
            var blackwinY=[];
            var blackwinX=[];
            var whitewinY=[];
            var whitewinX=[];
            //判断Y轴是否存在5个
            for (var i=0;i<blackArr.length;i++){
                if (blackArr[i][0]==mX){
                    countY++;
                    blackwinY.push(blackArr[i][1]);
                    if(countY>4){
                        blackwinY=blackwinY.sort();
                        var sum=0;
                        for (var j=0;j<blackwinY.length;j++){
                            sum=blackwinY[j]+blackwinY[j+1]+blackwinY[j+2]+blackwinY[j+3]+blackwinY[j+4];
                            var sumTrue=(blackwinY[j]+blackwinY[j+4])*5/2;
                            if(sum==sumTrue){
                                alert("黑棋胜！");location.reload() ;return false
                            }
                        }
                    }
                }
            }
            //判断X轴是否存在5个
            for (var i=0;i<blackArr.length;i++){
                if (blackArr[i][1]==mY){
                    countX++;
                    blackwinX.push(blackArr[i][0]);
                    if(countX>4){
                        blackwinX=blackwinX.sort();
                        var sum2=0;
                        for (var j=0;j<blackwinX.length;j++){
                            sum2=blackwinX[j]+blackwinX[j+1]+blackwinX[j+2]+blackwinX[j+3]+blackwinX[j+4];
                            var sumTrue2=(blackwinX[j]+blackwinX[j+4])*5/2;
                            if(sum2==sumTrue2){
                                alert("黑棋胜！");location.reload() ;return false
                            }
                        }
                    }
                }
            }
            //斜边判断是否存在5个
            for( var i=0;i<blackArr.length;i++){
                var this_X=blackArr[i][0];
                var this_Y=blackArr[i][1];
                for(y1 in blackArr){
                    if((blackArr[y1][0]==this_X+1)&&(blackArr[y1][1]==this_Y+1))  {
                        for(y2 in blackArr){
                            if((blackArr[y2][0]==this_X+2)&&(blackArr[y2][1]==this_Y+2))  {
                                for(y3 in blackArr) {
                                    if ((blackArr[y3][0] == this_X + 3) && (blackArr[y3][1] == this_Y + 3)) {
                                        for (y4 in blackArr) {
                                            if ((blackArr[y4][0] == this_X + 4) && (blackArr[y4][1] == this_Y + 4)) {
                                                alert("黑棋胜！");location.reload() ;return false
                                            }
                                            else {
                                                continue;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
            for( var i=0;i<blackArr.length;i++){
                var nowX=blackArr[i][0];
                var nowY=blackArr[i][1];
                for(y1 in blackArr){
                    if((blackArr[y1][0]==nowX-1)&&(blackArr[y1][1]==nowY-1))  {
                        for(y2 in blackArr){
                            if((blackArr[y2][0]==nowX-2)&&(blackArr[y2][1]==nowY-2))  {
                                for(y3 in blackArr) {
                                    if ((blackArr[y3][0] == nowX - 3) && (blackArr[y3][1] == nowY -3)) {
                                        for (y4 in blackArr) {
                                            if ((blackArr[y4][0] == nowX - 4) && (blackArr[y4][1] == nowY -4)) {
                                                alert("黑棋胜！");location.reload() ;return false;
                                                return ;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
            for( var i=0;i<blackArr.length;i++){
                var secondX=blackArr[i][0];
                var secondY=blackArr[i][1];
                for(y1 in blackArr){
                    if((blackArr[y1][0]==secondX-1)&&(blackArr[y1][1]==secondY+1))  {
                        for(y2 in blackArr){
                            if((blackArr[y2][0]==secondX-2)&&(blackArr[y2][1]==secondY+2))  {
                                for(y3 in blackArr) {
                                    if ((blackArr[y3][0] == secondX - 3) && (blackArr[y3][1] == secondY +3)) {
                                        for (y4 in blackArr) {
                                            if ((blackArr[y4][0] == secondX - 4) && (blackArr[y4][1] == secondY +4)) {
                                                alert("黑棋胜！");location.reload() ;return false;
                                                return ;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
            for( var i=0;i<blackArr.length;i++){
                var thirdX=blackArr[i][0];
                var thirdY=blackArr[i][1];
                for(y1 in blackArr){
                    if((blackArr[y1][0]==thirdX+1)&&(blackArr[y1][1]==thirdY-1))  {
                        for(y2 in blackArr){
                            if((blackArr[y2][0]==thirdX+2)&&(blackArr[y2][1]==thirdY-2))  {
                                for(y3 in blackArr) {
                                    if ((blackArr[y3][0] == thirdX + 3) && (blackArr[y3][1] == thirdY -3)) {
                                        for (y4 in blackArr) {
                                            if ((blackArr[y4][0] == thirdX + 4) && (blackArr[y4][1] == thirdY -4)) {
                                                alert("黑棋胜！");location.reload() ;return false;
                                                return ;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }

            //判断Y轴是否存在5个
            for (var i=0;i<whiteArr.length;i++){
                if (whiteArr[i][0]==mX){
                    countY++;
                    whitewinY.push(whiteArr[i][1]);
                    if(countY>4){
                        whitewinY=whitewinY.sort();
                        var sum0=0;
                        for (var j=0;j<whitewinY.length;j++){
                            sum0=whitewinY[j]+whitewinY[j+1]+whitewinY[j+2]+whitewinY[j+3]+whitewinY[j+4];
                            var sumTrue0=(whitewinY[j]+whitewinY[j+4])*5/2;
                            if(sum0==sumTrue0){
                                alert("白棋胜！");location.reload() ;return false
                            }
                        }
                    }
                }
            }
            //判断X轴是否存在5个
            for (var i=0;i<whiteArr.length;i++){
                if (whiteArr[i][1]==mY){
                    countX++;
                    whitewinX.push(whiteArr[i][0]);
                    if(countX>4){
                        whitewinX=whitewinX.sort();
                        var sum3=0;
                        for (var j=0;j<whitewinX.length;j++){
                            sum3=whitewinX[j]+whitewinX[j+1]+whitewinX[j+2]+whitewinX[j+3]+whitewinX[j+4];
                            var sumTrue3=(whitewinX[j]+whitewinX[j+4])*5/2;
                            if(sum3==sumTrue3){
                                alert("白棋胜！");location.reload() ;return false
                            }
                        }
                    }
                }
            }
            //斜边判断是否存在5个
            for( var i=0;i<whiteArr.length;i++){
                var whiteX=whiteArr[i][0];
                var whiteY=whiteArr[i][1];
                for(y1 in whiteArr){
                    if((whiteArr[y1][0]==whiteX+1)&&(whiteArr[y1][1]==whiteY+1))  {
                        for(y2 in whiteArr){
                            if((whiteArr[y2][0]==whiteX+2)&&(whiteArr[y2][1]==whiteY+2))  {
                                for(y3 in whiteArr) {
                                    if ((whiteArr[y3][0] ==whiteX + 3) && (whiteArr[y3][1] == whiteY + 3)) {
                                        for (y4 in whiteArr) {
                                            if ((whiteArr[y4][0] ==whiteX + 4) && (whiteArr[y4][1] == whiteY + 4)) {
                                                alert("白棋胜！");location.reload() ;return false
                                            }
                                            else {
                                                continue;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
            for( var i=0;i<whiteArr.length;i++){
                var now_X=whiteArr[i][0];
                var now_Y=whiteArr[i][1];
                for(y1 in whiteArr){
                    if((whiteArr[y1][0]==now_X-1)&&(whiteArr[y1][1]==now_Y-1))  {
                        for(y2 in whiteArr){
                            if((whiteArr[y2][0]==now_X-2)&&(whiteArr[y2][1]==now_Y-2))  {
                                for(y3 in whiteArr) {
                                    if ((whiteArr[y3][0] == now_X - 3) && (whiteArr[y3][1] == now_Y -3)) {
                                        for (y4 in whiteArr) {
                                            if ((whiteArr[y4][0] == now_X - 4) && (whiteArr[y4][1] == now_Y -4)) {
                                                alert("白棋胜！");location.reload() ;return false;
                                                return ;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
            for( var i=0;i<whiteArr.length;i++){
                var second_X=whiteArr[i][0];
                var second_Y=whiteArr[i][1];
                for(y1 in whiteArr){
                    if((whiteArr[y1][0]==second_X-1)&&(whiteArr[y1][1]==second_Y+1))  {
                        for(y2 in whiteArr){
                            if((whiteArr[y2][0]==second_X-2)&&(whiteArr[y2][1]==second_Y+2))  {
                                for(y3 in whiteArr) {
                                    if ((whiteArr[y3][0] == second_X - 3) && (whiteArr[y3][1] == second_Y +3)) {
                                        for (y4 in whiteArr) {
                                            if ((whiteArr[y4][0] == second_X - 4) && (whiteArr[y4][1] == second_Y +4)) {
                                                alert("白棋胜！");location.reload() ;return false;
                                                return ;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
            for( var i=0;i<whiteArr.length;i++){
                var third_X=whiteArr[i][0];
                var third_Y=whiteArr[i][1];
                for(y1 in whiteArr){
                    if((whiteArr[y1][0]==third_X+1)&&(whiteArr[y1][1]==third_Y-1))  {
                        for(y2 in whiteArr){
                            if((whiteArr[y2][0]==third_X+2)&&(whiteArr[y2][1]==third_Y-2))  {
                                for(y3 in whiteArr) {
                                    if ((whiteArr[y3][0] == third_X + 3) && (whiteArr[y3][1] == third_Y -3)) {
                                        for (y4 in whiteArr) {
                                            if ((whiteArr[y4][0] == third_X + 4) && (whiteArr[y4][1] == third_Y -4)) {
                                                alert("白棋胜！");location.reload() ;return false;
                                                return ;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        }
    }
}