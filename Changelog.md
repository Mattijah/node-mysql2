Backlog:
  - Multiple results support in binary protocol              #27
  - Apply timezone from config to DATETIME values with no tz #15
  - custom typeCast handlers in generated parser             #39

HEAD

0.12.1 0 30/04/2014

  - 'dateStrings' connection option support                  #99
  - use anonymous function for packet routing instead
    of .bind() 3-5% speed improvement
  - GEOMETRY type support in bimary protocol                 #97

0.12.0 - 29/04/2014

  - route connection time errors from handshke command to
    connection                                               #96

  - support for nestTables and rowsAsArray options in query()
    and execute()                                            #95, #94

  - bugfix: date as parameter in prepared statement,
    day of week was used incorrectly
    instead of day of month                                  #89     ab28dfca839728dfe40d941091902185d7c19b57

   - GEOMETRY type support ported from node-mysql            #93     ebd30fd12b3b7f53d97b9d09f947b12f61e0c2c5

0.11.8

  - add DATE type support                                    #84     1d49651d8e40bf43b79937d9de9b2909126b892c
  - faster DATE parsing in text protocol                             cdfed2881462798bd85fbf906ea604875a3bd625


0.11.7
  - initial implementaion of binlog protocol            #83 #78      c8d45da6fc13a56d95ce6d57c3c8aa9524548770
  - interpret null DOUBLE values as null instead 0 #85               4c03b23f30949be0608d9543d69243944d79bb4a
  - use srcEscape for null values (bunary parser)                    ef50bcafa452588eda4a40037b41f6b961085046

0.11.6
  - minor cleanups

0.11.5
  - fix for non-utf strings serialisation (binary protocol only)     cf9594aaab5b3d51a112bd1f43b39a55f508eef7

0.11.4
  - support YEAR type in prepared statements                         a0f33b5a4de4529130b3c4137f7a1dd3c02aed9e

0.11.3
  - add transaction helpers                             #56, #76     cc0a9f9b721900d3a22c7fc84a5244c74cd33dd5

0.11.2

  - wrap callbacks in nextTick for exception safety                  b73ac9868804b603a0ab6df6129cf3682476d118
  - domains support                                          #73     36cba61359c83018a847ac4e7748d920b6f863c4

0.11.1

  - buxfix: connection.connect callback was called more than once
                                                             #72      0352eefdafc0986f1ec79c0ce285f722ca12af16

0.11.0
  - Bundle Amazon RDS cert and allow to connect using                 e6af097b5facc089f1999c1fb076ada0ce2e7e99
    'Amazon RDS' as ssl value

0.10.7

  - Amazon RDS+ssl example and public CA cert                         709394a4afbbaf0500439e72caec5d37e949fe26
  - pool updated from node-mysql                   #71, #68, #61      db561dbe10a55bb0f9893eb0e2c4b429edd6ee3a

0.10.6
  - handle TIMESTAMP type                                    #59      6dd6fc82d95a16e18092c4db4e8da225b37e9314
  - rename pool's connection.end() to connection.release()   #53      c63b2442e3c0fb5ea3953725ba9c1b3e08b2b831

0.10.5

  - node-mysql compatibility: remove 'number of results in response'
    callback argument (Brian White)                          #46       40af0530403a3892743d32974055c5ea23cbd3ec
  - node 0.11 (use on('data') instead of ondata )                      39906c78b85a77e468694814a50f99714d7bbbd6
  - fix again ssl (#41)                                                713051bf997a186774b618cde583707320a1d551

0.10.4
  - node-mysql compatibility: remove 'number of results in response'
    callback argument (Brian White)                          #45       c9cb926360da5e4028f7d2f83f4b4e94897cd8b8
  - 'resultIndex' parameter for non-multiple results query             8879bdde397b6cd730d234383fa322becd1134de

0.10.3
  - various ssl fixes and refactoring (ssl was broken for some time)   213d375f7263cb6f5e724fdac3ea156ccee4bbd4
  - Server protocol: handle null values serialisation
     (Michael Muturi Njonge)                                 #36       831b2a100795f36649f0c3d79b7839a95f771a05

0.10.2
  - return DECIMAL and NEWDECIMAL as string in binary prot   #40       969fba6ff1dbf14d53d3efc9f94083b8306cf0b5

0.10.1
  - Added ping command                                       #38       cbca8648d1282fb57e55b3735c3b4d9a46d89d7b

0.9.2
  - correctly parse NULL result for string and number        #35       0a4ac65ec812f75861dc00c9243921d5d6602914
  - do not pollute global namespace from evaled parser       #11       4b6ddaf0f70150945d0fea804db9106f343a0e51

0.9.1
  - PoolClaster ported from node-mysql                       #34

0.8.21
  - Fix in error message parsing (Noam Wasersprung)          #31       6cc80a67eaa3baac7dd8eee7182c9eb00977e81a
  - return insert/delete header for insert/delete commands   #32       72aa8fe70981d7410a10edb9d7921e5d6ce1d3ca

0.8.20
  - Make packet parser work with 0.11 ondata(buffer) with no start,end 9005fd1
  - Allow to use Date-like objects as date parameters (Amir Livneh)    6138dad0581fd5e2c45e1ce0b999e334db8979cf

0.8.19
  - Multiple results support in text protocol #15                      4812adaf1aa5b1dfa775a6cf0fa3bae54a7827d0
  - Use connection flags from createConnection parameters/url string   9218f055ceeb95ae7205348e06c07b89b799d031
