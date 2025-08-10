var menu= document.getElementById("left-sidebar")

menu.innerHTML= `<h5 class="brand-name">Ericsson<a href="javascript:void(0)" class="menu_option float-right"><i class="icon-grid font-16" data-toggle="tooltip" data-placement="left" title="Grid & List Toggle"></i></a></h5>
        <ul class="nav nav-tabs">
            <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#menu-uni">University</a></li>
            <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#menu-admin">Admin</a></li>
        </ul>
        <div class="tab-content mt-3">
            <div class="tab-pane fade show active" id="menu-uni" role="tabpanel">
                <nav class="sidebar-nav">
                    <ul class="metismenu">
                        <li><a href="index.html"><i class="fa fa-dashboard"></i><span>Dashboard</span></a></li>
                        <li class="active"><a href="students.html"><i class="fa fa-users"></i><span>Alunos</span></a></li>
                        <li class=""><a href="matricula.html"><i class="fa fa-file-text"></i><span>Matriculas</span></a></li>
                        <li class=""><a href="notas.html"><i class="fa fa-pencil-square-o"></i><span>Notas</span></a></li>
                        <li class=""><a href="frequencias.html"><i class="fa fa-calendar-check-o"></i><span>Frequências</span></a></li>
                        <li><a href="professors.html"><i class="fa fa-black-tie"></i><span>Professores</span></a></li>
                        <li><a href="niveis.html"><i class="fa fa-book"></i><span>Nivel</span></a></li>
                        <li><a href="disciplinas.html"><i class="fa fa-graduation-cap"></i><span>Disciplinas</span></a></li>   
                        <li><a href="payments.html"><i class="fa fa-money"></i><span>Pagamentos</span></a></li>
                        <li><a href="financas.html"><i class="fa fa-line-chart"></i><span>Finaças</span></a></li>
                                      
                        <li class="g_heading">Extra</li>
                        <li><a href="events.html"><i class="fa fa-calendar"></i><span>Calendário</span></a></li>
                        <li><a href="events.html"><i class="fa fa-bar-chart"></i><span>Estatísticas Gestão</span></a></li>
                        <li><a href="events.html"><i class="fa fa-pie-chart"></i><span>Estatísticas Financeira</span></a></li>
                        <li><a href="events.html"><i class="fa fa-gear"></i><span>Definições</span></a></li>
                        
                    </ul>
                </nav>
            </div>
            <div class="tab-pane fade" id="menu-admin" role="tabpanel">
                <nav class="sidebar-nav">
                    <ul class="metismenu">
                        <li><a href="staff.html"><i class="fa fa-user-circle-o"></i><span>Usuários</span></a></li>
                        <li><a href="payments.html"><i class="fa fa-credit-card"></i><span>Payments</span></a></li>
                        <li><a href="noticeboard.html"><i class="fa fa-dashboard"></i><span>Noticeboard</span></a></li>
                        <li><a href="taskboard.html"><i class="fa fa-list-ul"></i><span>Taskboard</span></a></li>
                        <li><a href="hostel.html"><i class="fa fa-bed"></i><span>Hostel</span></a></li>
                        <li><a href="transport.html"><i class="fa fa-truck"></i><span>Transport</span></a></li>
                        <li><a href="attendance.html"><i class="fa fa-calendar-check-o"></i><span>Attendance</span></a></li>
                        <li><a href="leave.html"><i class="fa fa-flag"></i><span>Leave</span></a></li>
                        <li><a href="setting.html"><i class="fa fa-gear"></i><span>Settings</span></a></li>
                    </ul>
                </nav>
            </div>
        </div>`
;
