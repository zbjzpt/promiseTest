/**
 * resource 1.html 2.html 3.html 文件内容
 */

const fs = require( 'fs' )
const util = require( 'util' )

const mineReadFile = util.promisify( fs.readFile )

// 回调函数的方式
// fs.readFile( './resource/1.html', ( err, data01 ) => {
//     if ( err ) throw err
//     fs.readFile( './resource/2.html', ( err, data02 ) => {
//         if ( err ) throw err
//         fs.readFile( './resource/3.html', ( err, data03 ) => {
//             if ( err ) throw err
//             console.log( data01 + data02 + data03 )
//         } )
//     } )
// } )

// async 与 await
async function main () {
    try {
        // 读取第一个文件的内容
        let data01 = await mineReadFile( './resource/1.html' )
        let data02 = await mineReadFile( './resource/2.html' )
        let data03 = await mineReadFile( './resource/3.html' )
        console.log( data01 + data02 + data03 )
    } catch ( e ) {
        console.log( e )
    }
}

main()