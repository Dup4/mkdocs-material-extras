# Data tables

## Usage

Data tables can be used at any position in your project documentation and can
contain arbitrary Markdown, including inline code blocks.

``` markdown title="Data table"
| Method   | Description                          |
| -------- | ------------------------------------ |
| `GET`    | :material-check:     Fetch resource  |
| `PUT`    | :material-check-all: Update resource |
| `DELETE` | :material-close:     Delete resource |
```

<div class="result" markdown>

| Method   | Description                          |
| -------- | ------------------------------------ |
| `GET`    | :material-check:     Fetch resource  |
| `PUT`    | :material-check-all: Update resource |
| `DELETE` | :material-close:     Delete resource |

</div>

### Column alignment

If you want to align a specific column to the `left`, `center` or `right`, you
can use the [regular markdown syntax][] placing `:` characters at the beginning
and/or end of the divider.

=== "Left"

    ``` markdown hl_lines="2" title="Data table, columns aligned to left"
    | Method   | Description                          |
    | :------- | :----------------------------------- |
    | `GET`    | :material-check:     Fetch resource  |
    | `PUT`    | :material-check-all: Update resource |
    | `DELETE` | :material-close:     Delete resource |
    ```

    <div class="result" markdown>

    | Method   | Description                          |
    | :------- | :----------------------------------- |
    | `GET`    | :material-check:     Fetch resource  |
    | `PUT`    | :material-check-all: Update resource |
    | `DELETE` | :material-close:     Delete resource |

    </div>

=== "Center"

    ``` markdown hl_lines="2" title="Data table, columns centered"
    |  Method  |             Description              |
    | :------: | :----------------------------------: |
    |  `GET`   | :material-check:     Fetch resource  |
    |  `PUT`   | :material-check-all: Update resource |
    | `DELETE` | :material-close:     Delete resource |
    ```

    <div class="result" markdown>

    |  Method  |             Description              |
    | :------: | :----------------------------------: |
    |  `GET`   | :material-check:     Fetch resource  |
    |  `PUT`   | :material-check-all: Update resource |
    | `DELETE` | :material-close:     Delete resource |

    </div>

=== "Right"

    ``` markdown hl_lines="2" title="Data table, columns aligned to right"
    |   Method |                          Description |
    | -------: | -----------------------------------: |
    |    `GET` |  :material-check:     Fetch resource |
    |    `PUT` | :material-check-all: Update resource |
    | `DELETE` | :material-close:     Delete resource |
    ```

    <div class="result" markdown>

    |   Method |                          Description |
    | -------: | -----------------------------------: |
    |    `GET` |  :material-check:     Fetch resource |
    |    `PUT` | :material-check-all: Update resource |
    | `DELETE` | :material-close:     Delete resource |

    </div>

## Examples

|                           Name                           |Date|Award|Rank|Solved|A|B|C|D|E|F|G|H|I|J|K|L|M|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|                        2018 ZJPSC                        |2018.04.29|Bronze|86|6/13|O|O|.|.|.|.|.|.|.|O|O|O|O|
|                  2018 CCPC Jilin Onsite                  |2018.09.22|Bronze|95|5/12|O|O|O|O|O|.|.|.|.|.|.|.|
|                2018 ICPC Shenyang Onsite                 |2018.10.21|Bronze|74|2/13|.|.|O|.|.|.|.|.|.|O|.|.|.|
|                2018 ICPC Tsingdao Onsite                 |2018.11.04|Honorable|241|3/13|.|.|O|.|.|.|.|.|.|O|.|.|O|
|                     2018 CCPC Final                      |2018.11.25|Bronze|43|5/12|O|O|.|.|.|.|O|.|O|.|.|O|
|                        2019 ZJPSC                        |2019.04.27|Gold|7|9/13|.|O|O|.|O|O|O|O|O|O|O|.|.|
|2019 ICPC China Nanchang Invitational Programming Contest|2019.06.01|Silver|64|5/12|.|.|.|.|.|O|O|.|.|O|O|O|
|              2019 CCPC Qinghuangdao Onsite               |2019.09.22|Bronze|80|4/12|O|.|.|O|.|O|.|.|O|.|.|.|
|                 2019 CCPC Xiamen Onsite                  |2019.10.20|Silver|36|5/12|O|.|.|O|.|.|O|O|.|O|.|.|
|                 2019 ICPC Nanjing Onsite                 |2019.10.27|Silver|40|5/11|O|.|O|.|.|O|.|O|.|.|O|
|                2019 ICPC Nanchang Onsite                 |2019.11.10|Gold|28|5/13|.|.|O|.|O|.|O|.|.|.|O|O|.|
|                     2019 CCPC Final                      |2019.11.17|Honorable|91|3/12 |O|.|.|.|.|.|.|.|.|.|O|O|
|                    2019 ICPC EC Final                    |2019.12.15|Silver|87|4/13|O|.|.|.|O|.|.|O|.|.|.|.|O|
|          [2020 ZJPSC](/team/1/article/details/61)        |2020.10.17|Gold|12|7/12|O|O|O|.|O|.|O|!|O|.|O|.|
|          2021 ZJPSC                                      |2021.04.18|Silver|38|7/13|O|.|O|!|.|O|O|.|!|O|.|O|O|

[regular markdown syntax]: https://www.markdownguide.org/extended-syntax/#tables
